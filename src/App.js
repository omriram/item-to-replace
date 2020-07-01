import React, { Component } from "react";
import Header from "./components/header/header.component";
import ItemToReplaceList from "./components/item-to-replace-list/item-to-replace-list.component";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Button, Figure } from "react-bootstrap";
import AdditionalItemList from "./components/additional-item-list/additional-item-list.component";
import objInfo from "./assets/jsonFormat";
import Logo from "./assets/logo.jpg";
import "./App.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showOptions: false,
      orderReplacements: {},
      addtionalItems: {},
      itemsToPick: [],
    };
  }

  onCheckOtherOptionsClick = (
    item = null,
    isAdditionalItem = false,
    prevItemCode = null
  ) => {
    const { itemsToPick } = this.state;
    console.log(itemsToPick);
    if (isAdditionalItem && item != null && prevItemCode != null) {
      let isChosenItemForPrevItemExist = false;
      let changeChosenItemForPrevItem = false;
      itemsToPick.forEach((el) => {
        /* Check if customer chose item more than twice */
        if (el.prevItemCode === prevItemCode && el.chosenItem === item.Code) {
          isChosenItemForPrevItemExist = true;
        } else if (
          /* check if customer change his chosen item to a diffrent one */
          el.prevItemCode === prevItemCode &&
          el.chosenItem !== item.Code
        ) {
          changeChosenItemForPrevItem = true;
        }
      });

      if (changeChosenItemForPrevItem) {
        console.log("change chosen item");

        let itemsToPickCpy = [...this.state.itemsToPick];
        itemsToPickCpy.map((pair) => {
          if (pair.prevItemCode === prevItemCode) {
            pair.chosenItem = item.Code;
          }
        });

        this.setState({
          itemsToPick: itemsToPickCpy,
        });
      } else if (!isChosenItemForPrevItemExist) {
        /* add item if not exist */

        const prevItemAndChosenItem = {
          prevItemCode,
          chosenItem: item.Code,
        };
        this.setState({
          itemsToPick: [...this.state.itemsToPick, prevItemAndChosenItem],
        });
      }
    } else if (item != null) {
      /* in case we want to check optional items for current item */
      const currItemAndAlternatives = {
        currItemCode: item.Code,
        alternatives: item.AlternativeItems,
      };
      this.setState({ addtionalItems: currItemAndAlternatives });
    }
    this.setState((state) => ({
      showOptions: !state.showOptions,
    }));
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ orderReplacements: objInfo });
    }, 1000);
  }

  render() {
    return (
      <Container
        style={{
          height: "100vh",
          padding: "1rem",
          border: "solid 5px #dad7d7",
          borderRadius: "10px",
        }}
      >
        <Row
          style={{
            margin: "0",
            paddingBottom: "1rem",
          }}
        >
          <Header
            msg={this.state.orderReplacements.Message}
            fName={this.state.orderReplacements.FirstName}
            lName={this.state.orderReplacements.LastName}
            logo={Logo}
          />
        </Row>
        <Row
          style={{
            margin: "0",
            justifyContent: "flex-end",
            position: "relative",
          }}
        >
          {Object.keys(this.state.orderReplacements).length > 0 && (
            <React.Fragment>
              <ItemToReplaceList
                orderReplacements={this.state.orderReplacements}
                onCheckOtherOptionsClick={this.onCheckOtherOptionsClick}
                itemsToPick={this.state.itemsToPick}
              />
              {this.state.showOptions && (
                <AdditionalItemList
                  addtionalItems={this.state.addtionalItems}
                  onCheckOtherOptionsClick={this.onCheckOtherOptionsClick}
                />
              )}
            </React.Fragment>
          )}
        </Row>
        <Row
          style={{
            marginTop: "1rem",
            justifyContent: "center",
          }}
        >
          <Button variant="success">אישור</Button>
        </Row>
      </Container>
    );
  }
}

export default App;
