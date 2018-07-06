import React, { Component } from 'react';
import classes from './App.css';              //classes is object contaiing all classes which written in app.css file
import Persons from '../Components/Persons/Persons.js';
import Cockpit from '../Components/Cockpit/Cockpit.js';
import WithClass from '../Hoc/WithClass.js';

 export const AuthContext = React.createContext(false);


class App extends Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      person: [
        { id: 'vgd1', name: "Reshma", age: 26 },
        { id: 'bef3', name: "Satish", age: 27 },
        { id: 'nbf6', name: "Jaya", age: 26 }
      ],
      otherstate: 'somevalue',
      showPerson: false,
      authenticated: false
    };
  }

  componentWillMount() {
    console.log(this.props.title);
  }
  // state = {
  //   person: [
  //     { id: 'vgd1', name: "Reshma", age: 26 },
  //     { id: 'bef3', name: "Satish", age: 27 },
  //     { id: 'nbf6', name: "Jaya", age: 26 }
  //   ],
  //   otherstate: 'somevalue',
  //   showPerson: false
  // }

  //switchNameHandler = (newName) => {

  //console.log('was clicked');  
  //DO NOT USE : this.state.person[0].name="Karishma"       bcz react will not understand  that state has changed  
  // to avoid this keyword conflict  always use arrow function

  //*to render the chnages at the runtime ,used setstate method *// }


  /*Two Way Data Binding*/

  nameChangedHandler = (event, id) => {
    const changeInputIndex = this.state.person.findIndex((p) => {
      return p.id === id;
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

  loginHandler = () => {
    this.setState({
      authenticated: true,
    })

  }



  render() {
    console.log("render life-cycle hooks checked");

    // INLINE STYING TO BUTTON

    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div>
          <Persons
            person={this.state.person}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
            // isAuthenticated={this.state.authenticated} 
            />




          {/* iterate throgh array component using map method ES6 instead of for loop in react jsx */}
          {/* { 
            this.state.person.map((person, index) => {
              return <Person name={person.name} age={person.age} key={person.id}
                click={() => this.deletePersonHandler(index)}
                changeInput={(event) => this.nameChangedhandler(event, person.id)} />
            })
          }
          */}


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
    }

    return (

      <WithClass classes={classes.App}>  {/* used css module*/}  {/* use of HOC to avoid un-necessary html elements*/}

        <Cockpit

          person={this.state.person}
          showPerson={this.state.showPerson}
          clicked={this.togglePersonHandler}
          login={this.loginHandler}/>
        {/*IF ELSE CONDITION IN JSX by using Ternory Operator to show Person Component */}

        {/*Person Data showed using (javascript-way)IF ELSE CONDITION in render function*/}
        
        <AuthContext.Provider value={this.state.authenticated} >
          {persons}
        </AuthContext.Provider>

      </WithClass>

    );
  }
}

export default App;
