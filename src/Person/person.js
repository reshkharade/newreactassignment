import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {

    const responsiveStyle = {
        '@media(min-width:500px)': {
            width: '650px'
        }

    };


    return (
    <div className="person" style={responsiveStyle} >   {/*style attribute will override person class */}
            {/*accessing function from parent component syntax: event={props.property defined into parent} */}
            <p onClick={props.click}> I Am {props.name} and I am {props.age} years old !</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changeInput} value={props.name} />   {/*value attribute will shoe current state in input field*/}
        </div>);
};

export default Radium(person);    