import React from "react";
import "./Cards.css";
function cards({ src, title, description, price }) {
  return (
    <div className="card">
      <img src={src} alt={title} />
      <div className="card__info">
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h3>{price}</h3>
      </div>
    </div>
  );
}

export default cards;
