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
            display: "flex",
            flexDirection: "column",
            fontSize: ".85rem",
            textAlign: "right",
            width: "100%",
            alignItems: "center",
          }}
        >
          <span style={{ marginBottom: "1rem" }}>
            {item.Qty + " יח' " + item.Name + "."}
          </span>

          <span style={{}}>
            <strong>{item.SalePrice + "  "} &#8362;</strong>
            {"  /  " + item.ContentQty}
          </span>

          <div
            style={{ display: "flex", width: "100%", justifyContent: "center" }}
          >
            <span style={{ marginLeft: "1rem" }}>
              <strong>{`סה"כ:`}</strong>
            </span>
            <span>
              {" "}
              <strong> {item.SalePrice * item.Qty + "  "}&#8362;</strong>
            </span>
          </div>
        </Figure.Caption>
        <Button
          style={{ width: "10rem", marginTop: "auto" }}
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
