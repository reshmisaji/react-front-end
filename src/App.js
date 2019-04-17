import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state={flowers:[]}
  }

  componentDidMount(){
    fetch('/flowers').then(res=>res.json()).then(res=>this.setState({flowers:res}))
  }

  render() {
    return (
     <div>{this.state}</div>
    );
  }
}

export default App;
