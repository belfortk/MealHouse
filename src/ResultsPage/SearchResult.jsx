import React from "react";
import axios from "axios";

import { Link } from "react-router-dom";


class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avgStar: 0,
      pictureURL: ''
    };
  }

  componentWillMount() {

    axios
      .get("http://mealhouse.herokuapp.com/api/Restaurants/" + this.props.id + "?filter=%7B%22include%22%3A%22reviews%22%7D")
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

      axios.get('http://mealhouse.herokuapp.com/api/Restaurants/'+ this.props.id+ '/pictures')
      .then(response => {


        this.setState({
          pictureURL: response.data[0].src
        });
      })
      .catch(error => {
        console.log("Picture not found");
        console.log(error);
      })
  }

  render() {
    const fiveStars = (
      <div className="rating">
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>
    );

    const fourStars = (
      <div className="rating">
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>☆</span>
      </div>
    );

    const threeStars = (
      <div className="rating">
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>☆</span>
        <span>☆</span>
      </div>
    );

    const twoStars = (
      <div className="rating">
        <span>★</span>
        <span>★</span>
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
      </div>
    );

    const oneStars = (
      <div className="rating">
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

    function dollarSignGenerator(expense){
      switch (expense) {
        case 1 : {
          return "$";
        }
        case 2 : {
          return "$$";
        }
        case 3 : {
          return "$$$";
        }
        default: {
          return "no price data";
        }
      }
    }

    return (

        <div className="row" style={{ width: "100%" }}>
        <div className='col-md-3'>
        <img src={this.state.pictureURL} alt='no picture found' style={{width:'70px', height:'75px'}}/>
        </div>
          <div className="col-md-5">
            <p>{this.props.name}</p>
            <p>
              <small>{this.props.location} </small>
            </p>
          </div>

          <div className="col-md-3">
            <div className="row">{star}</div>
            <div className="row">
              <p>{dollarSignGenerator(this.props.priceRange)} </p>
            </div>
            <div className="row">
              <p>
                <small>Prep Time: {this.props.prepTime} mins</small>
              </p>
            </div>
          </div>
          <div className="col-md-1 result-go-button-div" style={{display:"flex", alignItems:"center"}}>
          <Link to="/orderpage">
          <button type="button" id={`go-button-${this.props.id}`} className="btn btn-primary result-go-button button-pulse" onClick={this.handleGoButtonClick}>
                GO!
              </button>
          </Link>
          </div>
        </div>

    );
  }
}

export default SearchResult;
