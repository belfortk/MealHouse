import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
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
      <div className="ResultsPage">
        <header className="App-header">
          <NavBarComponent />
        </header>

        <div className="container">
          <div className="result-sidebar">
            <div className="form-group">
              Price
              <button type="button" class="btn btn-primary btn-sm">
                ascending
              </button>
              <button type="button" class="btn btn-primary btn-sm">
                descending
              </button>
            </div>
            <div className="form-group">
              Rating
              <button type="button" class="btn btn-primary btn-sm">
                ascending
              </button>
              <button type="button" class="btn btn-primary btn-sm">
                descending
              </button>
            </div>
            <div className="form-group">
              Delivery Charge
              <button type="button" class="btn btn-primary btn-sm">
                ascending
              </button>
              <button type="button" class="btn btn-primary btn-sm">
                descending
              </button>
            </div>
          </div>
          <div className="main-body-results">
            <ul className="list-group list-group-flush">
              {this.props.listStore.map(restaurant => {
                return (
                  <li className="list-group-item searchResultContainer" style={{ marginBottom: "1vh" }}>
                    <SearchResult
                      id={restaurant.id}
                      name={restaurant.restaurantName}
                      location={restaurant.location.place_formatted}
                      prepTime={restaurant.prepTime}
                      priceRange={restaurant.priceRange}
                      minDeliveryCharge={restaurant.minDeliveryCharge}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    listStore: store.SearchResultsReducer.restaurants,
    search_place_id: store.search.search_place_id,
    search_place_formatted: store.search.search_place_formatted,
    search_place_location: store.search.search_place_location
  };
}

export default connect(mapStateToProps)(ResultsList);
