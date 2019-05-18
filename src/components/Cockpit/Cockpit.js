import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
  const toggleBtnRef = useRef(null);

  useEffect(()=> {
    console.log("Inside Cockpit useEffect");
    //Http request...
    // const timer = setTimeout(()=> {
    //   alert('Saved data to the cloud')
    // }, 1000);
    toggleBtnRef.current.click();
    return () => {
      // clearTimeout(timer)
      console.log("Inside Cockpit cleanup work")
    }
  },[])

  useEffect(()=> {
    console.log("Inside Cockpit 2nd useEffect");
    return () => {
      console.log("Inside Cockpit 2nd cleanup work")
    }
  })
  // let classes = ['red', 'bold'].join(' ');
  const assignedClasses =[];
  let btnClass = '';
  if(props.showPerson){
      btnClass = classes.Red;
  }
  if(props.personsLength <= 2){
    assignedClasses.push(classes.red);
  }
  if(props.personsLength <= 1){
    assignedClasses.push(classes.bold);
  }
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is working alright</p>
      <button
        ref={toggleBtnRef}
        className={btnClass}
        onClick={props.clicked}>{props.powerStatus}</button>
        <button
          onClick={props.login}
        >Login</button>
    </div>
  );
}

export default React.memo(cockpit);