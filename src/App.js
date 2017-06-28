import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Api from "./Api";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      originalValue: 0,
      answer: 0
    };
  }

  componentDidMount() {
    this.newOriginal();
    this.loadData();
  }

  newOriginal = () => {
    let randomOriginal = Math.ceil(Math.random() * 10);
    this.setState({originalValue: randomOriginal});
  }

  loadData = () => {
    let { originalValue } = this.state;
    Api.requestPost(originalValue).then(data => {
      this.setState({answer: data})
    });
  }

  refresh = () => {
    console.log("Refreshing page");
    this.newOriginal();
    window.location.reload();
  }

  render() {
    let { originalValue } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Squared of { originalValue } is: { JSON.stringify(this.state.answer) }
        </p>
        <button type="button" onClick={this.refresh}>New Original</button>
        <button type="button" onClick={this.loadData}>Load Result</button>
      </div>
    );
  }
}

export default App;
