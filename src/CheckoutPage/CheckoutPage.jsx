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
    console.log(this.props.store.dataList.restaurantName);
    console.log(this.props.store.total);

    return (
      <div className="CheckoutPage">
        <header className="App-header">
          <NavBar />
        </header>
        <div className="container" id="checkout-container">
          <p> Thank you for ordering from {this.props.store.dataList.restaurantName}</p>

          <table id='checkout-table' style={{marginLeft:'auto', marginRight: 'auto'}}>
            <tr>
              <th>Item</th>
              <th> {"     "} </th>
              <th>Price</th>
            </tr>
            {
              (this.props.store.orderList.length < 1)? (
                  <tr>
                  <td> • </td>
                  <td> {"     "} </td>
                  <td> • </td>
                  </tr>
                  ) :
              this.props.store.orderList.map(menuItem => {
                return (
                  <tr>
                  <td>{menuItem.name} </td>
                  <td> {"     "} </td>
                  <td>${menuItem.price}</td>
                  </tr>
                  );
              })}
                  <tr>
                  <td> Delivery Fee </td>
                  <td> {"     "} </td>
                  <td> $5 </td>
                  </tr>
                    <tr>
              <td><strong>Total</strong></td>
              <td> {"     "} </td>
              <td>${this.props.store.total}</td>
            </tr>
          </table>
          <br/>
              <section>
                <p>Checkout with Stripe by clicking the button below </p>
              <a href='https://www.stripe.com'>
              <img id='stripe-icon' className='grow' style={{height:'70px' , width: '75px'}}src='https://www.shareicon.net/data/128x128/2015/09/25/107225_card_512x512.png' alt='stripe icon'></img>
          </a>
              </section>

        </div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    store: store.orderList
  };
}

export default connect(mapStateToProps)(CheckoutPage);
