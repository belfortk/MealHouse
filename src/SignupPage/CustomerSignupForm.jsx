import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { customerInput } from './CustomerAction';

class CustomerSignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { dispatch } = this.props;
    dispatch(customerInput(e.target.value, e.target.id));
  }

  handleSubmit(e) {
    e.preventDefault();
    let existingUser = null;
    let newCustomer = {
      name: this.props.firstName + " " + this.props.lastName,
      email: this.props.email,
      password: this.props.password,
      phoneNumber: this.props.phone,
      address: {
        street: this.props.street,
        town: this.props.town,
        state: this.props.state,
        zipcode: this.props.zip
      }
    };

    axios
      .get(
        "http://localhost:3000/api/Customers/findOne?filter=%7B%22where%22%3A%20%7B%22email%22%3A%22" +
          this.props.email +
          "%22%7D%7D"
      )
      .then(function(response) {
        console.log("email already taken");
        existingUser = true;
        console.log("existing user? " + existingUser);
      })
      .catch(function(error) {
        console.log("new user detected");
        existingUser = false;
        console.log("existing user? " + existingUser);

        axios
          .post("http://localhost:3000/api/Customers", newCustomer)
          .then(function(response) {
            console.log("new customer added");
            console.log(newCustomer);
            window.location = "http://localhost:3000/";
          })
          .catch(function(error) {
            console.log("unable to add new customer");
            console.log(error);
          });
      });
  }

  render() {
    return (
      <form>
        <div className="form-group row">
          <div className="col-6">
            <input
              className="form-control"
              type="text"
              id="firstName"
              onChange={this.handleChange}
              placeholder="First Name"
            />
          </div>
          <div className="col-6">
            <input
              className="form-control"
              type="text"
              id="lastName"
              onChange={this.handleChange}
              placeholder="Last Name"
            />
          </div>
        </div>

        <div className="form-group row">
          <div className="col-4">
            <input
              type="email"
              className="form-control"
              id="email"
              onChange={this.handleChange}
              placeholder="Email Address"
            />
          </div>
          <div className="col-4">
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={this.handleChange}
              placeholder="Password"
            />
          </div>
          <div className="col-4">
            <input
              type="tel"
              className="form-control"
              id="phone"
              onChange={this.handleChange}
              placeholder="Phone Number"
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-4">
            <input
              className="form-control"
              type="text"
              id="street"
              onChange={this.handleChange}
              placeholder="Street Address"
            />
          </div>
          <div className="col-4">
            <input
              className="form-control"
              type="text"
              id="city"
              onChange={this.handleChange}
              placeholder="City/Town"
            />
          </div>
          <div className="col-4">
            <input
              className="form-control"
              type="number"
              id="zip"
              onChange={this.handleChange}
              placeholder="Zipcode"
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <select value={this.props.state} onChange={this.handleChange} id="state">
            <option value="null" disabled hidden>Select State</option>
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
        <div className="row"> </div>
        <div className="row justify-content-center">
          <button
            type="submit mx-auto"
            className="btn btn-success"
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

function mapStateToProps(store) {
  return {
    firstName: store.customerSign.firstName,
    lastName: store.customerSign.lastName,
    street: store.customerSign.street,
    city: store.customerSign.city,
    state: store.customerSign.state,
    zip: store.customerSign.zip,
    phone: store.customerSign.phone,
    email: store.customerSign.email,
    password: store.customerSign.password
  };
}

export default connect(mapStateToProps)(CustomerSignUpForm);
