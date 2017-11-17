import React from "react";
import Navbar from "../Navbar";
import SearchBar from "../SearchBar";
// import Footer from "../Footer";
import House from "../HouseAnimation"
import { connect } from 'react-redux';
import { cookieInput } from '../Cookie/CookieAction';
import { createCookie } from '../Cookie/CookieFunction';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="HomePage">
        <header className="App-header">
          <Navbar />
          
         
        </header>
        
        <House />
        <SearchBar />
        <div className="container">{/* <SignupPage /> */}</div>

      </div>
    );
  }
}

export default HomePage;
