import React from "react";


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

      this.setState({
        place_formatted: place.formatted_address,
        place_id: place.place_id,
        place_location: location.toString(),
      });
  });
}

  handleFormSubmit(event) {
    event.preventDefault();
    var inputText = document.getElementById("searchTextField").value;
    this.setState({
      inputText: inputText
    });
    console.log(this.state);
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
            <button
              className="input-group-addon button-success"
              id="basic-addon2"
              onClick={this.handleFormSubmit}
            >
              Submit
            </button>

          </div>
        </div>

    );
  }
}

export default SearchBar;
