import React, { useState, useEffect } from "react";

function Java() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(20);
  const [filter, setFilter] = useState("");
  const [cart, setCart] = useState([]); // Initialize cart as an empty array

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = Array.isArray(products)
    ? products.slice(indexOfFirstProduct, indexOfLastProduct)
    : [];

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredProducts = Array.isArray(products)
    ? products.filter((product) =>
        product.title.toLowerCase().includes(filter.toLowerCase())
      )
    : [];

  //   const addToCart = (product) => {
  //     setCart([...cart, product]);
  //   };
  const addToCart = (id) => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setCart([...data.products]))
      .then(console.log);
  };
  console.log("cart", cart);

  return (
    <div>
      <h1>Mahsulotlar</h1>

      <input
        type="text"
        placeholder="Mahsulotni izlash"
        value={filter}
        onChange={handleFilterChange}
      />

      <ul style={{ display: "flex", flexWrap: "wrap" }}>
        {filteredProducts.map((product) => (
          <li
            key={product.id}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              width: "200px",
              height: "300px",
            }}
          >
            <div style={{ border: "1px solid red" }}>
              {product.images && product.images.length > 0 && (
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={product.images[0]}
                  alt={product.title}
                />
              )}
            </div>
            <div style={{ border: "1px solid red" }}>
              <p>{product.title}</p>
              <p>Price: {product.price}$</p>
            </div>

            <button onClick={() => addToCart(product)}>Savatga qo'shish</button>
          </li>
        ))}
      </ul>

      <div>
        {filteredProducts.length > productsPerPage && (
          <ul className="pagination">
            {Array.from({
              length: Math.ceil(filteredProducts.length / productsPerPage),
            }).map((_, index) => (
              <li key={index} onClick={() => paginate(index + 1)}>
                {index + 1}
              </li>
            ))}
          </ul>
        )}
      </div>

      <h2>Savat</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.title} - {item.price}
            {item.images && item.images.length > 0 && (
              <img
                style={{ width: "150px" }}
                src={item.images[0]}
                alt={item.title}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Java;
