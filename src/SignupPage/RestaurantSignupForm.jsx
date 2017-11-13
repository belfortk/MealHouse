import React from 'react';
import axios from 'axios'

class RestaurantSignUpForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          type: "restaurant",
          ownerFirstName: "",
          ownerLastName: "",

          restaurantName: '',

          street: "",
          town: "",
          state: "AL",
          zipcode: "",

          phone: "",
          email: "",
          password: "",
          prepTime: 0
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

      handleRestaurantName(e){
          this.setState({
            restaurantName: e.target.value
          });
      }


      handleSubmit(e) {
        e.preventDefault();
        let existingRestaurant = null
        let newRestaurant= {
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
            prepTime: this.state.prepTime,
            hoursOfOperation: {willAddLater: true}
        }

        axios
          .get(
            "http://localhost:3000/api/Restaurants/findOne?filter=%7B%22where%22%3A%20%7B%22email%22%3A%22" +
              this.state.email +
              "%22%7D%7D"
          )
          .then(function(response) {
            console.log('email already taken');
            existingRestaurant = true;
            console.log('existing restaurant? ' + existingRestaurant);

          })
          .catch(function(error) {
            console.log('new restaurant detected');
            existingRestaurant = false;
            console.log('existing restaurant? ' + existingRestaurant);

            axios.post('http://localhost:3000/api/Restaurants', newRestaurant)
            .then(function (response) {
              console.log('new restaurant added');
              console.log( newRestaurant);
              window.location = 'http://google.com';
            })
            .catch(function (error) {
              console.log('unable to add new restaurant');
              console.log( error);

            });


          });


      }

      render() {
        return (
          <form>
            <div className="form-group row">
              <label htmlFor="owner-first-name-input" className="col-2 col-form-label">
                Owner First Name
              </label>
              <div className="col-4">
                <input
                  className="form-control"
                  type="text"
                  id="owner-first-name-input"
                  onChange={this.handleFirstName}
                />
              </div>
              <label htmlFor="owner-last-name-input" className="col-2 col-form-label">
                Owner Last Name
              </label>
              <div className="col-4">
                <input className="form-control" type="text" id="owner-last-name-input" onChange={this.handleLastName} />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="restaurantName">Restaurant Name</label>
              <input type="email" className="form-control" id="restaurantName" onChange={this.handleEmail} />
            </div>
            <div className="form-group">
              <label htmlFor="restaurantPrepTime">Avg Prep Time (mins)</label>
              <input type="number" className="form-control" id="restaurantPrepTime" onChange={this.handlePrepTime} />
            </div>
            <div className="form-group">
              <label htmlFor="restaurant-email">Email address</label>
              <input type="email" className="form-control" id="restaurant-email" onChange={this.handleRestaurantName} />
            </div>
            <div className="form-group">
              <label htmlFor="restaurant-password">Password</label>
              <input type="password" className="form-control" id="restaurant-password" onChange={this.handlePassword} />
            </div>
            <div className="form-group">
              <label htmlFor="restaurant-phone">Phone Number</label>
              <input type="tel" className="form-control" id="restaurant-phone" onChange={this.handlePhone} />
            </div>

            <div className="form-group row">
              <label htmlFor="restaurant-address-input" className="col-2 col-form-label">
                Street Address
              </label>
              <div className="col-4">
                <input
                  className="form-control"
                  type="text"
                  id="restaurant-address-input"
                  onChange={this.handleAddressStreet}
                />
              </div>
              <label htmlFor="restaurant-city-input" className="col-2 col-form-label">
                Town/City
              </label>
              <div className="col-4">
                <input className="form-control" type="text" id="restaurant-city-input" onChange={this.handleAddressTown} />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="restaurant-state-input" className="col-2 col-form-label">
                State
              </label>
              <div className="col-4">
                <select onChange={this.handleAddressState}>
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
              <label htmlFor="restaurant-zipcode-input" className="col-2 col-form-label">
                Zipcode
              </label>
              <div className="col-4">
                <input
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
