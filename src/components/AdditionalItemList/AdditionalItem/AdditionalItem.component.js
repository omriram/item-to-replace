import React from "react";
import { Figure, Button } from "react-bootstrap";
import "./AdditionalItem.style.scss";
import "../AdditionalItemList.style.scss";
import back from "../../../assets/back.jpg";

const AdditionalItem = ({ item, prevItem, onCheckOtherOptionsClick }) => {
  return (
    <div className="options-window__item">
      <Figure className="additional-item-figure">
        <Figure.Image
          src={item.Image}
          thumbnail
          style={{ height: "10rem", width: "100%", objectFit: "contain" }}
        />
        <Figure.Caption
          style={{
            overflow: "hidden",
            width: "10rem",
            fontSize: ".85rem",
            textAlign: "right",
          }}
        >
          {item.Name} <br />
          <strong>{item.SalePrice} &#8362;</strong> {"  /  " + item.ContentQty}
        </Figure.Caption>
        <div className="group-fields"></div>
        <Button
          style={{ width: "100%", marginTop: "auto" }}
          onClick={() => onCheckOtherOptionsClick(item, true, prevItem)}
          variant="info"
        >
          בחר{" "}
        </Button>
      </Figure>
    </div>
  );
};

export default AdditionalItem;
