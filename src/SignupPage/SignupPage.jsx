import axios from "axios";
import Navbar from "../Navbar";
import React, { Component } from 'react';

import CustomerSignUpForm from './CustomerSignUpForm'
import RestaurantSignUpForm from './RestaurantSignUpForm'

class SignupPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      isCustomer: "true",
  }
  this.handleSelectType =  this.handleSelectType.bind(this);

  }

  handleSelectType(e){
    this.setState({
      isCustomer : e.target.value
    })
  }

  render() {
    return (
      <div className="SignupPage">
        <header className="App-header">
          <Navbar />
        </header>

        <div className="container">
          <div className="btn-group justify-content-center col-4" id='signup-button-group' data-toggle="buttons">

              <button className='btn btn-primary signup-type-button' id='signup-customer-button' type='button' name="options" id="customer-button" autoComplete="off" value={'true'} onClick={this.handleSelectType} > Customer </button>



              <button className='btn btn-primary' id='signup-restaurant-button' type='button' name="options" id="restaurant-button" autoComplete="off"  value={"false"} onClick={this.handleSelectType}> Restaurant </button>

          </div>

          { (this.state.isCustomer == "true")? <CustomerSignUpForm /> : <RestaurantSignUpForm /> }


        </div>

      </div>
    );
  }
}

export default SignupPage;
