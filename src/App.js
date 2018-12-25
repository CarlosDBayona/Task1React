import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    username: 'TheCat'
  }

  onUsernameChangeHandler = (event)=>{
    this.setState({username: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <UserInput change={this.onUsernameChangeHandler} value={this.state.username}></UserInput>
        <UserOutput username={this.state.username}></UserOutput>
      </div>
    );
  }
}

export default App;
