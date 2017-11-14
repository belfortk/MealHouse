import React, { Component } from "react";
import SearchBar from "./SearchBar";
import axios from "axios";

class MenuProfile extends Component {
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
      place_location: ""
    };

    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleBusinessName = this.handleBusinessName.bind(this);
    this.handleBusinessPhone = this.handleBusinessPhone.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handlePriceRange = this.handlePriceRange.bind(this);
    this.handleDelivery = this.handleDelivery.bind(this);
    this.handlePrepTime = this.handlePrepTime.bind(this);
    this.handleMonStart = this.handleMonStart.bind(this);
    this.handleMonEnd = this.handleMonEnd.bind(this);
    this.handleTuesStart = this.handleTuesStart.bind(this);
    this.handleTuesEnd = this.handleTuesEnd.bind(this);
    this.handleWedStart = this.handleWedStart.bind(this);
    this.handleWedEnd = this.handleWedEnd.bind(this);
    this.handleThuStart = this.handleThuStart.bind(this);
    this.handleThuEnd = this.handleThuEnd.bind(this);
    this.handleFriStart = this.handleFriStart.bind(this);
    this.handleFriEnd = this.handleFriEnd.bind(this);
    this.handleSatStart = this.handleSatStart.bind(this);
    this.handleSatEnd = this.handleSatEnd.bind(this);
    this.handleSunStart = this.handleSunStart.bind(this);
    this.handleSunEnd = this.handleSunEnd.bind(this);
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

  handleFirstName(event) {
    this.setState({ FirstName: event.target.value });
  }

  handleLastName(event) {
    this.setState({ LastName: event.target.value });
  }

  handleBusinessName(event) {
    this.setState({ BusinessName: event.target.value });
  }

  handleBusinessPhone(event) {
    this.setState({ BusinessPhone: event.target.value });
  }

  handleAddress(event) {
    this.setState({ Address: event.target.value });
  }

  handlePriceRange(event) {
    this.setState({ PriceRange: event.target.value });
  }
  handleDelivery(event) {
    this.setState({ Delivery: event.target.value });
  }

  handlePrepTime(event) {
    this.setState({ PrepTime: event.target.value });
  }

  handleMonStart(event) {
    this.setState({ MonStart: event.target.value });
  }

  handleMonEnd(event) {
    this.setState({ MonEnd: event.target.value });
  }

  handleTuesStart(event) {
    this.setState({ TuesStart: event.target.value });
  }

  handleTuesEnd(event) {
    this.setState({ TuesEnd: event.target.value });
  }

  handleWedStart(event) {
    this.setState({ WedStart: event.target.value });
  }

  handleWedEnd(event) {
    this.setState({ WedEnd: event.target.value });
  }

  handleThuStart(event) {
    this.setState({ ThuStart: event.target.value });
  }

  handleThuEnd(event) {
    this.setState({ ThuEnd: event.target.value });
  }

  handleFriStart(event) {
    this.setState({ FriStart: event.target.value });
  }

  handleFriEnd(event) {
    this.setState({ FriEnd: event.target.value });
  }

  handleSatStart(event) {
    this.setState({ SatStart: event.target.value });
  }

  handleSatEnd(event) {
    this.setState({ SatEnd: event.target.value });
  }

  handleSunStart(event) {
    this.setState({ SunStart: event.target.value });
  }

  handleSunEnd(event) {
    this.setState({ SunEnd: event.target.value });
    console.log(this.state);
  }

  render() {
    return (
      <div className="container">
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
                  onChange={this.handleFirstName}
                  value={this.state.FirstName}
                  className="form-control"
                  type="text"
                  placeholder="Pre-set Value"
                  id="firstName"
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="lastName" className="col-md-3 col-form-label">
                Last Name
              </label>
              <div className="col-md-8">
                <input
                  onChange={this.handleLastName}
                  value={this.state.LastName}
                  className="form-control"
                  type="text"
                  placeholder="Pre-set Value"
                  id="lastName"
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="businessName" className="col-md-3 col-form-label">
                Business Name
              </label>
              <div className="col-md-8">
                <input
                  onChange={this.handleBusinessName}
                  value={this.state.BusinessName}
                  className="form-control"
                  type="text"
                  placeholder="Pre-set Value"
                  id="businessName"
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="businessEmail" className="col-md-3 col-form-label">
                Business Email
              </label>
              <div className="col-md-8">
                <p className="form-control-static">
                  {this.state.BusinessEmail}
                </p>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="businesspnumber" className="col-md-3 col-form-label">
                Business Phone#
              </label>
              <div className="col-md-8">
                <input
                  onChange={this.handleBusinessPhone}
                  value={this.state.BusinessPhone}
                  className="form-control"
                  type="tel"
                  placeholder="Pre-set Value"
                  id="businesspnumber"
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="businessAddress" className="col-md-3 col-form-label">
                Business Address
              </label>
              <div className="col-md-8">
                <input
                  onChange={this.handleAddress}
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
                <div className="form-check form-check-inline disabled">
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
                    onChange={this.handleDelivery}
                    value={this.state.Delivery}
                    type="number"
                    className="form-control"
                    aria-label="Amount (to the nearest dollar)"
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
                    onChange={this.handlePrepTime}
                    value={this.state.PrepTime}
                    type="number"
                    className="form-control"
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
                  onChange={this.handleMonStart}
                  value={this.state.MonStart}
                  type="time"
                  className="form-control"
                />
              </div>
              <p className="form-control-static">to</p>
              <div className="col-md-3">
                <input
                  onChange={this.handleMonEnd}
                  value={this.state.MonEnd}
                  type="time"
                  className="form-control"
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
                  onChange={this.handleTuesStart}
                  value={this.state.TuesStart}
                  type="time"
                  className="form-control"
                />
              </div>
              <p className="form-control-static">to</p>
              <div className="col-md-3">
                <input
                  onChange={this.handleTuesEnd}
                  value={this.state.TuesEnd}
                  type="time"
                  className="form-control"
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
                  onChange={this.handleWedStart}
                  value={this.state.WedStart}
                  type="time"
                  className="form-control"
                />
              </div>
              <p className="form-control-static">to</p>
              <div className="col-md-3">
                <input
                  onChange={this.handleWedEnd}
                  value={this.state.WedEnd}
                  type="time"
                  className="form-control"
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
                  onChange={this.handleThuStart}
                  value={this.state.ThuStart}
                  type="time"
                  className="form-control"
                />
              </div>
              <p className="form-control-static">to</p>
              <div className="col-md-3">
                <input
                  onChange={this.handleThuEnd}
                  value={this.state.ThuEnd}
                  type="time"
                  className="form-control"
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
                  onChange={this.handleFriStart}
                  value={this.state.FriStart}
                  type="time"
                  className="form-control"
                />
              </div>
              <p className="form-control-static">to</p>
              <div className="col-md-3">
                <input
                  onChange={this.handleFriEnd}
                  value={this.state.FriEnd}
                  type="time"
                  className="form-control"
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
                  onChange={this.handleSatStart}
                  value={this.state.SatStart}
                  type="time"
                  className="form-control"
                />
              </div>
              <p className="form-control-static">to</p>
              <div className="col-md-3">
                <input
                  onChange={this.handleSatEnd}
                  value={this.state.SatEnd}
                  type="time"
                  className="form-control"
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
                  onChange={this.handleSunStart}
                  value={this.state.SunStart}
                  type="time"
                  className="form-control"
                />
              </div>
              <p className="form-control-static">to</p>
              <div className="col-md-3">
                <input
                  onChange={this.handleSunEnd}
                  value={this.state.SunEnd}
                  type="time"
                  className="form-control"
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
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

export default MenuProfile;
