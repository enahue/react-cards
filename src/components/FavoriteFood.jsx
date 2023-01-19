import React from "react";

const FavoriteFood = (props) => {
  
  return (
    <div className="preference-list favoriteFood">
      <h3>{props.title}</h3>
      <ul>
        <li>Bandeja paisa</li>
        <li>Sancocho</li>
        <li>Arroz con pollo</li>
        <li>Carne a la llanera</li>
      </ul>
    </div>
  );
};

export default FavoriteFood;
