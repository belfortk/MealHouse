import axios from "axios";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import React, { Component } from "react";
import RestaurantProfile from "./RestaurantProfile/RestaurantProfile";
import { HashRouter as Router, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import SignupPage from "./SignupPage/SignupPage";
import ResultsList from './ResultsPage/ResultsList';
import EditMenu from './EditMenu/EditMenu';
import ThankYouPage from './ThankYouPage/ThankYouPage'
import AboutUsPage from './AboutUsPage/AboutUsPage'
import ContactUs from './ContactUs/ContactUs'
import CustomerProfile from './CustomerProfile/CustomerProfile'
import Footer from "./Footer";
import OrderPage from "./OrderPage/OrderPage";
import DistanceCalc from "./DistanceCalc/DistanceCalc";
import Checkout from './CheckoutPage/CheckoutPage'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div id='AppBack'>
          <Route path="/signup" component={SignupPage} />
          <Route exact path="/" component={HomePage} />
          <Route path="/results" component={ResultsList} />
          <Route path="/profile/restaurant" component={RestaurantProfile} />
          <Route path="/editMenu" component={EditMenu}/>
          <Route path="/thankyou" component={ThankYouPage}/>
          <Route path="/aboutus" component={AboutUsPage}/>
          <Route path="/contactus" component={ContactUs}/>
          <Route path="/distancecalc" component={DistanceCalc}/>
          <Route path="/profile/customer" component={CustomerProfile}/>
          <Route path="/orderpage" component={OrderPage} />
          <Route path="/checkout" component={Checkout} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
