import React,{Component} from 'react';
import Person from './Person/person.js';

class Persons extends Component{
    render (){
      return this.props.person.map((person, index) =>  // eliminate {} brackets as we hv to one statement to execute & dont confuse  as jsx written inside map
      {
          return <Person
              name={person.name}
              age={person.age}
              key={person.id}
              click={() => this.props.clicked(index)}
              authenticated={this.props.isAuthenticated}
              changeInput={(event) => this.props.changed(event, person.id)} />
      });
   }
}
 

export default Persons;