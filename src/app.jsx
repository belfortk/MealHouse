import axios from "axios";
import Navbar from "./Navbar";
import LoginModal from './LoginModal.jsx';
import SearchBar from "./SearchBar";
import React, { Component } from 'react';
import MenuProfile from './MenuProfile';

import SignupPage from './SignupPage/SignupPage'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
   
  }

  }


  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <Navbar />
          <LoginModal/>
        </header>

      <SearchBar />
        <div className="container">
        {/* <SignupPage /> */}

        </div>

      </div>
    );
  }
}

export default App;
