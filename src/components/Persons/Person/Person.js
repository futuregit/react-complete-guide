import React, { Component } from 'react';
import  classes from './Person.css';


class Person extends Component {
  componentDidMount(){
    console.log("Inside Person.js componentDidMount");
  }
  componentDidUpdate(){
    console.log("Inside Person.js componentDidUpdate");
  }


  render(){
    console.log("Inside Person.js render")
    // const rnd = Math.random();
    //
    // if (rnd > 0.7) {
    //   throw new Error('Something went wrong');
    // }
    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}>This is the person module and the name chosen is {this.props.name}</p>
        <p>Wow that was easy {this.props.age}</p>
        <p>{this.props.children}</p>
        <input type="test" onChange={this.props.changed} value={this.props.name} />
      </div>
    )
  }

};

export default Person;
