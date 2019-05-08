import React from 'react';
import ErrorBoundary from '../../containers/ErrorBoundary/ErrorBoundary';
import Person from './Person/Person';

const persons = (props) => props.persons.map((person, index) => {
  console.log("Inside Persons.js render");
    //Watch putting JSX <ErrorBoundary> on next line. It causes errors.
    //Possibly related to JavaScript ASI(Automatic Semicolon Insertion)
    return <ErrorBoundary key={person.id}>
        <Person
          click={() => props.clicked(index)}
          name={person.name}
          age={person.age}
          //Get the event object and pass in the person.id of this item
          changed={(event) => props.changed(event, person.id)}/>
      </ErrorBoundary>
  });

export default persons;