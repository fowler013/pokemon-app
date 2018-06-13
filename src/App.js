import React, { Component } from 'react';
import './App.css';
import Comment from './components/Comment';
import InfoBar from './components/InfoBar'
//import { Button } from 'reactstrap'

class App extends Component {
  render() {
    return (
      <div className="App bg-secondary">
        <header className="App-header bg-danger">
          <h1 className="App-title">Welcome</h1>
        </header>
        <p className="App-intro bg-dark text-light">
          < InfoBar
              btn1
          />
        </p>

        <Comment
          user={{ name: 'Ash', avatarUrl: 'https://cdn.bulbagarden.net/upload/thumb/5/54/Ash_SM.png/150px-Ash_SM.png' }}
          message='The original trainer'
        />
      </div>
    );
  }
}

export default App;
