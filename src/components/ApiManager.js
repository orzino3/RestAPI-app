import React, { useEffect, useState } from "react";
import Block from "./Block.js";
import "../App.css";

function ApiManager() {
  const [figures, setFigures] = useState([]);

  useEffect(() => {
    const fetchFigures = async () => {
      try {
        const response = await fetch(
          "https://hp-api.herokuapp.com/api/characters"
        );
        const data = await response.json();
        console.log(data);

        const formatFiguresList = data.map((figure) => ({
          name: figure.name,
          date: figure.dateOfBirth,
          photo: figure.image,
          identity: figure.actor,
          nickname: figure.alternate_names,
        }));
        setFigures(formatFiguresList);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFigures();
  }, []);

  return (
    <div className="ApiManager">
      <Block items={figures} />
    </div>
  );
}

export default ApiManager;
