import axios from "axios";
import Navbar from "./Navbar";
import LoginModal from "./LoginModal.jsx";
import SearchBar from "./SearchBar";
import React, { Component } from "react";
import MenuProfile from "./MenuProfile";
import { HashRouter as Router, Route } from "react-router-dom";
import HomePage from "./HomePage";
import SignupPage from "./SignupPage/SignupPage";
import ResultsList from './ResultsPage/ResultsList';
import EditMenu from './EditMenu';

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
          <Route path="/menuProfile" component={MenuProfile} />
          <Route path="/editMenu" component={EditMenu}/>
        </div>
      </Router>
    );
  }
}

export default App;
