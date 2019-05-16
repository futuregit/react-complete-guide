import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import UserInput from '../components/UserInput/UserInput';
import UserOutput from '../components/UserOutput/UserOutput';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import withClass from '../hoc/withClass';
import Auxilliary from '../hoc/Auxilliary';
class App extends Component {
  constructor(props){
    super(props);
    console.log("Inside App.js constructor")
  }
  state = {
    persons: [
      { id: 'riker', name: 'Arnold',age: Math.round(Math.random(30)* 40)},
      { id: 'data', name: 'Alex',age: Math.round(Math.random(30)* 40)},
      {id: 'worf', name: 'Lt', age: Math.round(Math.random(30) * 40)}
    ],
    username: "Admin",
    showPerson: false,
    showCockpit: true,
    changeCounter: 0,
    power: 'Power On'
  }

  static getDerivedStateFromProps(props, state){
    console.log("Inside App.js getDerivedStateFromProps", props);
    return state;
  }

  componentDidMount(){
    console.log("Inside App.js componentDidMount");
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log("Inside App.js shouldComponentUpdate");
    return true;
  }
  componentDidUpdate(){
    console.log("Inside App.js componentDidUpdate");
  }
  //Depreciated. Do not use.
  // componentWillMount(){
  //   console.log("Inside App.js componentWillMount");
  // }
  toggleHandler = () => {
    const reveal = this.state.showPerson;
    const powerSwitch = this.state.showPerson? 'Power On' : 'Power Off';
    this.setState({showPerson: !reveal, power: powerSwitch})
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
      this.setState((prevState, props) => {
        return {
          persons: persons,
          changeCounter: prevState.changeCounter + 1
        }
        });

  };

  userNameChange = (event) => {
    this.setState({username: event.target.value});
  };

  deleteNameHandler = (nameIndex) => {
    //This is the same as the slice method, but it is more modern Es6 approach.
    //It uses ES6 spread operator.
    const persons = [...this.state.persons]
    //Use this as the original object is not mutated.
    //const persons = this.state.persons.slice();
    //Below mutate orginal object. Avoid this.
    // const persons = this.state.persons;
    persons.splice(nameIndex, 1);
    this.setState({persons:persons})
  }

  render() {
    console.log("Inside App.js render");
    let persons = null;
    if (this.state.showPerson){
      //Store JSX into persons variable
      persons = <Persons
          persons={this.state.persons}
          clicked={this.deleteNameHandler}
          changed={this.nameChangeHandler}  />;
    }

    return (
      <Auxilliary>
      <button
        onClick={()=> {
          this.setState({showCockpit: false});
        }}
        >
        Remove Cockpit</button>
        {this.state.showCockpit ? <Cockpit
          title={this.props.appTitle}
          showPerson={this.state.showPerson}
          personsLength={this.state.persons.length}
          powerStatus={this.state.power}
          clicked={this.toggleHandler}/>
        : null }
        {persons}
      </Auxilliary>
    );
  }
}

export default withClass(App, classes.App);
