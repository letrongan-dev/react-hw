import React, { Component } from "react";
import IphoneX from "../asset/img/sp_iphoneX.png";
import Samsung from "../asset/img/sp_note7.png";
import ViVo from "../asset/img/sp_vivo850.png";
import BlackBerry from "../asset/img/sp_blackberry.png";
import "./Smartphone.css";
class Smartphone extends Component {
  state = {
    imgIphoneX: IphoneX,
    imgSS: Samsung,
    imgVivo: ViVo,
    imgBB: BlackBerry,
  };
  render() {
    return (
      <section id="smartphone" className="container-fluid pt-5 pb-5">
        <h1 className="text-white text-center">BEST SMARTPHONE</h1>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
            <div className="container">
              <div className="card bg-light" style={{ width: 300 }}>
                <img
                  className="card-img-top"
                  src={this.state.imgIphoneX}
                  alt="Card image"
                  style={{ maxWidth: "100%", height: 250 }}
                />
                <div className="card-body text-center">
                  <h4 className="card-title text-center">iPhone X</h4>
                  <p className="card-text">
                    iPhone X features a new all-screen design. Face ID, which
                    makes your face your password
                  </p>
                  <a href="#" className="btn btn-primary">
                    Detail
                  </a>
                  <a href="#" className="btn btn-danger">
                    Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
            <div className="container">
              <div className="card bg-light" style={{ width: 300 }}>
                <img
                  className="card-img-top"
                  src={this.state.imgSS}
                  alt="Card image"
                  style={{ maxWidth: "100%", height: 250 }}
                />
                <div className="card-body text-center">
                  <h4 className="card-title text-center">Galaxy Note7</h4>
                  <p className="card-text">
                    The Galaxy Note7 comes with a perfectly symmetrical design
                    for good reason
                  </p>
                  <a href="#" className="btn btn-primary">
                    Detail
                  </a>
                  <a href="#" className="btn btn-danger">
                    Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
            <div className="container">
              <div className="card bg-light" style={{ width: 300 }}>
                <img
                  className="card-img-top"
                  src={this.state.imgVivo}
                  alt="Card image"
                  style={{ maxWidth: "100%", height: 250 }}
                />
                <div className="card-body text-center">
                  <h4 className="card-title text-center">Vivo</h4>
                  <p className="card-text">
                    A young global smartphone brand focusing on introducing
                    perfect sound quality
                  </p>
                  <a href="#" className="btn btn-primary">
                    Detail
                  </a>
                  <a href="#" className="btn btn-danger">
                    Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
            <div className="container">
              <div className="card bg-light" style={{ width: 300 }}>
                <img
                  className="card-img-top"
                  src={this.state.imgBB}
                  alt="Card image"
                  style={{ maxWidth: "100%", height: 250 }}
                />
                <div className="card-body text-center">
                  <h4 className="card-title text-center">Blackberry</h4>
                  <p className="card-text">
                    BlackBerry is a line of smartphones, tablets, and services
                    originally designed
                  </p>
                  <a href="#" className="btn btn-primary">
                    Detail
                  </a>
                  <a href="#" className="btn btn-danger">
                    Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Smartphone;
