import React from 'react';

const userOutput = (props) => {
  return (
    <div style={props.style}>
    <p>From the userOutput file</p>
    <p>The username is {props.name} </p>
    </div>
  )
};

export default userOutput;