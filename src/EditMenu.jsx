import React, { Component } from "react";
import Items from "./items";

class EditMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 0,
      entry: "",
      dentry: "",
      price: "",
      type:"",
      description:"",
      items: [],
    };
    this.additem = this.additem.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.handleType = this.handleType.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.saveItem = this.saveItem.bind(this);
  }

  
  saveItem(payload, index) {
    let items = [...this.state.items];
    

    if (payload.dentry===""){
      items[index].entry = this.state.entry
    }
    else{
      items[index].entry = payload.dentry;
    }
    if (payload.dprice===""){
      items[index].price = this.state.price
    }
    else{
      items[index].price = payload.dprice;
    }
    
    
    this.setState({
      items: items
    });
  }

  handlePrice(event) {
    this.setState({ price: event.target.value });
  }
  
  handleType(event) {
    this.setState({ type: event.target.value });
  }

  handleDescription(event) {
    this.setState({ description: event.target.value });
  }

  deleteInfo(index) {
    let items = [...this.state.items];

    items.splice(index, 1);

    this.setState({
      items: items
    });
  }

  handleChange(event) {
    this.setState({ entry: event.target.value });
  }
  additem() {
    var itemArray = this.state.items;
    const entryvalue = this.state.entry;
    var pricevalue = this.state.price;
    var typevalue = this.state.type;
    var descriptionvalue = this.state.description;
    
    itemArray.push({
      entry: entryvalue,
      price: pricevalue,
      description: descriptionvalue,
      type: typevalue
    });

    this.setState({
      items: itemArray
    });
    
  }
  renderTodos() {
    return this.state.items.map((item, index) => (
      <Items
        key={item.entry + index}
        price={item.price}
        index={index}
        entry={item.entry}
        description={item.description}
        type={item.type}
        onClick={() => this.deleteInfo(index)}
        saveItem={this.saveItem}
      />
    ));
  }
  render() {
    return (
      <div className="container">
        <div className="titleheader">
          <h1>Editing Menu</h1>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">Add New Items</div>
              <div className="card-body">
                <label htmlFor="inputbox">Item Name</label>
                <textarea
                  className="form-control create-todo-text"
                  id="inputbox"
                  rows="1"
                  value={this.state.entry}
                  onChange={this.handleChange}
                />
                <label htmlFor="inputbox">Description</label>
                <textarea
                  className="form-control create-todo-text"
                  id="inputbox"
                  rows="3"
                  value={this.state.description}
                  onChange={this.handleDescription}
                />
                <label htmlFor="priority">
                  Price
                </label>
                <div className="form-group row">
                  <div className="col-md-6">  
                    <div className="input-group">
                        <span className="input-group-addon">$</span>
                        <input type="number" className="form-control" value={this.state.price} onChange={this.handlePrice}/>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlSelect2">Item Type</label>
                  <select className="form-control" id="exampleFormControlSelect2" onChange={this.handleType}>
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
                <button type="button" className="btn btn-primary btn-block">Update List</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditMenu;
