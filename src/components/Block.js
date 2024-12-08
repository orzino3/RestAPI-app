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

      <span className="copyrights">API used in this projects is HP-API ©</span>
    </div>
  );
}

export default Block;
