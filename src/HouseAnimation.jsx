import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class House extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <div className="container" id="house">
        <div className="leftLine" />
        <div className="leftUpLine" />
        <div className="leftAngleLine" />
        <div className="rightAngleLine" />
        <div className="rightUpLine" />
        <div className="rightLine" />
        <div className="dot" />
      </div>
    );
  }
}

export default House;
