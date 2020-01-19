import React, { Component } from 'react';
import './App.css';
import UserOutput from './components/userOutput/UserOutput';
import UserInput from './containers/userInput/UserInput';

class App extends Component {
  state = {
    username: 'adam'
  };
  changeUsername = (event) => {
    this.setState({ username: event.target.value });
  };
  render() {
    return (
      <div className="App">
        <UserInput
          change={this.changeUsername}
          username={this.state.username}
        />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
