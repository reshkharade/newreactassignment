import React from 'react';
import classes from './Cockpit.css';


const cockpit = (props) => {

    let assignedClasses = [];
    let btnClass = '';

    if (props.showPerson) {
        btnClass = classes.Red;
    }
    if (props.person.length <= 2) {
        assignedClasses.push(classes.red);  // classes=['red']
    }
    if (props.person.length <= 1) {
        assignedClasses.push(classes.bold);  // classes=['red','bold']
    }



    return (
        <div className={classes.Cockpit}>
            <h1>I am React App</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>

            <button className={btnClass}
                onClick={props.clicked} >Toggle Person</button>
            <button onClick={props.login}>Log in</button>
        </div>
    );

}


export default cockpit;