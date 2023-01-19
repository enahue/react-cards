import React from "react";

const Card = ({info, classColor}) => {
  return (
    <div className={`preference-list ${classColor}`}>
      <h3>{info.title}</h3>
      <ul>
        <li>{info.info1}</li>
        <li>{info.info2}</li>
        <li>{info.info3}</li>
        <li>{info.info4}</li>
      </ul>
    </div>
  );
}

export default Card;
