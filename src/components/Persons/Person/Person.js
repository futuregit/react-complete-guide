import React, { Component } from 'react';
import PropTypes from 'prop-types';
import  classes from './Person.css';
import Auxilliary from '../../../hoc/Auxilliary';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
  constructor(props){
    super(props);
    this.inputElementRef = React.createRef();
  }
  componentDidMount(){
    console.log("Inside Person.js componentDidMount");
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
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
      <Auxilliary>
        <AuthContext.Consumer>
          {context =>
            context.authenticated ? <p>Authenticated</p> : <p> Please Login </p>
          }
        </AuthContext.Consumer>
        <p onClick={this.props.click}>
          This is the person module and the name chosen is {this.props.name}
        </p>
        <p>Wow that was easy {this.props.age}</p>
        <p>{this.props.children}</p>
        <input
        // ref={(inputEl) => {this.inputElement = inputEl}}
        ref={this.inputElementRef}
        type="text"
        onChange={this.props.changed}
        value={this.props.name} />
      </Auxilliary>
    );
  }

};
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};
export default withClass(Person, classes.Person);
