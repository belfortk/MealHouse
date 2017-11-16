import React, { Component } from "react";
import axios from "axios";
import Navbar from "../Navbar";

class OrderPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      quantity:0
    };
    this.renderAppetizer = this.renderAppetizer.bind(this);
    this.handleQuantity = this.handleQuantity.bind(this);
  }

  handleQuantity(event){
      this.setState({ quantity: event.target.value });
  }

  componentWillMount(){
      axios.get("http://localhost:3000/api/Restaurants/1?filter=%7B%22include%22%3A%20%22menuItems%22%7D&access_token=Al3bIEhsGQq664HkRHjJd3HDtm3oUK8wkznAj9V7yoWAuUN2H2wLcdseMAY1nRTF")
      .then(response => {
        console.log(response.data)
        this.setState({
          data: response.data
      })

    })

        .catch(err => console.log(err))
    
  }



  renderAppetizer(){
      if (this.state.data.menuItems !== undefined){
      return this.state.data.menuItems.map((item) => {
        if (item.type === "Appetizer"){
            console.log(item)
        return(
            <div className="card" style={{width:250, display:"inline-flex", marginRight:10}}key={item.id}>
            <div className="card-body">
                <div className="flexbox1">
                    <h4 className="card-title random1">{item.name}</h4>
                    <h6 className="random2">${item.price}</h6>
                </div>
                <p className="card-text">{item.description}</p>
                <hr />
                <a id="button" href="#" className="btn btn-primary btn-sm" style={{float:"right"}}>
                Add Item
                </a>
            </div>
            </div>
        )
          }
        }
      )}};

    renderEntree(){
      if (this.state.data.menuItems !== undefined){
      return this.state.data.menuItems.map((item) => {
        if (item.type === "Entree"){
            console.log(item)
        return(
            <div className="card" style={{width:250, display:"inline-flex", marginRight:10}}key={item.id}>
            <div className="card-body">
                <div className="flexbox1">
                    <h4 className="card-title random1">{item.name}</h4>
                    <h6 className="random2">${item.price}</h6>
                </div>
                <div className="flexbox1">
                    <p className="card-text random1">{item.description}</p>
                    <input
                        onChange={this.handleQuantity}
                        value={this.state.quantity}
                        type="number"
                        className="form-control random2"
                        id="quantity"
                        style={{width:50}}
                    />
                  </div>
                <hr />
                <a id="button" href="#" className="btn btn-primary btn-sm" style={{float:"right"}}>
                Add Item
                </a>
            </div>
            </div>
        )
          }
        }
      )}};

    renderBeverage(){
      if (this.state.data.menuItems !== undefined){
      return this.state.data.menuItems.map((item) => {
        if (item.type === "Beverage"){
            console.log(item)
        return(
            <div className="card" style={{width:250, display:"inline-flex", marginRight:10}}key={item.id}>
            <div className="card-body">
                <div className="flexbox1">
                    <h4 className="card-title random1">{item.name}</h4>
                    <h6 className="random2">${item.price}</h6>
                </div>
                <p className="card-text">{item.description}</p>
                <hr />
                <a id="button" href="#" className="btn btn-primary btn-sm" style={{float:"right"}}>
                Add Item
                </a>
            </div>
            </div>
        )
          }
        }
      )}};

  render(){
      var data = this.state.data;
      console.log(data.restaurantName)
      return(
          <div>
              <div className="row">
                <div className="col-sm-2">
                    <img
                    className="card-img-top"
                    style={{ height: 150 }}
                    src="http://is1.mzstatic.com/image/thumb/Purple128/v4/76/61/fc/7661fcae-4ea8-b877-3b51-225ec1a0c47c/source/1200x630bb.jpg"
                    alt="Card image cap"
                />
                </div>
                <div className="col-sm-10">
                    <h1>{data.restaurantName}</h1>
                    <p>{data.location && data.location.place_formatted} - {data.restaurantPhone}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-7 offset-sm-2">
                    <hr/>
                    <h2>Appetizer</h2>
                        {this.renderAppetizer()} 
                    <h2>Entree</h2>
                        {this.renderEntree()}
                    <h2>Beverage</h2>
                        {this.renderBeverage()}
                </div>
              </div>
              <div className="row">
                  <div className="col-sm-3">
                  </div>
              </div>
          </div>
      );
  };

}

export default OrderPage;