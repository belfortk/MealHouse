import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { restaurantInput, placeId, placeFormatted, placeLocation } from "./RestaurantAction";

class RestaurantSignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    var input = document.getElementById("restaurant-address-input");
    var options = { componentRestrictions: { country: "us" } };
    var autocomplete = new google.maps.places.Autocomplete(input, options);
    autocomplete.addListener("place_changed", () => {
      let place = autocomplete.getPlace();
      let location = place.geometry.location;

      const { dispatch } = this.props;

      dispatch(placeId(place.place_id));
      dispatch(placeFormatted(place.formatted_address));
      dispatch(placeLocation(location.toString()))
    });
  }

  handleChange(e) {
    const { dispatch } = this.props;
    dispatch(restaurantInput(e.target.value, e.target.id));
  }

  handleSubmit(e) {
    e.preventDefault();
    let existingRestaurant = null;

    let newRestaurant = {
      ownerName: this.props.firstName + " " + this.props.lastName,
      restaurantName: this.props.restaurantName,
      restaurantEmail: this.props.email,
      password: this.props.password,
      restaurantPhone: this.props.phone,
      location: {
        place_id: this.props.place_id,
        place_formatted: this.props.place_formatted,
        place_location: this.props.place_location
      },
      prepTime: this.props.prepTime,
      priceRange: 0,
      hoursOfOperation: [{ willAddLater: true }],
      minDeliveryCharge: 0
    };

    axios
      .get(
        "http://localhost:3000/api/Restaurants/findOne?filter=%7B%22where%22%3A%20%7B%22email%22%3A%22" +
          this.props.email +
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
            window.location = "http://localhost:3000/#/profile/restaurant";
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
              id="firstName"
              placeholder="Owner First Name"
              onChange={this.handleChange}
            />
          </div>
          <div className="col-md-6">
            <input
              className="form-control"
              placeholder="Last Name"
              type="text"
              id="lastName"
              onChange={this.handleChange}
            />
          </div>
        </div>

        <div className="form-group row">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Restaurant Name"
              id="restaurantName"
              onChange={this.handleChange}
            />
          </div>

          <div className="col-md-6">
            <input
              type="number"
              className="form-control"
              placeholder="Avg Prep Time (mins)"
              id="prepTime"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-md-6">
            <input
              type="email"
              className="form-control"
              placeholder="Email address"
              id="email"
              onChange={this.handleChange}
            />
          </div>
          <div className="col-md-6">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              id="password"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-md-6">
            <input
              type="text"
              id="restaurant-address-input"
              placeholder="Street Address"
              ref="searchField"
              className="form-control Autocomplete"
              placeholder="Address"
              aria-describedby="basic-addon2"
            />
          </div>
          <div className="col-md-6">
            <input
              type="tel"
              className="form-control"
              placeholder="Phone Number"
              id="phone"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <button
            type="submit"
            className="btn btn-success mx-auto"
            id="sign-up-form-submit"
            onClick={this.handleSubmit}
          >
            Submit Info
          </button>
        </div>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    firstName: state.restaurantSign.firstName,
    lastName: state.restaurantSign.lastName,
    restaurantName: state.restaurantSign.restaurantName,
    phone: state.restaurantSign.phone,
    email: state.restaurantSign.email,
    password: state.restaurantSign.password,
    place_id: state.restaurantSign.place_id,
    place_formatted: state.restaurantSign.place_formatted,
    place_location: state.restaurantSign.place_location,
    prepTime: state.restaurantSign.prepTime
  };
}

export default connect(mapStateToProps)(RestaurantSignUpForm);
