import React from "react";
import { connect } from 'react-redux';
import { searchPlaceId, searchPlaceFormatted, searchPlaceLocation } from './SearchAction';
import { Link } from "react-router-dom";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      place_id: '',
      place_formatted:'',
      place_location: '',
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidMount() {
    var input = document.getElementById("searchTextField");
    var options = { componentRestrictions: { country: "us" } };
    var autocomplete = new google.maps.places.Autocomplete(input, options);
    autocomplete.addListener('place_changed', () => {
      let place = autocomplete.getPlace();
      let location = place.geometry.location;
      console.log(this.props);

      this.setState({
        place_formatted: place.formatted_address,
        place_id: place.place_id,
        place_location: location.toString(),
      });

      const { dispatch } = this.props;

      dispatch(searchPlaceId(place.place_id));
      dispatch(searchPlaceFormatted(place.formatted_address));
      dispatch(searchPlaceLocation(location.toString()));
  });
}

  handleFormSubmit(event) {
    // event.preventDefault();
    // var inputText = document.getElementById("searchTextField").value;
  }

  render() {
    return (
        <div className="container" id='searchCont' >
          <div className="input-group">
            <input
              ref="searchField"
              id="searchTextField"
              type="text"
              className="form-control Autocomplete"
              placeholder="Address"
              aria-describedby="basic-addon2"
            />
            <Link to="/results"><button
              className="input-group-addon button-success"
              id="basic-addon2"
              onClick={this.handleFormSubmit}
            >
              Submit
            </button></Link>

          </div>
        </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    search_place_id: state.search.search_place_id,
    search_place_formatted: state.search.search_place_formatted,
    search_place_location: state.search.search_place_location
  }
}

export default connect(mapStateToProps)(SearchBar);
