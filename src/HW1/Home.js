import React, { Component } from "react";
import Header from "./Header";
import Carousel from "./Carousel";
import Smartphone from "./Smartphone";
import Laptop from "./Laptop";
import Promotion from "./Promotion";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Carousel />
        <Smartphone />
        <Laptop />
        <Promotion />
      </div>
    );
  }
}

export default Home;
