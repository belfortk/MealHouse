import React from 'react';
import NavBar from '../Navbar';
import { connect } from "react-redux";

class ThankYouPage extends React.Component{
  constructor(props){
    super(props);

    this.handleClick =  this.handleClick.bind(this);
  }

  handleClick(){
    window.location = 'http://localhost:3000/'
  }

  render(){
    return(
      <div className="ThankYouPage">
      <header className="App-header">
        <NavBar />
      </header>
      <div className="container" id='thankyou-container'>

      <h3>Thank you for ordering from {this.props.store.dataList.restaurantName}</h3>

      <p>Order Time: 'TIME OF ORDER'</p>
      <p>Estimated Delivery Time: 'TIME OF ORDER + PREP TIME + TRAVEL TIME'</p>

      <p>If you have any questions about your order, please call {this.props.store.dataList.restaurantPhone}</p>

      <button className="btn btn-primary" onClick={ this.handleClick } > Back to Search </button>

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

export default connect(mapStateToProps)(ThankYouPage);


