import React from "react";
import NavBar from "../Navbar";
import { connect } from "react-redux";

class ContactUs extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    window.location = "http://mealhouse.herokuapp.com/";
  }

  render() {
    return (
      <div className="ContactUs">
        <header className="App-header">
          <NavBar />
        </header>

        <div className="container text-center">
          <h1>Contact Us</h1>
        </div>

        <div className="container bg-3 text-center">
          <div className="panel panel-default">
            <form action="/thanks" method="POST">
              <div className="form-group">
                <input placeholder="First Name" name="firstName" type="text" />
              </div>
              <div className="form-group">
                <input placeholder="Last Name" name="lastName" type="text" />
              </div>
              <div className="form-group">
                <input placeholder="Email" name="email" type="text" />
              </div>
              <div className="form-group">
                <input type="submit" />
              </div>
            </form>
          </div>
        </div>

        <div className="row justify-content-center">
          <button className="btn btn-primary" onClick={this.handleClick}>
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

export default connect(mapStateToProps)(ContactUs);
