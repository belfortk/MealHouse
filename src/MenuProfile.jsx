import React, { Component } from 'react';


class MenuProfile extends Component {
  constructor(props) {
        super(props);

        this.state = {
            name: ""
        };
    }

    render() {
    return (
      <div className="container">
          <div className="row">
            <div className="col-sm-9 offset-sm-3">
                <h1>Restaurant Profile</h1>
                <hr/>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3">
                <div className="card">
                  <img className="card-img-top" style={{height: 200}} src="http://is1.mzstatic.com/image/thumb/Purple128/v4/76/61/fc/7661fcae-4ea8-b877-3b51-225ec1a0c47c/source/1200x630bb.jpg" alt="Card image cap"/>
                  <div className="card-body">
                    <h4 className="card-title">Profile Picture</h4>
                    <a href="#" className="btn btn-primary" style={{marginLeft:80}}>Update</a>
                  </div>
                </div>
              </div>
            <div className="col-sm-9">
              <div className="form-group row">
                <label for="firstName" className="col-md-3 col-form-label">First Name</label>
                  <div className="col-md-8">
                    <input className="form-control" type="text" placeholder="Pre-set Value" id="firstName"/>
                  </div>
              </div>
              <div className="form-group row">
                <label for="lastName" className="col-md-3 col-form-label">Last Name</label>
                  <div className="col-md-8">
                    <input className="form-control" type="text" placeholder="Pre-set Value" id="lastName"/>
                  </div>
              </div>
              <div className="form-group row">
                <label for="businessName" className="col-md-3 col-form-label">Business Name</label>
                  <div className="col-md-8">
                    <input className="form-control" type="text" placeholder="Pre-set Value" id="businessName"/>
                  </div>
              </div>
              <div className="form-group row">
                <label for="businessEmail" className="col-md-3 col-form-label">Business Email</label>
                  <div className="col-md-8">
                    <p className="form-control-static">email@example.com</p>
                  </div>
              </div>
              <div className="form-group row">
                <label for="businesspnumber" className="col-md-3 col-form-label">Business Phone#</label>
                  <div className="col-md-8">
                    <input className="form-control" type="tel" placeholder="Pre-set Value" id="businesspnumber"/>
                  </div>
              </div>
              <div className="form-group row">
                <label for="businessAddress" className="col-md-3 col-form-label">Business Street</label>
                  <div className="col-md-8">
                    <input className="form-control" type="text" placeholder="Pre-set Value" id="businessAddress"/>
                  </div>
              </div>
              <div className="form-group row">
                <label for="businessAddress" className="col-md-3 col-form-label">Business City</label>
                  <div className="col-md-3">
                    <input className="form-control" type="text" placeholder="Pre-set Value" id="businessAddress"/>
                  </div>
                  <label for="businessAddress" className="col-md-1 col-form-label">State</label>
                  <div className="col-md-2">
                    <input className="form-control" type="text" placeholder="Pre-set Value" id="businessAddress"/>
                  </div>
                  <label for="businessAddress" className="col-md-1 col-form-label">Zip</label>
                  <div className="col-md-2">
                    <input className="form-control" type="text" placeholder="Pre-set Value" id="businessAddress"/>
                  </div>
              </div>
              <div className="form-group row">
                <label for="priceRange" className="col-md-3 col-form-label">Price Range</label>
                    <div className="col-md-2">
                      <div className="form-check form-check-inline">
                        <label className="form-check-label">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/> $0 - $10
                        </label>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div class="form-check form-check-inline">
                        <label class="form-check-label">
                          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/> $11 - $30
                        </label>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div class="form-check form-check-inline disabled">
                        <label class="form-check-label">
                          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/> $31 - $60
                        </label>
                      </div>
                    </div>
              </div>
              <div className="form-group row">
                <label for="minDeliveryCharge" className="col-md-3 col-form-label">Min Delivery Charge</label>
                  <div className="col-md-8">
                    <div className="input-group">
                      <span className="input-group-addon">$</span>
                      <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)"/>
                      <span className="input-group-addon">.00</span>
                    </div>
                  </div>
              </div>
              <div className="form-group row">
                <label for="prepTime" className="col-md-3 col-form-label">Prep Time</label>
                  <div className="col-md-3">
                    <div className="input-group">
                      <input type="number" className="form-control"/>
                      <span className="input-group-addon">mins</span>
                    </div>
                  </div>
              </div>
              <div className="form-group row">
                <label for="minDeliveryCharge" className="col-md-3 col-form-label">Hours (Mon)</label>
                  <div className="col-md-3">
                      <input type="time" className="form-control"/>   
                  </div>
                  <p className="form-control-static">to</p>
                  <div className="col-md-3">
                      <input type="time" className="form-control"/>   
                  </div>
              </div>
              <div className="form-group row">
                <label for="minDeliveryCharge" className="col-md-3 col-form-label">------ (Tues)</label>
                  <div className="col-md-3">
                      <input type="time" className="form-control"/>   
                  </div>
                  <p className="form-control-static">to</p>
                  <div className="col-md-3">
                      <input type="time" className="form-control"/>   
                  </div>
              </div>
              <div className="form-group row">
                <label for="minDeliveryCharge" className="col-md-3 col-form-label">------ (Wed)</label>
                  <div className="col-md-3">
                      <input type="time" className="form-control"/>   
                  </div>
                  <p className="form-control-static">to</p>
                  <div className="col-md-3">
                      <input type="time" className="form-control"/>   
                  </div>
              </div>
              <div className="form-group row">
                <label for="minDeliveryCharge" className="col-md-3 col-form-label">------ (Thurs)</label>
                  <div className="col-md-3">
                      <input type="time" className="form-control"/>   
                  </div>
                  <p className="form-control-static">to</p>
                  <div className="col-md-3">
                      <input type="time" className="form-control"/>   
                  </div>
              </div>
              <div className="form-group row">
                <label for="minDeliveryCharge" className="col-md-3 col-form-label">------ (Fri)</label>
                  <div className="col-md-3">
                      <input type="time" className="form-control"/>   
                  </div>
                  <p className="form-control-static">to</p>
                  <div className="col-md-3">
                      <input type="time" className="form-control"/>   
                  </div>
              </div>
              <div className="form-group row">
                <label for="minDeliveryCharge" className="col-md-3 col-form-label">------ (Sat)</label>
                  <div className="col-md-3">
                      <input type="time" className="form-control"/>   
                  </div>
                  <p className="form-control-static">to</p>
                  <div className="col-md-3">
                      <input type="time" className="form-control"/>   
                  </div>
              </div>
              <div className="form-group row">
                <label for="minDeliveryCharge" className="col-md-3 col-form-label">------ (Sun)</label>
                  <div className="col-md-3">
                      <input type="time" className="form-control"/>   
                  </div>
                  <p className="form-control-static">to</p>
                  <div className="col-md-3">
                      <input type="time" className="form-control"/>   
                  </div>
              </div>
              <button type="submit" className="btn btn-primary">Update Profile</button>
              <input id="editMenu" className="btn btn-primary" type="button" value="Edit Menu" style={{marginLeft:20}}/>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuProfile;