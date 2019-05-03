import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
class App extends Component {
  state = {
    persons: [
      { id: 'riker', name: 'Arnold',age: Math.round(Math.random(30)* 40)},
      { id: 'data', name: 'Alex',age: Math.round(Math.random(30)* 40)},
      {id: 'worf', name: 'Lt', age: Math.round(Math.random(30) * 40)}
    ],
    username: "Admin",
    showPerson: false
  }

toggleHandler = () => {
  const reveal = this.state.showPerson;
  console.log(reveal)
  this.setState({showPerson: !reveal})
};

powerHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    //An alternative to copying an object without reference.
    //const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
};


userNameChange = (event) => {
  this.setState({username: event.target.value});
};

deleteNameHandler = (nameIndex) => {
  //This is the same as the slice method, but it is more modern Es6 approach.
  // It uses ES6 spread operator.
  const persons = [...this.state.persons]
  //Use this as the original is not mutated.
  //const persons = this.state.persons.slice();
  //Below mutate orginal object. Avoid this.
  // const persons = this.state.persons;
  persons.splice(nameIndex, 1);
  this.setState({persons:persons})
}

  render() {
    // Describing how divs should appear as cards.
    const card = {
      backgroundColor: 'gray',
      fontColor: 'inherit',
      border: '3px solid blue',
      padding: '8px'
    };

    const style =  {
      backgroundColor: 'green',
      border: 'none',
      color: 'white',
      padding: '15px 32px',
      display: 'inline-block',
      cursor: 'pointer'
  };
    let persons = null;

    if (this.state.showPerson){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
            click={() => this.deleteNameHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.powerHandler(event, person.id)}/>
          })}
        </div>
      );

      style.backgroundColor = 'red';

    }

    return (
      <div className="App">
      <h1>This is my first React</h1>
        <button
          style={style}
          onClick={this.toggleHandler}>Power on</button>
        {persons}
      </div>
    );
  }
}

export default App;
