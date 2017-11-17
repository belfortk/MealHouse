import React from "react";
import NavBar from "../Navbar";
import { connect } from "react-redux";

class CheckoutPage extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    window.location = "http://localhost:3000/";
  }

  render() {
    return (
      <div className="CheckoutPage">
        <header className="App-header">
          <NavBar />
        </header>
        <div className="container" id="checkout-container">
          <p> MAP OVER MENU ITEMS</p>
          <p>DISPLAY TOTAL </p>
          <p> STRIPE CHECKOUT ICON</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    store: store.orderInfo
  };
}

export default connect(mapStateToProps)(CheckoutPage);
