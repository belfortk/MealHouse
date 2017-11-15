import React from 'react';
import NavBar from '../Navbar';
import { connect } from "react-redux";

class ThankYouPage extends React.Component{
  constructor(props){
    super(props);

  }
  render(){
    return(
      <div className="ThankYouPage">
      <header className="App-header">
        <NavBar />
      </header>
      <div className="container" id='thankyou-container'>

      <p>Thank you for ordering from 'RESTAURANT NAME'</p>

      <p>Order Time: 'TIME OF ORDER'</p>
      <p>Estimated Delivery Time: 'TIME OF ORDER + PREP TIME + TRAVEL TIME'</p>

      <p>If you have any questions about your order, please call 'BUSINESS PHONE'</p>

      </div>
    </div>

    );
  }
}

function mapStateToProps(store) {
  return {
    store: orderInfo
  };
}

export default connect(mapStateToProps)(ThankYouPage);


