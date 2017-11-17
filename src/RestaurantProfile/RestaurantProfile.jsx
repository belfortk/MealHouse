import React, { Component } from "react";
import SearchBar from "../SearchBar";
import axios from "axios";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  restaurantProfileInput,
  restaurantProfileRange,
  restaurantProfilePlaceId,
  restaurantProfilePlaceFormatted,
  restaurantProfilePlaceLocation,
  restaurantAddress,
  updateProfilePic
} from "./RestaurantAction";
import restaurantProfile from "./RestaurantReducer";

function mapStateToProps(state) {
  return {
    FirstName: state.restaurantProfile.FirstName,
    LastName: state.restaurantProfile.LastName,
    BusinessName: state.restaurantProfile.BusinessName,
    BusinessEmail: state.restaurantProfile.BusinessEmail,
    BusinessPhone: state.restaurantProfile.BusinessPhone,
    Address: state.restaurantProfile.Address,
    PriceRange: state.restaurantProfile.PriceRange,
    Delivery: state.restaurantProfile.Delivery,
    PrepTime: state.restaurantProfile.PrepTime,
    MonStart: state.restaurantProfile.MonStart,
    MonEnd: state.restaurantProfile.MonEnd,
    TuesStart: state.restaurantProfile.TuesStart,
    TuesEnd: state.restaurantProfile.TuesEnd,
    WedStart: state.restaurantProfile.WedStart,
    WedEnd: state.restaurantProfile.WedEnd,
    ThuStart: state.restaurantProfile.ThuStart,
    ThuEnd: state.restaurantProfile.ThuEnd,
    FriStart: state.restaurantProfile.FriStart,
    FriEnd: state.restaurantProfile.FriEnd,
    SatStart: state.restaurantProfile.SatStart,
    SatEnd: state.restaurantProfile.SatEnd,
    SunStart: state.restaurantProfile.SunStart,
    SunEnd: state.restaurantProfile.SunEnd,
    place_id: state.restaurantProfile.place_id,
    place_formatted: state.restaurantProfile.place_formatted,
    place_location: state.restaurantProfile.place_location,
    password: state.restaurantProfile.password,
    urlField: state.restaurantProfile.urlField,
    updatePic: state.restaurantProfile.updatePic
  };
}
class RestaurantProfile extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handlePriceRange = this.handlePriceRange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    axios
      .get("/api/restaurants/1")
      .then(response => {
        let resBusinessName = response.data.restaurantName;
        let resBusinessPhone = response.data.restaurantPhone;
        let resBusinessEmail = response.data.restaurantEmail;
        let fullName = response.data.ownerName;
        let arrayName = fullName.split(" ");
        let resFirstName = arrayName[0];
        let resLastName = arrayName[1];
        let resPassword = response.data.password;

        const { dispatch } = this.props;
        const reducerKeys = [
          ['FirstName', resFirstName],
          ['LastName', resLastName],
          ['BusinessEmail', resBusinessEmail],
          ['BusinessName', resBusinessName],
          ['BusinessPhone', resBusinessPhone],
          ['password', resPassword]
        ];
        reducerKeys.map(input => {
          dispatch(restaurantProfileInput(input[1], input[0]));
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    var input = document.getElementById("searchTextField");
    var options = { componentRestrictions: { country: "us" } };
    var autocomplete = new google.maps.places.Autocomplete(input, options);
    autocomplete.addListener("place_changed", () => {
      let place = autocomplete.getPlace();
      let location = place.geometry.location;

      const { dispatch } = this.props;
      dispatch(restaurantProfilePlaceId(place.place_id));
      dispatch(restaurantProfilePlaceFormatted(place.formatted_address));
      dispatch(restaurantProfilePlaceLocation(location.toString()));
      dispatch(restaurantAddress(1))
    });
  }

  handleChange(event) {
    let prop = event.target.id;

    this.setState({ [prop]: event.target.value });
    const { dispatch } = this.props;
    dispatch(restaurantProfileInput(event.target.value, event.target.id));
  }

  handleSubmit() {
        axios
          .put("/api/restaurants/1", {
            ownerName: `${this.props.FirstName} ${this.props.LastName}`,
            restaurantName: this.props.BusinessName,
            restaurantPhone: this.props.BusinessPhone,
            location: this.props.Address,
            prepTime: this.props.PrepTime,
            hoursOfOperation: [
              {
                Mon: {
                  start: this.props.MonStart,
                  end: this.props.MonEnd
                }
              },
              {
                Tues: {
                  start: this.props.ThuStart,
                  end: this.props.ThuEnd
                }
              },
              {
                Wed: {
                  start: this.props.WedStart,
                  end: this.props.WedEnd
                }
              },
              {
                Thu: {
                  start: this.props.ThuStart,
                  end: this.props.ThuEnd
                }
              },
              {
                Fri: {
                  start: this.props.FriStart,
                  end: this.props.FriEnd
                }
              },
              {
                Sat: {
                  start: this.props.SatStart,
                  end: this.props.SatEnd
                }
              },
              {
                Sun: {
                  start: this.props.SunStart,
                  end: this.props.SunEnd
                }
              }
            ],
            priceRange: this.props.PriceRange,
            minDeliveryCharge: this.props.Delivery,
            restaurantEmail: this.props.BusinessEmail,
            password: this.props.password
          })
          .then(data => {
            console.log("Update Success");
            window.location = "http://localhost:3000/#/editMenu";
          })
          .catch(err => {
            console.log(err);
          });
  }

  handlePriceRange(event) {
    this.setState({ PriceRange: event.target.value });

    const { dispatch } = this.props;
    dispatch(restaurantProfileRange(event.target.value));
  }

  handleClick(){

    axios.get("/api/Pictures/2/exists")
    .then(response => {
       if (response.data.exists){
      axios.post("/api/Pictures/1/replace", {
        src: this.props.urlField
      })
      .then(data => console.log("Update Success"))
      .catch(err=>console.log(err))
    }
    else {
      axios.post("/api/Pictures", {
        src: this.props.urlField
      })
      .then(data => console.log("Success"))
    }
    })
    const {dispatch} = this.props;
    dispatch(updateProfilePic(this.props.urlField))

  }

  render() {
    return (
      <div className="container">
        <Navbar />
        <div className="row">
          <div className="col-sm-9 offset-sm-3">
            <h1>Restaurant Profile</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <div className="card">
              <img
                className="card-img-top"
                style={{ height: 200 }}
                src={this.props.updatePic}
                alt="Card image cap"
              />
              <div className="card-body">
                <h4 className="card-title">Profile Picture</h4>
                <label htmlFor="updatePic">
                  Pic Url
                </label>
                <input
                  onChange={this.handleChange}
                  value={this.props.urlField}
                  className="form-control"
                  type="text"
                  placeholder="Pre-set Value"
                  id="urlField"
                />
                <button
                  className="btn btn-primary"
                  style={{ marginLeft: 80}}
                  onClick={this.handleClick}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-9">
            <div className="form-group row">
              <label htmlFor="firstName" className="col-md-3 col-form-label">
                First Name
              </label>
              <div className="col-md-8">
                <input
                  onChange={this.handleChange}
                  value={this.props.FirstName}
                  className="form-control"
                  type="text"
                  placeholder="Pre-set Value"
                  id="FirstName"
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="lastName" className="col-md-3 col-form-label">
                Last Name
              </label>
              <div className="col-md-8">
                <input
                  onChange={this.handleChange}
                  value={this.props.LastName}
                  className="form-control"
                  type="text"
                  placeholder="Pre-set Value"
                  id="LastName"
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="businessName" className="col-md-3 col-form-label">
                Business Name
              </label>
              <div className="col-md-8">
                <input
                  onChange={this.handleChange}
                  value={this.props.BusinessName}
                  className="form-control"
                  type="text"
                  placeholder="Pre-set Value"
                  id="BusinessName"
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="businessEmail"
                className="col-md-3 col-form-label"
              >
                Business Email
              </label>
              <div className="col-md-8">
                <p className="form-control-static">
                  {this.props.BusinessEmail}
                </p>
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="businesspnumber"
                className="col-md-3 col-form-label"
              >
                Business Phone#
              </label>
              <div className="col-md-8">
                <input
                  onChange={this.handleChange}
                  value={this.props.BusinessPhone}
                  className="form-control"
                  type="tel"
                  placeholder="Pre-set Value"
                  id="BusinessPhone"
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="businessAddress"
                className="col-md-3 col-form-label"
              >
                Business Address
              </label>
              <div className="col-md-8">
                <input
                  ref="searchField"
                  id="searchTextField"
                  type="text"
                  className="form-control Autocomplete"
                  placeholder="Address"
                  aria-describedby="basic-addon2"
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="priceRange" className="col-md-3 col-form-label">
                Price Range
              </label>
              <div className="col-md-2">
                <div className="form-check form-check-inline">
                  <label className="form-check-label">
                    <input
                      onChange={this.handlePriceRange}
                      className="form-check-input"
                      checked={this.props.PriceRange === "1"}
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="1"
                    />
                    $0 - $10
                  </label>
                </div>
              </div>
              <div className="col-md-2">
                <div className="form-check form-check-inline">
                  <label className="form-check-label">
                    <input
                      onChange={this.handlePriceRange}
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      checked={this.props.PriceRange === "2"}
                      id="inlineRadio2"
                      value="2"
                    />
                    $11 - $30
                  </label>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-check form-check-inline">
                  <label className="form-check-label">
                    <input
                      onChange={this.handlePriceRange}
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      checked={this.props.PriceRange === "3"}
                      id="inlineRadio3"
                      value="3"
                    />
                    $31 - $60
                  </label>
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="minDeliveryCharge"
                className="col-md-3 col-form-label"
              >
                Min Delivery Charge
              </label>
              <div className="col-md-8">
                <div className="input-group">
                  <span className="input-group-addon">$</span>
                  <input
                    onChange={this.handleChange}
                    value={this.props.Delivery}
                    type="number"
                    className="form-control"
                    aria-label="Amount (to the nearest dollar)"
                    id="Delivery"
                  />
                  <span className="input-group-addon">.00</span>
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="prepTime" className="col-md-3 col-form-label">
                Prep Time
              </label>
              <div className="col-md-3">
                <div className="input-group">
                  <input
                    onChange={this.handleChange}
                    value={this.props.PrepTime}
                    type="number"
                    className="form-control"
                    id="PrepTime"
                  />
                  <span className="input-group-addon">mins</span>
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="minDeliveryCharge"
                className="col-md-3 col-form-label"
              >
                Hours (Mon)
              </label>
              <div className="col-md-3">
                <input
                  onChange={this.handleChange}
                  value={this.props.MonStart}
                  type="time"
                  className="form-control"
                  id="MonStart"
                />
              </div>
              <p className="form-control-static">to</p>
              <div className="col-md-3">
                <input
                  onChange={this.handleChange}
                  value={this.props.MonEnd}
                  type="time"
                  className="form-control"
                  id="MonEnd"
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="minDeliveryCharge"
                className="col-md-3 col-form-label"
              >
                ------ (Tues)
              </label>
              <div className="col-md-3">
                <input
                  onChange={this.handleChange}
                  value={this.props.TuesStart}
                  type="time"
                  className="form-control"
                  id="TuesStart"
                />
              </div>
              <p className="form-control-static">to</p>
              <div className="col-md-3">
                <input
                  onChange={this.handleChange}
                  value={this.props.TuesEnd}
                  type="time"
                  className="form-control"
                  id="TuesEnd"
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="minDeliveryCharge"
                className="col-md-3 col-form-label"
              >
                ------ (Wed)
              </label>
              <div className="col-md-3">
                <input
                  onChange={this.handleChange}
                  value={this.props.WedStart}
                  type="time"
                  className="form-control"
                  id="WedStart"
                />
              </div>
              <p className="form-control-static">to</p>
              <div className="col-md-3">
                <input
                  onChange={this.handleChange}
                  value={this.props.WedEnd}
                  type="time"
                  className="form-control"
                  id="WedEnd"
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="minDeliveryCharge"
                className="col-md-3 col-form-label"
              >
                ------ (Thurs)
              </label>
              <div className="col-md-3">
                <input
                  onChange={this.handleChange}
                  value={this.props.ThuStart}
                  type="time"
                  className="form-control"
                  id="ThuStart"
                />
              </div>
              <p className="form-control-static">to</p>
              <div className="col-md-3">
                <input
                  onChange={this.handleChange}
                  value={this.props.ThuEnd}
                  type="time"
                  className="form-control"
                  id="ThuEnd"
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="minDeliveryCharge"
                className="col-md-3 col-form-label"
              >
                ------ (Fri)
              </label>
              <div className="col-md-3">
                <input
                  onChange={this.handleChange}
                  value={this.props.FriStart}
                  type="time"
                  className="form-control"
                  id="FriStart"
                />
              </div>
              <p className="form-control-static">to</p>
              <div className="col-md-3">
                <input
                  onChange={this.handleChange}
                  value={this.props.FriEnd}
                  type="time"
                  className="form-control"
                  id="FriEnd"
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="minDeliveryCharge"
                className="col-md-3 col-form-label"
              >
                ------ (Sat)
              </label>
              <div className="col-md-3">
                <input
                  onChange={this.handleChange}
                  value={this.props.SatStart}
                  type="time"
                  className="form-control"
                  id="SatStart"
                />
              </div>
              <p className="form-control-static">to</p>
              <div className="col-md-3">
                <input
                  onChange={this.handleChange}
                  value={this.props.SatEnd}
                  type="time"
                  className="form-control"
                  id="SatEnd"
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="minDeliveryCharge"
                className="col-md-3 col-form-label"
              >
                ------ (Sun)
              </label>
              <div className="col-md-3">
                <input
                  onChange={this.handleChange}
                  value={this.props.SunStart}
                  type="time"
                  className="form-control"
                  id="SunStart"
                />
              </div>
              <p className="form-control-static">to</p>
              <div className="col-md-3">
                <input
                  onChange={this.handleChange}
                  value={this.props.SunEnd}
                  type="time"
                  className="form-control"
                  id="SunEnd"
                />
              </div>
            </div>
            <button
              type="submit"
              onClick={this.handleSubmit}
              className="btn btn-primary"
            >
              Update Profile
            </button>

            <input
              id="editMenu"
              className="btn btn-primary"
              type="button"
              value="Edit Menu"
              style={{ marginLeft: 20 }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(RestaurantProfile);
