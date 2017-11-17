import React, { Component } from "react";
import Items from "./items";
import axios from "axios";
import Navbar from "../Navbar";
import {userInput, menuList} from "./MenuAction";
import { connect } from "react-redux";

function mapStateToProps(store) {
  return {
    name: store.editMenu.name,
    price: store.editMenu.price,
    type: store.editMenu.type,
    description: store.editMenu.description,
    active: store.editMenu.active,
    items: store.editMenu.items
  }
}

class EditMenu extends Component {
  constructor(props) {
    super(props);

    this.additem = this.additem.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteInfo = this.deleteInfo.bind(this);
    this.renderTodos = this.renderTodos.bind(this)
  }

  

  deleteInfo(index, id) {
    let item = [...this.props.items];

    const {dispatch} = this.props;
    axios.put(`/api/MenuItems/${id}`,{
      name: item[index].name,
      price: item[index].price,
      type: item[index].type,
      active: false
    })

    item.splice(index, 1);

    dispatch(menuList(item))

  }

  handleChange(event) {
    const { dispatch } = this.props;
    dispatch(userInput(event.target.value, event.target.id));  
  }
  additem() {
    const {dispatch} = this.props;
    var itemArray = [...this.props.items];
    const namevalue = this.props.name;
    var pricevalue = this.props.price;
    var typevalue = this.props.type;
    var descriptionvalue = this.props.description;
    var restaurantIdvalue = 1;
    var activevalue = this.props.active;
    
    itemArray.push({
      name: namevalue,
      price: pricevalue,
      description: descriptionvalue,
      type: typevalue,
      restaurantId: restaurantIdvalue,
      active: activevalue
    });


    dispatch(menuList(itemArray));

    axios.post('/api/MenuItems', {
      name: namevalue,
      price: pricevalue,
      description: descriptionvalue,
      type: typevalue,
      restaurantId: restaurantIdvalue,
      active: activevalue
    })
    .then(data => console.log(data))
    .catch(err => {
            console.log(err);
          })

  }
  renderTodos() {
    return this.props.items.map((item, index) =>  (
      <Items
        key={item.name + index}
        price={item.price}
        index={index}
        name={item.name}
        description={item.description}
        type={item.type}
        active={item.active}
        onClick={() => this.deleteInfo(index, item.id)}
      />
    ));
  }

  componentWillMount(){
      const {dispatch} = this.props;
        axios.get('/api/MenuItems')
      .then(response => {
        console.log("13")
        dispatch(menuList(response.data)) 
      })
      .catch(err => {console.log(err)})
  }

  render() {
    console.log("rendering")
    return (
        
      <div className="container">
        <Navbar />
        <div className="titleheader">
          <h1>Editing Menu</h1>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">Add New Items</div>
              <div className="card-body">
                <label htmlFor="name">Item Name</label>
                <textarea
                  className="form-control create-todo-text"
                  id="name"
                  rows="1"
                  value={this.props.name}
                  onChange={this.handleChange}
                />
                <label htmlFor="description">Description</label>
                <textarea
                  className="form-control create-todo-text"
                  id="description"
                  rows="3"
                  value={this.props.description}
                  onChange={this.handleChange}
                />
                <label htmlFor="price">
                  Price
                </label>
                <div className="form-group row">
                  <div className="col-md-6">  
                    <div className="input-group">
                        <span className="input-group-addon">$</span>
                        <input type="number" id="price"className="form-control" value={this.props.price} onChange={this.handleChange}/>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="type">Item Type</label>
                  <select className="form-control" id="type" onChange={this.handleChange}>
                    <option value="Appetizer">Appetizer</option>
                    <option value="Entree">Entree</option>
                    <option value="Beverage">Beverage</option>
                  </select>
                </div>
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-success btn-block create-todo"
                  onClick={this.additem}
                >
                  Add
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-8">
            <div className="card">
              <div className="card-header">Current Menu List</div>
              <div className="card-body">
                <ul className="list-group">
                  {this.renderTodos()}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default connect(mapStateToProps)(EditMenu);