import React, { Component } from "react";
import { connect } from 'react-redux'
import axios from 'axios';
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
          <div className="row">
            <div className="col-md-3" style={{ borderRight: "thick solid black" }} id="filter-sort-col">
              <div className="row">Sort By: </div>

              <div className="row">
                <div className="col-md-4">Price</div>
                <button type="button" class="btn btn-primary col-md-4">
                  Lo
                </button>
                <button type="button" class="btn btn-primary col-md-4">
                  Hi
                </button>
              </div>

              <div className="row">
                <div className="col-md-4">Distance</div>
                <button type="button" class="btn btn-primary col-md-4">
                  Lo
                </button>
                <button type="button" class="btn btn-primary col-md-4">
                  Hi
                </button>
              </div>

              <div className="row">
                <div className="col-md-4">Distance</div>
                <button type="button" class="btn btn-primary col-md-4">
                  Lo
                </button>
                <button type="button" class="btn btn-primary col-md-4">
                  Hi
                </button>
              </div>

              <div className="row">Filter</div>
              <div className="row">rating</div>
              <div className="row">price</div>
              <div className="row">distance</div>
            </div>

            <div className="col-md-9">

            {console.log(this.props)}
              {this.props.listStore.map(restaurant => {
                return <SearchResult name={restaurant.restaurantName}/>;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(store){
  return  {
      listStore: store.SearchResultsReducer.restaurants,
      search_place_id: store.search.search_place_id,
      search_place_formatted: store.search.search_place_formatted,
      search_place_location: store.search.search_place_location
    };
}

export default connect(mapStateToProps)(ResultsList);
