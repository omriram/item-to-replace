import React from "react";
import { Figure, Button } from "react-bootstrap";

const ChosenItem = (image) => {
  return (
    <Figure className="item-to-replace-figure">
      <Figure.Image
        style={{ height: "10rem", width: "100%", objectFit: "contain" }}
        src={image}
        thumbnail
      />
    </Figure>
  );
};

export default ChosenItem;
