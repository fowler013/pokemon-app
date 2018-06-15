import React, { Component } from 'react';
import './App.css';
import Comment from './components/Comment';
import InfoBar from './components/InfoBar'
//import { Button } from 'reactstrap'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name1: '', 
      name2: '',
      id: 2,
      items: []
    }

    // this.id = 2

    this.state.items = [
      {name1: 'ash',name2: "catchem", id: 0},
      {name1:'brock',name2: "somebody", id: 1},
      {name1:'misty',name2: "cassie", id: 2}
    ];
  }

  handleFirstName = (value1) => {
    this.setState({ name1: value1.target.value });
  }
  handleLastName = (value2) => {
    this.setState({ name2: value2.target.value });
  }
handleClick = () => {
  // console.log('click here')
  let name1 = this.state.name1
  let name2 = this.state.name2
 

  let box = {
    name1,
    name2
  }
  let trainer = [...this.state.items, box ];

  this.setState({
items: trainer,
name1: '',
name2: ''
  })
  console.log(trainer)
  // document.getElementById('getfirstname').value = ''
  // document.getElementById('getlastname').value = ''
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
                <button onClick={(event) => {this.handleClick()}} className="input-group-text bg-dark text-light" id="">Add New Trainer</button>
              </div>
              <input id='getfirstname' placeholder="First Name" type="text" className="form-control"
                value={this.state.name1}
                onChange={ this.handleFirstName} />
              <input id='getlastname' placeholder="Last Name" type="text" className="form-control"
                value={this.state.name2}
                onChange={this.handleLastName} />

            </div>
          </div>
        </div>

        <Comment
          user={{ name: this.state.name, avatarUrl: 'https://cdn.bulbagarden.net/upload/thumb/5/54/Ash_SM.png/150px-Ash_SM.png' }}
          message='Gotta Catch Them All!'
        />

        <InfoBar 
        items = {this.state.items}
        />
      </div>
    );
  }
  
}

export default App;
