import React from "react";
import axios from "axios";
import Navbar from "./Navbar";
import LoginModal from './LoginModal.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: []
    };
  }

  componentDidMount() {
    axios.get("/api/Customers/").then(res =>
      this.setState({
        customer: res.data[0].name
      })
    );
  }
  render() {
    return (
      <div className="container">
        <Navbar />
        <LoginModal/>
      </div>
    );
  }
}

export default App;
