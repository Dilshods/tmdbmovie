import React, { useState } from "react";
import "./home.css"; // Make sure to create this CSS file for styling
import img3 from "../../assets/images/Clone X 1.png";
import img2 from "../../assets/images/Characters.png";
import img1 from "../../assets/images/jean-vella-AMUXeE7Y2Vc-unsplash 1.png";
import Carousele from "../corusel";
const images = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR34hPo9zGkYxB2NKePgvPeImdm-CDTsHPrt4DFUyU_4A&s",
    title: "clones",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFRmWtO1zrO6tt35ewAJOE9NpAb8yiwhbrBWyxjVQCZw&s",
    title: "clonessadfasd",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm9v7G3n1bvU0qWYvuetfJY1XJM0bbzo7CAn8BignF&s",
    title: "cldsasd",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwQ47DyzTnKHlliq9Y5acG_4Bf4OvSxPmXXKvANEh1&s",
    title: "clonessadfasddfgsdfgsdfg",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOnzfeoBVLbUSDsunXrIdsclUKKeX36_HFuv1I3OgkyQ&s",
    title: "cldsasdsdfgsdfgsdf",
  },
];
const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <div
          className="slider-wrapper"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images?.map((image, index) => (
            <>
              <Carousele image={image} index={index} />
            </>
          ))}
        </div>
      </div>
      <button className="prev-button" onClick={goToPrevSlide}>
        &lt;
      </button>
      <button className="next-button" onClick={goToNextSlide}>
        &gt;
      </button>
      <div className="dots">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
