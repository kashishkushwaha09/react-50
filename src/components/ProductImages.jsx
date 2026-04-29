// ProductImages.jsx

import { useState } from "react";

const ProductImages = ({ images }) => {
  const [selected, setSelected] = useState(images[0]);

  return (
    <div>
      <img
        src={selected}
        className="img-fluid mb-3 zoom-img"
        style={{ border: "1px solid #ddd" }}
      />

      <div className="d-flex gap-2">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            width="70"
            style={{ cursor: "pointer" }}
            onClick={() => setSelected(img)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImages;