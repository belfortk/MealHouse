import React, { Component } from "react";

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dentry: "",
      dprice: "",
    };

  }


  render() {
    return (
      <li className="list-group-item list-group-item-primary">
        <div className="row">
          <strong>{this.props.name} - ${this.props.price} - ({this.props.type})</strong>
          <br/>
          <p>--{this.props.description}</p>
          <a
            href="#/editmenu"
            onClick={() => this.props.onClick()}
          >
          <i className="fa fa-trash" aria-hidden="true"></i>
          </a>
        </div>
      </li>
    );
  }
}
export default Items;
