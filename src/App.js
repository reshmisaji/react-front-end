import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { flowers: [] };
  }

  componentDidMount() {
    fetch("/")
      .then(res => res.json())
      .then(res => this.setState({ flowers: res }));
  }

  render() {
    const flowers = this.state.flowers.map(flower => (
      <Flower flower={flower} />
    ));
    return <div>{flowers}</div>;
  }
}

const Flower = function(props) {
  return (
    <div>
      { props.flower.id} : {props.flower.flower_name} :{props.flower.color}
    </div>
  );
};

export default App;
