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
    const card = {
      backgroundColor: 'gray',
      fontColor: 'inherit',
      border: '3px solid blue',
      padding: '8px'
    };

    let persons = null;

    if (this.state.showPerson){
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person name={person.name} age={person.age} />
          })}
        </div>
      )
    }

    return (
      <div className="App">
      <h1>This is my first React</h1>
        <button
          onClick={this.toggleHandler}>Power on</button>
        {persons}
      </div>
    );
  }
}

export default App;
