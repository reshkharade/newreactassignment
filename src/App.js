import React, { Component } from 'react';
import './App.css';
import Person from './Person/person.js';
import Radium, { StyleRoot } from 'radium';

class App extends Component {
  state = {
    person: [
      { id: 'vgd1', name: "Reshma", age: 26 },
      { id: 'bef3', name: "Satish", age: 27 },
      { id: 'nbf6', name: "Jaya", age: 26 }
    ],
    otherstate: 'somevalue',
    showPerson: false
  }

  //switchNameHandler = (newName) => {

  //console.log('was clicked');  
  //DO NOT USE : this.state.person[0].name="Karishma"       bcz react will not understand  that state has changed  
  // to avoid this keyword conflict always use arrow function

  //*to render the chnages at the runtime ,used setstate method *//


  /*Two Way Data Binding*/

  nameChangedhandler = (event, id) => {
    const changeInputIndex = this.state.person.findIndex((p) => {
      return p.id === id
    });
    const changedPerson = { ...this.state.person[changeInputIndex] };
    changedPerson.name = event.target.value;
    const persons = [...this.state.person];
    persons[changeInputIndex] = changedPerson;

    this.setState({
      person: persons

    });
  }

  togglePersonHandler = () => {
    const doesShowPerson = this.state.showPerson;
    this.setState({
      showPerson: !doesShowPerson
    })

  }

  deletePersonHandler = (personIndex) => {
    // const person=this.state.person;   // will not create new array as array are reference type 
    // const person=this.state.person.slice(); // will create new copy of exixting array OR
    const person = [...this.state.person];   // u can use ES6 spread operator to create new copy of existing array
    person.splice(personIndex, 1);
    this.setState({
      person: person
    });
  }

  render() {

    // INLINE STYING TO BUTTON

    const buttonStyle = {
      backgroundColor: 'green',        // make any variable of object type, property of css & its value is string
      color: 'white',
      border: '2px solid grey',
      padding: '8px',
      font: 'inherit',
      cursor: 'pointer',
      boxShadow: '2px 3px 3px grey',
      ':hover': {
        backgroundColor: 'pink',
        color: 'black'
      }
    }

    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div>
          {/* iterate throgh array component using map method ES6 instead of for loop in react jsx*/}
          {
            this.state.person.map((person, index) => {
              return <Person name={person.name} age={person.age} key={person.id}
                click={() => this.deletePersonHandler(index)}
                changeInput={(event) => this.nameChangedhandler(event, person.id)} />
            })
          }



          {/* <Person
            name={this.state.person[0].name}
            age={this.state.person[0].age} />

          <Person
            name={this.state.person[1].name}
            age={this.state.person[1].age}
            //passing switchNameHandler method to chid syntax: propertyname={function Name}
            click={this.switchNameHandler.bind(this, "Kareena")} changeInput={this.nameChangedhandler}>He is my hubby.     {/*here we can use anonymous function instead of bind method*/}
          {/* </Person>

          <Person
            name={this.state.person[2].name}
            age={this.state.person[2].age} >She is my best friend
         </Person>
         */}

        </div>
      );

      buttonStyle.backgroundColor = 'red';
      buttonStyle[':hover'] = {
        backgroundColor: 'yellow',
        color: 'red'

      }
    }

    let classes = [];
    if (this.state.person.length <= 2) {
      classes.push('red');  // classes=['red']
    }
    if (this.state.person.length <= 1) {
      classes.push('bold');  // classes=['red','bold']
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>I am React App</h1>
          <p className={classes.join(' ')}>This is really working</p>
          {/*<button onClick={this.switchNameHandler.bind(this,"karishma!!")}>Switch Name</button>  OR U CAN USE anonymous function */}
          <button style={buttonStyle}
        /*onClick={() => this.switchNameHandler('Kaitrina!!')}*/ onClick={this.togglePersonHandler} >Toggle Person</button>

          {/*IF ELSE CONDITION IN JSX by using Ternory Operator to show Person Component */}

          {/*Person Data showed using (javascript-way)IF ELSE CONDITION in render function*/}

          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
