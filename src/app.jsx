import React from 'react';
import axios from 'axios';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      customer: []
    }
  }

  componentDidMount(){
    axios.get('/api/Customers/')
    .then(res => this.setState(
      {
        customer: res.data[0].name
      }
    )
    )
  }
  render(){
    return(
      <p> {this.state.customer }</p>
    );
  }
}

export default App;
