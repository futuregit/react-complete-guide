import React from 'react';
import Radium from 'radium';
import  './Person.css';

const person = (props) => {
  return (
    <div className="Person" >
      <p onClick={props.click}>This is the person module and the name chosen is {props.name}</p>
      <p>Wow that was easy {props.age}</p>
      <p>{props.children}</p>
      <input type="test" onChange={props.changed} value={props.name} />
    </div>
  )
};

export default Radium(person);
