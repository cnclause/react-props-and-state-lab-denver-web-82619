import React, {Component} from 'react'
import Pet from './Pet'


export default class PetBrowser extends Component {
  
  render() {

    console.log("arrayofpets", this.props.pets)

    const petsArray = this.props.pets
    ? this.props.pets.map(pet => {
      console.log('inside pet'),
      <Pet pet={pet} key={pet.id}/>
      }) : null
        

    return (
    <div className="ui cards">
        {console.log("here")}
       {petsArray, console.log("inside array pets")} 
       {console.log("below")}
    </div>
    )
  } 
}

