import React, { Component } from 'react';
import ErrorBoundary from '../../containers/ErrorBoundary/ErrorBoundary';
import Person from './Person/Person';

class Persons extends Component {
  render() {
    return this.props.persons.map((person, index) => {
    console.log("Inside Persons.js render");
      //Watch putting JSX <ErrorBoundary> on next line. It causes errors.
      //Possibly related to JavaScript ASI(Automatic Semicolon Insertion)
      return <ErrorBoundary key={person.id}>
          <Person
            click={() => this.props.clicked(index)}
            name={person.name}
            age={person.age}
            //Get the event object and pass in the person.id of this item
            changed={(event) => this.props.changed(event, person.id)}/>
        </ErrorBoundary>
    });
  }
}

export default Persons;