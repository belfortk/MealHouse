import axios from "axios";
import Navbar from "../Navbar";
import LoginModal from '../LoginModal.jsx';
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
          <LoginModal/>
        </header>

        <div className="container">
          <div className="btn-group justify-content-center col-4" data-toggle="buttons">
            <label className="btn btn-primary active">
              <button type="radio" name="options" id="customer-button" autoComplete="off" value={'true'} onClick={this.handleSelectType} />
              Customer
            </label>
            <label className="btn btn-primary">
              <button type="radio" name="options" id="restaurant-button" autoComplete="off"  value={"false"} onClick={this.handleSelectType}/> Restaurant
            </label>
          </div>

          { (this.state.isCustomer == "true")? <CustomerSignUpForm /> : <RestaurantSignUpForm /> }


        </div>

      </div>
    );
  }
}

export default SignupPage;
