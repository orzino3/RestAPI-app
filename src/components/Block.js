import React from "react";
import Figure from "./Figure";
import "./Block.css";

function Block(props) {
  return (
    <div className="block">
      {props.items
        .filter((item) => item.photo)
        .filter((item) => item.date)
        .map((item, index) => (
          <Figure
            key={index}
            name={item.name}
            photo={item.photo}
            date={item.date}
            identity={item.identity}
            nickname={item.nickname}
          />
        ))}
    </div>
  );
}

export default Block;
