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
      minDeliveryCharge: 0,
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
            type="email"
            className="form-control"
            placeholder="Restaurant Name"
            id="restaurantName"
            onChange={this.handleEmail}
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
            onChange={this.handleRestaurantName}
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

          <div className="col-md-6">
            <input
              className="form-control"
              type="text"
              placeholder="Town/City"
              id="restaurant-city-input"
              onChange={this.handleAddressTown}
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-md-6">
            <select value={this.state.state} onChange={this.handleAddressState}>
              <option disabled hidden value="null">
                Select State
              </option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
          </div>

          <div className="col-md-6">
            <input
              placeholder="Zipcode"
              className="form-control"
              type="number"
              id="restaurant-zipcode-input"
              onChange={this.handleAddressZip}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary" id="sign-up-form-submit" onClick={this.handleSubmit}>
          Submit Info
        </button>
      </form>
    );
  }
}

export default RestaurantSignUpForm;
