import React from "react";
import { Button } from "react-bootstrap";
import AdditionalItem from "./AdditionalItem/AdditionalItem.component";

import "./AdditionalItemList.style.scss";

const AdditionalItemList = ({ addtionalItems, onCheckOtherOptionsClick }) => {
  const additonalItemList = addtionalItems.alternatives.map((item) => {
    return (
      <AdditionalItem
        key={item.Code}
        item={item}
        prevItem={addtionalItems.currItemCode}
        onCheckOtherOptionsClick={onCheckOtherOptionsClick}
      />
    );
  });
  return (
    <div className="background-darker">
      <div className="options-window">
        <div className="logo-background-transparent"></div>
        <div className="options-window__holder">
          <Button
            onClick={onCheckOtherOptionsClick}
            className="options-window__close"
            variant="ouline-warning"
          >
            &#10006;
          </Button>
          {additonalItemList}
        </div>
      </div>
    </div>
  );
};

export default AdditionalItemList;
