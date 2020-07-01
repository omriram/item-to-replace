import React from "react";
import { Image, Button, Figure } from "react-bootstrap";
import Bread from "../../../assets/bread.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ItemToReplace.style.scss";

const description = "לחם 100% קמח מלא קל בתוספת שיפון פרוס אנג'ל";
const price = "15";
const weight = "350 גרם";

const ItemToReplace = ({
  item,
  onCheckOtherOptionsClick,
  isAdditionalItem = false,
}) => {
  return (
    <Figure className="item-to-replace-figure">
      <Figure.Image
        style={{ height: "10rem", width: "100%", objectFit: "contain" }}
        src={item.Image}
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

      <Button variant="outline-danger" disabled>
        אין במלאי{" "}
      </Button>

      <Button onClick={() => onCheckOtherOptionsClick(item)} variant="primary">
        {" "}
        חיפוש פריטים דומים
      </Button>
    </Figure>
  );
};

export default ItemToReplace;
