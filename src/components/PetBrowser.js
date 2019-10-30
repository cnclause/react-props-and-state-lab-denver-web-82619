import React, {Component} from 'react'
import Pet from './Pet'


export default class PetBrowser extends Component {
  
  render() {

    console.log("arrayofpets", this.props.pets)

    const petCards = this.props.pets.map(pet => {
      console.log('inside pet'),
      <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet}/>
    }) 
        

    return (
    <div className="ui cards">
        {console.log("here")}
       {petCards, console.log("inside array pets")} 
       {console.log("below")}
    </div>
    )
  } 
}

