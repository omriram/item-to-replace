import React, { Component } from "react";
import ItemToReplace from "./item-to-relplace/item-to-replace.component";
import { Container, Row, Figure, Badge } from "react-bootstrap";
import "./item-to-replace-list.style.scss";

class ItemToReplaceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOptions: false,
    };
  }

  render() {
    const {
      /* show the chosen item */ orderReplacements,
      onCheckOtherOptionsClick,
      itemsToPick,
    } = this.props;

    const itemList = orderReplacements.Items.map((item) => {
      return (
        <Row
          key={item.Code}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <ItemToReplace
            item={item}
            onCheckOtherOptionsClick={onCheckOtherOptionsClick}
          />

          {itemsToPick.map((pair) => {
            if (pair.prevItemCode === item.Code) {
              return item.AlternativeItems.map((altItem) => {
                if (pair.chosenItem === altItem.Code)
                  return (
                    <Figure
                      key={altItem.Code}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: "1rem",
                        width: "50%",
                      }}
                    >
                      <Badge style={{ marginLeft: "1rem" }} variant="success">
                        הפריט שנבחר
                      </Badge>
                      <Figure.Image
                        style={{ height: "5rem" }}
                        src={altItem.Image}
                      />
                    </Figure>
                  );
              });
            }
          })}
        </Row>
      );
    });
    return (
      <div className="holder">
        <Container className="items">{itemList}</Container>
      </div>
    );
  }
}

export default ItemToReplaceList;
