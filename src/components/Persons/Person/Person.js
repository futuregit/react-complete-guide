import React from 'react';
import  classes from './Person.css';

const person = (props) => {
  console.log("Inside Person.js render")
  // const rnd = Math.random();
  //
  // if (rnd > 0.7) {
  //   throw new Error('Something went wrong');
  // }
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>This is the person module and the name chosen is {props.name}</p>
      <p>Wow that was easy {props.age}</p>
      <p>{props.children}</p>
      <input type="test" onChange={props.changed} value={props.name} />
    </div>
  )
};

export default person;
