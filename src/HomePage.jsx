import React from "react";
import Navbar from "./Navbar";
import LoginModal from "./LoginModal.jsx";
import SearchBar from "./SearchBar";

class HomePage extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
          <LoginModal />
        </header>

        <SearchBar />
        <div className="container">{/* <SignupPage /> */}</div>
      </div>
    );
  }
}

export default HomePage;
