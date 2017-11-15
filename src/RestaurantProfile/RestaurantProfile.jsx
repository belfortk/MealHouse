import React, { Component } from "react";
import SearchBar from "../SearchBar";
import axios from "axios";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
class RestaurantProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      FirstName: "",
      LastName: "",
      BusinessName: "",
      BusinessEmail: "",
      BusinessPhone: "",
      Address: "",
      PriceRange: "",
      Delivery: "",
      PrepTime: "",
      MonStart: "",
      MonEnd: "",
      TuesStart: "",
      TuesEnd: "",
      WedStart: "",
      WedEnd: "",
      ThuStart: "",
      ThuEnd: "",
      FriStart: "",
      FriEnd: "",
      SatStart: "",
      SatEnd: "",
      SunStart: "",
      SunEnd: "",
      place_id: "",
      place_formatted: "",
      place_location: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handlePriceRange = this.handlePriceRange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
        this.setState({
          FirstName: resFirstName,
          LastName: resLastName,
          BusinessName: resBusinessName,
          BusinessEmail: resBusinessEmail,
          BusinessPhone: resBusinessPhone,
          password: response.data.password
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

      this.setState({
        place_formatted: place.formatted_address,
        place_id: place.place_id,
        place_location: location.toString()
      });
    });
  }

  handleChange(event) {
    let prop = event.target.id;

    this.setState({ [prop]: event.target.value });
  }

  handleSubmit() {
    this.setState(
      {
        Address: {
          place_formatted: this.state.place_formatted,
          place_id: this.state.place_id,
          place_location: this.state.place_location
        }
      },
      () => {
        axios
          .put("/api/restaurants/1", {
            ownerName: `${this.state.FirstName} ${this.state.LastName}`,
            restaurantName: this.state.BusinessName,
            restaurantPhone: this.state.BusinessPhone,
            location: this.state.Address,
            prepTime: this.state.PrepTime,
            hoursOfOperation: [
              {
                Mon: {
                  start: this.state.MonStart,
                  end: this.state.MonEnd
                }
              },
              {
                Tues: {
                  start: this.state.ThuStart,
                  end: this.state.ThuEnd
                }
              },
              {
                Wed: {
                  start: this.state.WedStart,
                  end: this.state.WedEnd
                }
              },
              {
                Thu: {
                  start: this.state.ThuStart,
                  end: this.state.ThuEnd
                }
              },
              {
                Fri: {
                  start: this.state.FriStart,
                  end: this.state.FriEnd
                }
              },
              {
                Sat: {
                  start: this.state.SatStart,
                  end: this.state.SatEnd
                }
              },
              {
                Sun: {
                  start: this.state.SunStart,
                  end: this.state.SunEnd
                }
              }
            ],
            priceRange: this.state.PriceRange,
            minDeliveryCharge: this.state.Delivery,
            restaurantEmail: this.state.BusinessEmail,
            password: this.state.password
          })
          .then(data => {
            console.log("Update Success");
          })
          .catch(err => {
            console.log(err);
          });
      }
    );
  }

  handlePriceRange(event) {
    this.setState({ PriceRange: event.target.value });
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
                src="http://is1.mzstatic.com/image/thumb/Purple128/v4/76/61/fc/7661fcae-4ea8-b877-3b51-225ec1a0c47c/source/1200x630bb.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <h4 className="card-title">Profile Picture</h4>
                <a
                  href="#"
                  className="btn btn-primary"
                  style={{ marginLeft: 80 }}
                >
                  Update
                </a>
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
                  value={this.state.FirstName}
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
                  value={this.state.LastName}
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
                  value={this.state.BusinessName}
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
                  {this.state.BusinessEmail}
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
                  value={this.state.BusinessPhone}
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
                      checked={this.state.PriceRange === "1"}
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="1"
                    />{" "}
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
                      checked={this.state.PriceRange === "2"}
                      id="inlineRadio2"
                      value="2"
                    />{" "}
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
                      checked={this.state.PriceRange === "3"}
                      id="inlineRadio3"
                      value="3"
                    />{" "}
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
                    value={this.state.Delivery}
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
                    value={this.state.PrepTime}
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
                  value={this.state.MonStart}
                  type="time"
                  className="form-control"
                  id="MonStart"
                />
              </div>
              <p className="form-control-static">to</p>
              <div className="col-md-3">
                <input
                  onChange={this.handleChange}
                  value={this.state.MonEnd}
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
                  value={this.state.TuesStart}
                  type="time"
                  className="form-control"
                  id="TuesStart"
                />
              </div>
              <p className="form-control-static">to</p>
              <div className="col-md-3">
                <input
                  onChange={this.handleChange}
                  value={this.state.TuesEnd}
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
                  value={this.state.WedStart}
                  type="time"
                  className="form-control"
                  id="WedStart"
                />
              </div>
              <p className="form-control-static">to</p>
              <div className="col-md-3">
                <input
                  onChange={this.handleChange}
                  value={this.state.WedEnd}
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
                  value={this.state.ThuStart}
                  type="time"
                  className="form-control"
                  id="ThuStart"
                />
              </div>
              <p className="form-control-static">to</p>
              <div className="col-md-3">
                <input
                  onChange={this.handleChange}
                  value={this.state.ThuEnd}
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
                  value={this.state.FriStart}
                  type="time"
                  className="form-control"
                  id="FriStart"
                />
              </div>
              <p className="form-control-static">to</p>
              <div className="col-md-3">
                <input
                  onChange={this.handleChange}
                  value={this.state.FriEnd}
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
                  value={this.state.SatStart}
                  type="time"
                  className="form-control"
                  id="SatStart"
                />
              </div>
              <p className="form-control-static">to</p>
              <div className="col-md-3">
                <input
                  onChange={this.handleChange}
                  value={this.state.SatEnd}
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
                  value={this.state.SunStart}
                  type="time"
                  className="form-control"
                  id="SunStart"
                />
              </div>
              <p className="form-control-static">to</p>
              <div className="col-md-3">
                <input
                  onChange={this.handleChange}
                  value={this.state.SunEnd}
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

export default RestaurantProfile;
