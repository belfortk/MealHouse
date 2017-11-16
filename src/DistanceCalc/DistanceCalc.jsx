import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class DistanceCalc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place_id: "",
      place_formatted: "",
      origin_place_location: ["(32.7150491, -117.16422)"],

      destinations: []
    };
  }

  componentWillMount() {
    axios
      .get("/api/restaurants")
      .then(response => {
        const destinations = response.data.map(restaurant => {
          return restaurant.location.place_formatted;
        });
        this.setState({
          destinations: destinations
          //BusinessEmail: resBusinessEmail
        });
        this.googleMaps(destinations);
        console.log(destinations);
      })
      .catch(error => {
        console.log(error);
      });
  }

  googleMaps(destinations) {
    var origins = {lat: 32.7150491, lng: -117.16422};
    
    var distancematrix = new google.maps.DistanceMatrixService();
    distancematrix.getDistanceMatrix(
      {
        origins: [origins],
        destinations: destinations,
        travelMode: 'DRIVING',
        unitSystem: google.maps.UnitSystem.IMPERIAL,
        avoidHighways: false
      },
      function(response, status) {
        if (status !== "OK") {
          alert("Error was: " + status);
        } else {
          var originList = response.originAddresses;
          var destinationList = response.destinationAddresses;
          var outputDiv = document.getElementById("output");
        }
        console.log(response);
      }
    );
  }

  render() {
    return <div className="container">{this.state.destinations}</div>;
  }
}

export default DistanceCalc;

// "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=" + this.state.searchBar place_id + "&destinations=" + this.state.Restaurants place_id separated by %signs
