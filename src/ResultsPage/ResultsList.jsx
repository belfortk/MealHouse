import React, { Component } from "react";

import NavBarComponent from "../Navbar";
import SearchResult from "./SearchResult";

class ResultsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [
        {
          ownerName: "string1",
          restaurantName: "string1",
          restaurantPhone: "string1",
          restaurantEmail: "string1",
          password: "string1",
          location: {},
          prepTime: 1,
          hoursOfOperation: {},
          id: 0
        },
        {
          ownerName: "string2",
          restaurantName: "string2",
          restaurantPhone: "string2",
          restaurantEmail: "string2",
          password: "string2",
          location: {},
          prepTime: 2,
          hoursOfOperation: {},
          id: 1
        },
        {
          ownerName: "string3",
          restaurantName: "string3",
          restaurantPhone: "string3",
          restaurantEmail: "string3",
          password: "string3",
          location: {},
          prepTime: 0,
          hoursOfOperation: {},
          id: 2
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBarComponent />
        </header>
        <div className="container">
          <div className="row">
            <div className="col-md-3" style={{ borderRight: "thick solid black" }}>
              <div className="row">Sort By: </div>
              <div className="col-md-4">
                <button type="button" class="btn btn-primary" > Price </button>
              </div>

              <div className="col-md-4">
                <button type="button" class="btn btn-primary" >Distance </button>
              </div>

              <div className="col-md-4">
                <button type="button" class="btn btn-primary" >Rating </button>
              </div>

              <div className="row">Filter</div>
              <div className="row">rating</div>
              <div className="row">price</div>
              <div className="row">distance</div>
            </div>

            <div className="col-md-9">
              {this.state.restaurants.map(restaurant => {
                return <SearchResult />;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResultsList;
