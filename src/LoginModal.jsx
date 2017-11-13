import React from "react";

class LoginModal extends React.Component {
  render() {
    return (
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
                <label for="exampleInputEmail1">Email address</label>
                <input
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter email"
                  type="email"
                />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  type="password"
                />
              </div>
              <p className="text-right">
                <a href="#">Forgot password?</a>
              </p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default">
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
    );
  }
}

export default LoginModal;