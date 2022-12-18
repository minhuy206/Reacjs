import React, { Component } from "react";
import Carousel from "./carousel";
import ListItem from "./listItem";

export default class Body extends Component {
  render() {
    return (
      <>
        <Carousel />
        <ListItem />
      </>
    );
  }
}
