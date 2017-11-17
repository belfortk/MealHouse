import React from "react";
import NavBar from "../Navbar";
import { connect } from "react-redux";

class AboutUsPage extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    window.location = "http://localhost:3000/";
  }

  render() {
    return (
      <div className="ThankYouPage">
        <header className="App-header">
          <NavBar />
        </header>
        <div className="container" id="aboutus-container">
          <h1 className='text-white'>We are MealHouse</h1>

          <p className='text-white'>We want to connect your house to your favorite restaurants!</p>
          <p className='text-white'>
            By using this app you are adding to the connectivity of your local economy bringing fresh food directly to your door.
          </p>

        </div>
        <div className='row justify-content-center'>
          <button
            className="btn btn-primary"
            onClick={this.handleClick}
          >
            {" "}
            Back to Search{" "}
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    store: store.orderInfo
  };
}

export default connect(mapStateToProps)(AboutUsPage);
