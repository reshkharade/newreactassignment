import React from 'react';
import './Person.css';


const person = (props) => {

  


    return (
    <div className="person"  >  
            {/*accessing function from parent component syntax: event={props.property defined into parent} */}
            <p onClick={props.click}> I Am {props.name} and I am {props.age} years old !</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changeInput} value={props.name} />   {/*value attribute will shoe current state in input field*/}
        </div>);
};

export default person;    