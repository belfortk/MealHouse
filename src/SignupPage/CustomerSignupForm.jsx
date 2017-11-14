import React from "react";
import axios from "axios";

class CustomerSignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "customer",
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

    this.handleSubmit = this.handleSubmit.bind(this);

    // this.postNewCustomer =  this.postNewCustomer.bind(this);
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

  //   postNewCustomer(){
  //     let newCustomer = {
  //         name: this.state.firstName + " " + this.state.lastName,
  //         email: this.state.email,
  //         password: this.state.password,
  //         phoneNumber: this.state.phone,
  //         address: {
  //             street: this.state.street,
  //             town: this.state.town,
  //             state: this.state.state,
  //             zipcode: this.state.zipcode
  //         },
  //     }
  //     axios.post('http://localhost:3000/api/Customers', newCustomer)
  //       .then(function (response) {
  //         console.log('new customer added');
  //       })
  //       .catch(function (error) {
  //         console.log('unable to add new customer');

  //       });
  //   }

  handleSubmit(e) {
    e.preventDefault();
    let existingUser = null;
    let newCustomer = {
      name: this.state.firstName + " " + this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      phoneNumber: this.state.phone,
      address: {
        street: this.state.street,
        town: this.state.town,
        state: this.state.state,
        zipcode: this.state.zipcode
      }
    };

    axios
      .get(
        "http://localhost:3000/api/Customers/findOne?filter=%7B%22where%22%3A%20%7B%22email%22%3A%22" +
          this.state.email +
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
            window.location = "http://google.com";
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
              id="customer-first-name-input"
              onChange={this.handleFirstName}
              placeholder="First Name"
            />
          </div>
          <div className="col-6">
            <input
              className="form-control"
              type="text"
              id="customer-last-name-input"
              onChange={this.handleLastName}
              placeholder="Last Name"
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
            />
          </div>
          <div className="col-4">
            <input
              type="password"
              className="form-control"
              id="customer-password"
              onChange={this.handlePassword}
              placeholder="Password"
            />
          </div>
          <div className="col-4">
            <input
              type="tel"
              className="form-control"
              id="customer-phone"
              onChange={this.handlePhone}
              placeholder="Phone Number"
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
            />
          </div>
          <div className="col-4">
            <input
              className="form-control"
              type="text"
              id="customer-city-input"
              onChange={this.handleAddressTown}
              placeholder="City/Town"
            />
          </div>
          <div className="col-4">
            <input
              className="form-control"
              type="number"
              id="customer-zipcode-input"
              onChange={this.handleAddressZip}
              placeholder="Zipcode"
            />
          </div>
        </div>
        <div className="row justify-content-center">
            <select onChange={this.handleAddressState}>
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
        <div className='row'> </div>
        <div className='row justify-content-center'>
        <button
          id='CustSub'
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

export default CustomerSignUpForm;
