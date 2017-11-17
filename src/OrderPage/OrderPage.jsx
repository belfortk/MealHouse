import React, { Component } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import OrderedItems from "./OrderedItems";
import {OrderList, DataList, ShowTotal} from "./OrderAction";
import { connect } from "react-redux";

function mapStateToProps(store) {
  return {
    subtotal: store.orderList.subtotal,
    total: store.orderList.total,
    dataList: store.orderList.dataList,
    orderList: store.orderList.orderList
  }
}

class OrderPage extends Component {
  constructor(props) {
    super(props);

    this.renderAppetizer = this.renderAppetizer.bind(this);
    this.handleClickAdd = this.handleClickAdd.bind(this);
    this.renderItems = this.renderItems.bind(this);
    this.handleCheckout = this.handleCheckout.bind(this);
  }

  componentWillMount(){
      const {dispatch} = this.props;
      axios.get("http://localhost:3000/api/Restaurants/1?filter=%7B%22include%22%3A%20%22menuItems%22%7D&access_token=Al3bIEhsGQq664HkRHjJd3HDtm3oUK8wkznAj9V7yoWAuUN2H2wLcdseMAY1nRTF")
      .then(response => {
        dispatch(DataList(response.data))
    })
    .catch(err => console.log(err))

  }

  deleteInfo(index, price) {
    const {dispatch} = this.props;
    let orderArray = [...this.props.orderList];
    let subtotalvalue = this.props.subtotal;
    let totalvalue = this.props.total;

    orderArray.splice(index, 1);
    subtotalvalue = Math.round((subtotalvalue - price)*100)/100;
    totalvalue = Math.round((totalvalue - price)*100)/100;

    dispatch(OrderList(orderArray));
    dispatch(ShowTotal(subtotalvalue, totalvalue))

  }

  renderItems(){
      return this.props.orderList.map((list, index) => (
      <OrderedItems
        key={list.name + index}
        price={list.price}
        name={list.name}
        onClick={() => this.deleteInfo(index,list.price)}
      />
    ));
  }
  handleClickAdd(name, price){
    const { dispatch } = this.props;
    let orderArray = [...this.props.orderList];
    let namevalue = name;
    let pricevalue = price;
    let subtotalvalue = this.props.subtotal;
    let totalvalue = this.props.total;

    orderArray.push({
      name: namevalue,
      price: pricevalue,
    });
    subtotalvalue = Math.round((subtotalvalue + price)*100)/100;
    totalvalue = Math.round((totalvalue + price)*100)/100;

    dispatch(OrderList(orderArray))
    dispatch(ShowTotal(subtotalvalue, totalvalue))


  }




  renderAppetizer(){
      if (this.props.dataList.menuItems !== undefined){
      return this.props.dataList.menuItems.map((item) => {
        if (item.type === "Appetizer"){
        return(
            <div className="card" style={{width:250, display:"inline-flex", marginRight:10}}key={item.id}>
            <div className="card-body">
                <div className="flexbox1">
                    <h4 className="card-title random1">{item.name}</h4>
                    <h6 className="random2">${item.price}</h6>
                </div>
                <p className="card-text">{item.description}</p>
                <hr />
                <button onClick={()=>this.handleClickAdd(item.name, item.price)} className="btn btn-primary btn-sm" style={{float:"right"}}>
                Add Item
                </button>
            </div>
            </div>
        )
          }
        }
      )}};

    renderEntree(){
      if (this.props.dataList.menuItems !== undefined){
      return this.props.dataList.menuItems.map((item) => {
        if (item.type === "Entree"){
        return(
            <div className="card" style={{width:250, display:"inline-flex", marginRight:10}}key={item.id}>
            <div className="card-body">
                <div className="flexbox1">
                    <h4 className="card-title random1">{item.name}</h4>
                    <h6 className="random2">${item.price}</h6>
                </div>
                    <p className="card-text">{item.description}</p>
                <hr />
                <button onClick={()=>this.handleClickAdd(item.name, item.price)} className="btn btn-primary btn-sm" style={{float:"right"}}>
                Add Item
                </button>
            </div>
            </div>
        )
          }
        }
      )}};

    renderBeverage(){
      if (this.props.dataList.menuItems !== undefined){
      return this.props.dataList.menuItems.map((item) => {
        if (item.type === "Beverage"){
        return(
            <div className="card" style={{width:250, display:"inline-flex", marginRight:10}}key={item.id}>
            <div className="card-body">
                <div className="flexbox1">
                    <h4 className="card-title random1">{item.name}</h4>
                    <h6 className="random2">${item.price}</h6>
                </div>
                <p className="card-text">{item.description}</p>
                <hr />
                <button onClick={()=>this.handleClickAdd(item.name, item.price)} className="btn btn-primary btn-sm" style={{float:"right"}}>
                Add Item
                </button>
            </div>
            </div>
        )
          }
        }
      )}};

      handleCheckout(){
        window.location = '/#/checkout';
      }

  render(){
      let data = this.props.dataList;
      return(
          <div>
              <div className="row">
                <div className="col-sm-7 offset-sm-2" style={{height:"100px"}}>
                    <h1>{data.restaurantName && data.restaurantName}</h1>
                    <p>{data.location && data.location.place_formatted} - {data.restaurantPhone}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-2" style={{padding:"40px"}}>
                    <img
                    className="card-img-top"
                    style={{ height: 150}}
                    src="http://is1.mzstatic.com/image/thumb/Purple128/v4/76/61/fc/7661fcae-4ea8-b877-3b51-225ec1a0c47c/source/1200x630bb.jpg"
                    alt="Card image cap"
                />
                </div>
                <div className="col-sm-7 orderPageItemList">
                    <hr/>
                    <h2>Appetizer</h2>
                        {this.renderAppetizer()}
                    <h2>Entree</h2>
                        {this.renderEntree()}
                    <h2>Beverage</h2>
                        {this.renderBeverage()}
                </div>
                <div className="col-sm-3">
                    <div className="card">
                        <div className="card-header">Shopping Cart</div>
                            <div className="card-body ShopCart">
                                <ul className="list-group">
                                  {this.renderItems()}
                                </ul>
                            </div>


                            <div className="card-footer cart-footer">
                                <div className="flexbox1">
                                    <p className="random1">Items Subtotal:</p><p className="random2">${this.props.subtotal}</p>
                                </div>
                                <div className="flexbox1">
                                    <p className="random1">Delivery Fee:</p><p className="random2">$5</p>
                                </div>
                                <div className="flexbox1">
                                    <p className="random1">Total:</p><p className="random2">${this.props.total}</p>
                                </div>
                                <button type="button" className="btn btn-primary btn-block" onClick = {this.handleCheckout}>Checkout</button>
                            </div>
                    </div>
                </div>
            </div>
          </div>
      );
  };

}

export default connect(mapStateToProps)(OrderPage);
