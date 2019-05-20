import React, { PureComponent } from 'react';
import ErrorBoundary from '../../containers/ErrorBoundary/ErrorBoundary';
import Person from './Person/Person';

class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state){
  //   console.log("Inside Persons.js getDerivedStateFromProps", props);
  //   return state;
  // }
  // componentWillReceiveProps(props){
  //   console.log("Inside Persons.js componentWillReceiveProps", props)
  // }
  // shouldComponentUpdate(nextProps,nextState){
  //   console.log("Inside Persons.js shouldComponentUpdate");
  //   // if(nextProps.persons !== this.props.persons){
  //   //   return true;
  //   // } else {
  //   //   return false
  //   // }
  //   return true;
  // }
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("Inside Persons.js getSnapShotBeforeUpdate");
    return {message: 'Snapshot!'};
  }
  componentDidUpdate(prevProps, prevState, snapshot){
    console.log("Inside Persons.js componentDidUpdate");
    console.log(snapshot);
  }

  componentWillUnmount(){
    console.log("Inside Persons.js componentWillUnmount");
  }
  render() {
    console.log("Inside Persons.js render");
    return this.props.persons.map((person, index) => {
      //Watch putting JSX <ErrorBoundary> on next line. It causes errors.
      //Possibly related to JavaScript ASI(Automatic Semicolon Insertion)
      return <ErrorBoundary key={person.id}>
          <Person
            click={() => this.props.clicked(index)}
            name={person.name}
            age={person.age}
            //Get the event object and pass in the person.id of this item
            changed={(event) => this.props.changed(event, person.id)}
            isAuth={this.props.isAuthenticated}
          />
        </ErrorBoundary>
    });
  }
}

export default Persons;