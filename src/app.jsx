import axios from "axios";
import Navbar from "./Navbar";
import LoginModal from './LoginModal.jsx';
import React, { Component } from 'react';

import SignupPage from './SignupPage/SignupPage'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
   
  }

  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
          <LoginModal/>
        </header>

        <div className="container">
        {/* <SignupPage /> */}

        </div>

      </div>
    );
  }
}

export default App;
