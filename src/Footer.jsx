import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <footer className="navbar navbar-fixed-bottom">
        <div className="navbar navbar-fixed-bottom" id="">
          <div className="">
            <Link className="active text-black footer-link" to="/aboutus">
              About Us <span className="sr-only">(current)</span>
            </Link>
            <Link className="active text-black footer-link" to="/contactus">
              Contact Us <span className="sr-only">(current)</span>
            </Link>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
