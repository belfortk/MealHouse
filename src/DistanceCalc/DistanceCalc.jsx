import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


class DistanceCalc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place_id: "",
      place_formatted: "",
      place_location: "",

      destinations: []
    };
  }

  componentWillMount() {
    axios
      .get("/api/restaurants")
      .then(response => {

        console.log(response.data);
        const destinations = response.data.map((restaurant) => {
            return restaurant.location.place_location;
        })
        this.setState({
          destinations: destinations,
          //BusinessEmail: resBusinessEmail
        });
      })
      .catch(error => {
        console.log(error);
      });
  }


  render() {
    return <div className="container">{this.state.destinations}</div>;
  }
}

export default DistanceCalc;

// "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=" + this.state.searchBar place_id + "&destinations=" + this.state.Restaurants place_id separated by %signs
