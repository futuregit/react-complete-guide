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


userNameChange = (event) => {
  this.setState({username: event.target.value});
};

deleteNameHandler = (nameIndex) => {
  const persons = this.state.persons;
  persons.splice(nameIndex, 1);
  this.setState({persons:persons})
}

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
          {this.state.persons.map((person, index) => {
            return <Person
            click={() => this.deleteNameHandler(index)}
            name={person.name}
            age={person.age} />
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
