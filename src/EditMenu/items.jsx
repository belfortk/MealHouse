import React, { Component } from "react";

class Items extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
    <div style={{ display: this.props.active ? "block" : "none" }}>
      <li className="list-group-item list-group-item-primary">
       <span>
          <strong>{this.props.name} - ${this.props.price} - ({this.props.type})</strong>
          <a
            href="#/editmenu"
            onClick={() => this.props.onClick()}
          >
          <i className="fa fa-trash" aria-hidden="true" style={{marginLeft:15}}></i>
          </a>
          <br/>
          <p>--{this.props.description}</p>
          </span>
        
      </li>
    </div>
    );
  }
}
export default Items;
