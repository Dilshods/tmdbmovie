import React from "react";

const Carousele = ({ image, index }) => {
  return (
    <>
      <div>
        <h1>{image.title}</h1>
      </div>
      <div key={index} className="slide">
        <img style={{ width: "50%" }} src={image.img} alt={`Slide ${index}`} />
      </div>
    </>
  );
};

export default Carousele;
