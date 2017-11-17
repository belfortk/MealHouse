import React from "react";
import axios from 'axios';
import NavBar from "../Navbar";
import { readCookie } from '../Cookie/CookieFunction';

class CustomerProfilePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",

      street: "",
      town: "",
      state: "AL",
      zipcode: "",

      phone: "",
      email: "",
      password: ""
    };

    this.handleFirstName = this.handleFirstName.bind(this);

    this.handleLastName = this.handleLastName.bind(this);

    this.handleAddressStreet = this.handleAddressStreet.bind(this);

    this.handleAddressTown = this.handleAddressTown.bind(this);
    this.handleAddressState = this.handleAddressState.bind(this);
    this.handleAddressZip = this.handleAddressZip.bind(this);

    this.handlePhone = this.handlePhone.bind(this);
    this.handleEmail = this.handleEmail.bind(this);

    this.handlePassword = this.handlePassword.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
  }



  componentWillMount() {
    let authChecker = readCookie('auth');
    let idChecker = readCookie('id');

    axios
    .get(`http://localhost:3000/api/Customers/${idChecker}`)
    .then(response => {
      let customerPhone = response.data.phoneNumber;
      let customerEmail = response.data.email;
      let fullName = response.data.name;
      let { address } = response.data
      let arrayName = fullName.split(" ");
      let resFirstName = arrayName[0];
      let resLastName = arrayName[1];
      this.setState({
        firstName: resFirstName,
        lastName: resLastName,

        email: customerEmail,
        phone: customerPhone,

        street: address.street,
        town: address.town,
        state: address.state,
        zipcode: address.zipcode,
        password: response.data.password

      });
    })
    .catch(error => {
      console.log(error);
    });
  }

  handleEditSubmit() {
    let updatedUser = {
      name: this.state.firstName + ' ' + this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      phoneNumber: this.state.phone,
      address: {
        street: this.state.street,
        town: this.state.town,
        state: this.state.state,
        zipcode: this.state.zipcode
      }
    }

    let authChecker = readCookie('auth');
    let idChecker = readCookie('id');

    axios.put(`http://localhost:3000/api/Customers/${idChecker}`, updatedUser)
    .then( data => {
      console.log("Update Success");
      window.location = 'http://localhost:3000/#/';
    })
    .catch(error =>{
      console.log("Update Failed");
      console.log(error);
    })
  }

  handleFirstName(e) {
    this.setState({
      firstName: e.target.value
    });
  }

  handleLastName(e) {
    this.setState({
      lastName: e.target.value
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

  handlePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  render() {
    return (
      <div className="CustomerProfilePage">
        <header className="App-header">
          <NavBar />
        </header>
        <div className="container">
          <form>
            <div className="form-group row">
              <div className="col-6">
                <input
                  className="form-control"
                  type="text"
                  id="customer-first-name-input"
                  onChange={this.handleFirstName}
                  placeholder="First Name"
                  value={ this.state.firstName }
                />
              </div>
              <div className="col-6">
                <input
                  className="form-control"
                  type="text"
                  id="customer-last-name-input"
                  onChange={this.handleLastName}
                  placeholder="Last Name"
                  value={ this.state.lastName }
                />
              </div>
            </div>

            <div className="form-group row">
              <div className="col-4">
                <input
                  type="email"
                  className="form-control"
                  id="customer-email"
                  onChange={this.handleEmail}
                  placeholder="Email Address"
                  value={ this.state.email }
                  disabled
                />
              </div>
              <div className="col-4">
                <input
                  type="password"
                  className="form-control"
                  id="customer-password"
                  onChange={this.handlePassword}
                  placeholder="Password"
                  value={ this.state.password }
                />
              </div>
              <div className="col-4">
                <input
                  type="tel"
                  className="form-control"
                  id="customer-phone"
                  onChange={this.handlePhone}
                  placeholder="Phone Number"
                  value={ this.state.phone }
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-4">
                <input
                  className="form-control"
                  type="text"
                  id="customer-address-input"
                  onChange={this.handleAddressStreet}
                  placeholder="Street Address"
                  value={ this.state.street }
                />
              </div>
              <div className="col-4">
                <input
                  className="form-control"
                  type="text"
                  id="customer-city-input"
                  onChange={this.handleAddressTown}
                  placeholder="City/Town"
                  value={ this.state.town }
                />
              </div>
              <div className="col-4">
                <input
                  className="form-control"
                  type="number"
                  id="customer-zipcode-input"
                  onChange={this.handleAddressZip}
                  placeholder="Zipcode"
                  value={ this.state.zipcode }
                />
              </div>
            </div>
            <div className="row justify-content-center">
              <select onChange={this.handleAddressState}
              value={ this.state.state }>
                <option value="">Select State</option>
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
                onClick={this.handleEditSubmit}
              >
                Edit Info
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CustomerProfilePage;
