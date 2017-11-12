import React from "react";
import axios from "axios";
import Navbar from "./Navbar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: []
    };
  }

  componentDidMount() {
    axios.get("/api/Customers/").then(res =>
      this.setState({
        customer: res.data[0].name
      })
    );
  }
  render() {
    return (
      <div className="container">
        <Navbar />

        <div id="myModal" class="modal fade" role="dialog">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
                <h4 class="modal-title">MealHouse Log-in</h4>
              </div>
              <div class="modal-body">
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    class="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter email"
                    type="email"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    type="password"
                  />
                </div>
                <p class="text-right">
                  <a href="#">Forgot password?</a>
                </p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default">Submit</button>
                <button
                  type="button"
                  class="btn btn-default"
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

export default App;
