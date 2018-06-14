import React, { Component } from 'react';
import './App.css';
import Comment from './components/Comment';
import InfoBar from './components/InfoBar'
//import { Button } from 'reactstrap'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: ''
    }

    this.items = [
      {value: 'ash'},
      {value:'brock'},
      {value:'misty'},
    ];
  }

  handleInputChange = (value1) => {
    this.setState({ name: value1 });
  }
  handleInputChange = (value2) => {
    this.setState({ name: value2 });
  }

  render() {
    return (
      <div className="App bg-secondary">
        <header className="App-header bg-danger">
          <h1 className="App-title">Welcome New Trainers</h1>
        </header>
        <div className="App-intro bg-dark text-light">
          <div className="InfoBar">

            <div className="input-group">

              <div className="input-group-prepend">
                <button className="input-group-text bg-dark text-light" id="">First and last name</button>
              </div>
              <input placeholder="New" type="text" className="form-control"
                value={this.state.name}
                onChange={(event) => this.handleInputChange(event.target.value1)} />
              <input placeholder="Trainer" type="text" className="form-control"
                value={this.state.name}
                onChange={(event) => this.handleInputChange(event.target.value2)} />

            </div>
          </div>
        </div>

        <Comment
          user={{ name: this.state.name, avatarUrl: 'https://cdn.bulbagarden.net/upload/thumb/5/54/Ash_SM.png/150px-Ash_SM.png' }}
          message='Gotta Catch Them All!'
        />

        <InfoBar 
        items = {this.items}
        />
      </div>
    );
  }
  
}

export default App;
