import React from 'react';
import  './Person.css';

const person = (props) => {
  return (
    <div className="Person">
      <div onClick={props.click}>This is the person module and the name chosen is {props.name}</div>
      <div>Wow that was easy {props.age}</div>
      <div>{props.children}</div>
      <input type="test" onChange={props.change} value={props.name} />
    </div>
  )
};

export default person;
