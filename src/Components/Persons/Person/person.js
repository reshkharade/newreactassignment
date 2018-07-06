import React, { Component } from 'react';
import classes from './Person.css';     // used css modules
import { AuthContext } from '../../../Container/App.js';



class Person extends Component {
    render() {

        return (
            <div className={classes.person} >
                <AuthContext.Consumer>{auth =>auth ? <p> I'm authenticated </p> : null}</AuthContext.Consumer>  
                
                {/*accessing function from parent component syntax: event={this.props.property defined into parent} */}
                <p onClick={this.props.click}> I Am {this.props.name} and I am {this.props.age} years old !</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changeInput} value={this.props.name} />   {/*value attribute will shoe current state in input field*/}
            </div>);
    }
};

export default Person;    