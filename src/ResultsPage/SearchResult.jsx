import React from "react";

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-2">img goes here</div>

        <div className="col-md-6">
          <p>{this.props.name}</p> <p>Tags </p>
        </div>

        <div className="col-md-2">
          <p>num of stars</p>
          <p>num of ratings</p>
        </div>

        <div className="col-md-2">
          <p>pricey-ness </p>
          <p>distance • delivery time </p>
        </div>
      </div>
    );
  }
}

export default SearchResult;
