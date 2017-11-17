import React, { Component } from "react";

class OrderedItems extends Component {
  constructor(props) {
    super(props);

  }

  render(){
    return(
        <div>
            <li className="list-group list-group-item">
                <a
                    href="#/orderpage"
                    onClick={() => this.props.onClick()}
                >
                    <i className="fa fa-minus-circle" aria-hidden="true"></i>
                </a>
                <p>{this.props.name} - ${this.props.price}</p>
                
            </li>
        </div>
    )
  }
}
export default OrderedItems;