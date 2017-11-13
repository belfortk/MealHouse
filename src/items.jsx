import React, { Component } from "react";

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dentry: "",
      dprice: "",
    };
    this.updateDescription = this.updateDescription.bind(this);
    this.updatePrice = this.updatePrice.bind(this);
  }

  updateDescription(event) {
    this.setState({ dentry: event.target.value });
  }

  updatePrice(event) {
    this.setState({ dprice: event.target.value });
  }


  save() {

    const payload = {
      dentry: this.state.dentry,
      dprice: this.state.dprice
    };
    this.props.saveItem(payload, this.props.index);
  }

  render() {
    return (
      <li className="list-group-item list-group-item-primary">
        <div className="row">
          <strong>{this.props.entry} - ${this.props.price}</strong>
          <a
            href="#"
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
