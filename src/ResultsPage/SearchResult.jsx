import React from "react";
import axios from "axios";

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avgStar: 0
    };
  }

  componentWillMount() {
    console.log(this.props.id);
    axios
      .get("http://localhost:3000/api/Restaurants/" + this.props.id + "?filter=%7B%22include%22%3A%22reviews%22%7D")
      .then(response => {
        let starAvg = 0;
        response.data.reviews.forEach(review => (starAvg = starAvg + review.stars));
        starAvg = Math.round(starAvg / response.data.reviews.length);
        this.setState({
          avgStar: starAvg
        });
      })
      .catch(error => {
        console.log("Restaurant data not found");
        console.log(error);
      });
  }

  render() {
    const fiveStars = (
      <div class="rating">
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>
    );

    const fourStars = (
      <div class="rating">
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>☆</span>
      </div>
    );

    const threeStars = (
      <div class="rating">
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>☆</span>
        <span>☆</span>
      </div>
    );

    const twoStars = (
      <div class="rating">
        <span>★</span>
        <span>★</span>
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
      </div>
    );

    const oneStars = (
      <div class="rating">
        <span>★</span>
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
      </div>
    );

    let star = null;
    if (this.state.avgStar == 1) {
      star = oneStars;
    } else if (this.state.avgStar == 2) {
      star = twoStars;
    } else if (this.state.avgStar == 3) {
      star = threeStars;
    } else if (this.state.avgStar == 4) {
      star = fourStars;
    } else {
      star = fiveStars;
    }

    return (

        <div className="row">
          <div className="col-md-8">
            <p>{this.props.name}</p>
            <p>
              <small>{this.props.location} </small>
            </p>
          </div>

          <div className="col-md-4">
            <div className="row">{star}</div>
            <div className="row">
              <p>{this.props.priceRange} </p>
            </div>
            <div className="row">
              <p>
                <small>Prep Time: {this.props.prepTime} mins</small>
              </p>
            </div>
          </div>
        </div>

    );
  }
}

export default SearchResult;
