import React from "react";
import axios from "axios";

class RestaurantSignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "restaurant",
      ownerFirstName: "",
      ownerLastName: "",

      restaurantName: "",

      street: "",
      town: "",
      state: "null",
      zipcode: "",

      phone: "",
      email: "",
      password: ""
    };

    this.handleFirstName = this.handleFirstName.bind(this);

    this.handleLastName = this.handleLastName.bind(this);

    this.handleRestaurantName = this.handleRestaurantName.bind(this);

    this.handleAddressStreet = this.handleAddressStreet.bind(this);

    this.handleAddressTown = this.handleAddressTown.bind(this);
    this.handleAddressState = this.handleAddressState.bind(this);
    this.handleAddressZip = this.handleAddressZip.bind(this);

    this.handlePhone = this.handlePhone.bind(this);
    this.handleEmail = this.handleEmail.bind(this);

    this.handlePassword = this.handlePassword.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.handlePrepTime = this.handlePrepTime.bind(this);

    // this.postNewCustomer =  this.postNewCustomer.bind(this);
  }

  handleFirstName(e) {
    this.setState({
      ownerFirstName: e.target.value
    });
  }

  handleLastName(e) {
    this.setState({
      ownerLastName: e.target.value
    });
  }

  handleAddressStreet(e) {
    this.setState({
      street: e.target.value
    });
  }

  handleAddressTown(e) {
    this.setState({
      town: e.target.value
    });
  }
  handleAddressState(e) {
    this.setState({
      state: e.target.value
    });
  }
  handleAddressZip(e) {
    this.setState({
      zipcode: e.target.value
    });
  }

  handlePhone(e) {
    this.setState({
      phone: e.target.value
    });
  }

  handleEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  handlePrepTime(e) {
    this.setState({
      prepTime: e.target.value
    });
  }

  handlePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleRestaurantName(e) {
    this.setState({
      restaurantName: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let existingRestaurant = null;

    let newRestaurant = {
      ownerName: this.state.ownerFirstName + " " + this.state.ownerLastName,
      restaurantName: this.state.restaurantName,
      restaurantEmail: this.state.email,
      password: this.state.password,
      restaurantPhone: this.state.phone,
      location: {
        street: this.state.street,
        town: this.state.town,
        state: this.state.state,
        zipcode: this.state.zipcode
      },
      prepTime: 0,
      priceRange: 0,
      hoursOfOperation: [{ willAddLater: true }],
      minDeliveryCharge: 0
    };

    axios
      .get(
        "http://localhost:3000/api/Restaurants/findOne?filter=%7B%22where%22%3A%20%7B%22email%22%3A%22" +
          this.state.email +
          "%22%7D%7D"
      )
      .then(function(response) {
        console.log("email already taken");
        existingRestaurant = true;
        console.log("existing restaurant? " + existingRestaurant);
      })
      .catch(function(error) {
        console.log("new restaurant detected");
        existingRestaurant = false;
        console.log("existing restaurant? " + existingRestaurant);

        axios
          .post("http://localhost:3000/api/Restaurants", newRestaurant)
          .then(function(response) {
            console.log("new restaurant added");
            console.log(newRestaurant);
            window.location = "http://localhost:3000/#/menuProfile";
          })
          .catch(function(error) {
            console.log("unable to add new restaurant");
            console.log(error);
          });
      });
  }

  render() {
    return (
      <form>
        <div className="form-group row">
          <div className="col-md-6">
            <input
              className="form-control"
              type="text"
              id="owner-first-name-input"
              placeholder="Owner First Name"
              onChange={this.handleFirstName}
            />
          </div>
          <div className="col-md-6">
            <input
              className="form-control"
              placeholder="Owner Last Name"
              type="text"
              id="owner-last-name-input"
              onChange={this.handleLastName}
            />
          </div>
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Restaurant Name"
            id="restaurantName"
            onChange={this.handleRestaurantName}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            placeholder="Avg Prep Time (mins)"
            id="restaurantPrepTime"
            onChange={this.handlePrepTime}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Email address"
            id="restaurant-email"
            onChange={this.handleEmail}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            id="restaurant-password"
            onChange={this.handlePassword}
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            className="form-control"
            placeholder="Phone Number"
            id="restaurant-phone"
            onChange={this.handlePhone}
          />
        </div>

        <div className="form-group row">
          <div className="col-md-6">
            <input
              className="form-control"
              type="text"
              id="restaurant-address-input"
              onChange={this.handleAddressStreet}
              placeholder="Street Address"
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          id="sign-up-form-submit"
          onClick={this.handleSubmit}
        >
          Submit Info
        </button>
      </form>
    );
  }
}

export default RestaurantSignUpForm;
