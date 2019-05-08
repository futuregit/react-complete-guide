import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
  // let classes = ['red', 'bold'].join(' ');
  const assignedClasses =[];
  let btnClass = '';
  if(props.showPerson){
      btnClass = classes.Red;
  }
  if(props.persons.length <= 2){
    assignedClasses.push(classes.red);
  }
  if(props.persons.length <= 1){
    assignedClasses.push(classes.bold);
  }
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is working alright</p>
      <button
        className={btnClass}
        onClick={props.clicked}>{props.powerStatus}</button>
    </div>
  );
}

export default cockpit;