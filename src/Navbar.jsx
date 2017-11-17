import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { cookieInput } from "./Cookie/CookieAction";
import { createCookie } from "./Cookie/CookieFunction";
import axios from 'axios';
import randomstring from 'randomstring';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    console.log(e);
    const { dispatch } = this.props;

    dispatch(cookieInput(e.target.value, e.target.id));
    console.log(this.props);
  }

  handleSubmit() {
    axios
    .get('/api/customers')
    .then(data => {
      console.log(data);
      let auth;
      for (let i = 0; i < data.data.length; i++) {
        if(data.data[i].email === this.props.email && data.data[i].password === this.props.password) {
          auth = true;
          createCookie('id', data.data[i].id, 0 );
          createCookie('auth', randomstring.generate(), 0 );
        }
      }
      console.log(auth);
    });
  }

  render() {
    return (
      <div>
      <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">
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
            <Link className="nav-item nav-link active" to="/signup">
              Sign Up <span className="sr-only">(current)</span>
            </Link>
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
      <div id="myModal" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
              <h4 className="modal-title">MealHouse Log-in</h4>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  type="email"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  type="password"
                  onChange={this.handleChange}
                />
              </div>
              <p className="text-right">
                <a href="#">Forgot password?</a>
              </p>
            </div>
            <div className="modal-footer">
              <button onClick={this.handleSubmit} type="button" className="btn btn-default">
                Submit
              </button>
              <button
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    email: state.login.email,
    password: state.login.password
  }
}

export default connect(mapStateToProps)(Navbar);
