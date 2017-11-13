import React from "react";
class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded fixed-top">
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <a className="navbar-brand" href="#">
          MealHouse
        </a>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">
              Sign Up <span className="sr-only">(current)</span>
            </a>
            <a
          href="#"
          className="nav-item nav-link active"
          data-toggle="modal"
          data-target="#myModal"
        >
          Login
        </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
