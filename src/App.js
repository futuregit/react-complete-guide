import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
class App extends Component {
  state = {
    persons: [
      { name: 'Arnold',age: Math.round(Math.random(30)* 40)},
      { name: 'Alex',age: Math.round(Math.random(30)* 40)}
    ],
    username: "Admin",
    showPerson: false
  }

toggleHandler = () => {
  const reveal = this.state.showPerson;
  console.log(reveal)
  this.setState({showPerson: !reveal})
};

powerHandler = () => {
  this.setState({  persons: [
      { name: 'Lou Ferrigino',age: Math.round(Math.random(30)* 40)},
      { name: 'Franco Columbu',age: Math.round(Math.random(30)* 40)}
    ]
  });
};

nameHandler = (event) => {
  this.setState({  persons: [
      { name: 'Sergio Olivia',age: Math.round(Math.random(30)* 40)},
      { name: event.target.value ,age: Math.round(Math.random(30)* 40)}
    ]
  });
};

userNameChange = (event) => {
  this.setState({username: event.target.value});
};

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    const card = {
      backgroundColor: 'gray',
      fontColor: 'inherit',
      border: '3px solid blue',
      padding: '8px'
    }
    return (
      <div className="App">
      <h1>This is my first React</h1>
        <button

          onClick={this.toggleHandler}>Power on</button>

            <div>
              <Person
                name={this.state.persons[0].name}
                age={this.state.persons[0].age} />
              <Person
                name={this.state.persons[1].name}
                age={this.state.persons[1].age}
                click={this.powerHandler}
                change={this.nameHandler}>Who?
              </Person>
              <UserInput
                change={this.userNameChange}
                name={this.state.username}
              />
              <UserOutput
                style={card}
                name={this.state.username}/>
              <UserOutput />
            </div>
      
      </div>
    );
  }
}

export default App;
