import React, { Component } from "react";
import "./Carousel.css";
import Slide1 from "../asset/img/slide_1.jpg";
import Slide2 from "../asset/img/slide_2.jpg";
import Slide3 from "../asset/img/slide_3.jpg";
class Carousel extends Component {
  state = {
    slide1: Slide1,
    slide2: Slide2,
    slide3: Slide3,
  };
  render() {
    return (
      <div id="demo" className="carousel slide" data-ride="carousel">
        {/* Indicators */}
        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to={0} className="active" />
          <li data-target="#demo" data-slide-to={1} className />
          <li data-target="#demo" data-slide-to={2} className />
        </ul>
        {/* The slideshow */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={this.state.slide1}
              alt="Los Angeles"
              width={1100}
              height={500}
            />
          </div>
          <div className="carousel-item">
            <img
              src={this.state.slide2}
              alt="Chicago"
              width={1100}
              height={500}
            />
          </div>
          <div className="carousel-item">
            <img
              src={this.state.slide3}
              alt="New York"
              width={1100}
              height={500}
            />
          </div>
        </div>
        {/* Left and right controls */}
        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon" />
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control-next-icon" />
        </a>
      </div>
    );
  }
}

export default Carousel;
