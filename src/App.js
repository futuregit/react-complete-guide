import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
class App extends Component {
  state = {
    persons: [
      { id: 'riker', name: 'Arnold',age: Math.round(Math.random(30)* 40)},
      { id: 'data', name: 'Alex',age: Math.round(Math.random(30)* 40)},
      {id: 'worf', name: 'Lt', age: Math.round(Math.random(30) * 40)}
    ],
    username: "Admin",
    showPerson: false,
    power: 'Power On'
  }

toggleHandler = () => {
  const reveal = this.state.showPerson;
  console.log(reveal)
  this.setState({showPerson: !reveal})
};

//Function to change displayed name
nameChangeHandler = (event, id) => {
    //Get the index of the persons array and assign to personIndex
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    //Copy this one array to person
    const person = {
      ...this.state.persons[personIndex]
    }

    //An alternative to copying an object without reference.
    //const person = Object.assign({}, this.state.persons[personIndex]);
    //Set the new name to person property name
    person.name = event.target.value;

    //Copy current state to constant persons and overwrite contant key with person
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
};


userNameChange = (event) => {
  this.setState({username: event.target.value});
};

deleteNameHandler = (nameIndex) => {
  //This is the same as the slice method, but it is more modern Es6 approach.
  //It uses ES6 spread operator.
  const persons = [...this.state.persons]
  //Use this as the original is not mutated.
  //const persons = this.state.persons.slice();
  //Below mutate orginal object. Avoid this.
  // const persons = this.state.persons;
  persons.splice(nameIndex, 1);
  this.setState({persons:persons})
}

  render() {

    let persons = null;
    let btnClass = '';
    let powerStatus = this.state.power;
    if (this.state.showPerson){
      //Store JSX into persons variable
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            //Watch putting JSX <ErrorBoundary> on next line. It causes errors.
            //Possibly related to JavaScript ASI(Automatic Semicolon Insertion)
            return <ErrorBoundary key={person.id}>
                <Person
                  click={() => this.deleteNameHandler(index)}
                  name={person.name}
                  age={person.age}
                  //Get the event object and pass in the person.id of this item
                  changed={(event) => this.nameChangeHandler(event, person.id)}/>
              </ErrorBoundary>
          })}
        </div>
      );
      btnClass = classes.Red
      powerStatus = 'Power Off';

    }

    // let classes = ['red', 'bold'].join(' ');
    const assignedClasses =[];
    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }
    return (
      <div className={classes.App}>
        <h1>This is My First React App</h1>
        <p className={assignedClasses.join(' ')}>This is working alright</p>
          <button
            className={btnClass}
            onClick={this.toggleHandler}>{powerStatus}</button>
        {persons}
      </div>
    );
  }
}

export default App;
