import React from "react";
import "./Figure.css";
import "../App.css";
import FigureDate from "./FigureDate";
import Alternate from "./Alternate";

function Figure(props) {
  return (
    <div className="figure ">
      <div className="description">
        <div className="figureName tooltip">
          <span className="tooltip-text">
            <Alternate nickname={props.nickname} />
          </span>
          {props.name}
        </div>
        <FigureDate date={props.date} />
        <div className="image-container tooltip">
          <img className="figureImage" src={props.photo} alt={props.name} />
          <span className="tooltip-text">{props.identity}</span>
        </div>
      </div>
    </div>
  );
}

export default Figure;
