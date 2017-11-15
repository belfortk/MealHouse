import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class DistanceCalc extends Comment {
    constructor(props) {
        super(props);
        this.state = {
            place_id: "",
            place_formatted: "",
            place_location: "",
        };

    }

    component
}

// "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=" + this.state.searchBar place_id + "&destinations=" + this.state.Restaurants place_id separated by %signs

