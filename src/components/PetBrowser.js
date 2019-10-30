import React, {Component} from 'react'
import Pet from './Pet'


export default class PetBrowser extends Component {

    petCards = () =>{
      return this.props.pets.map(pet => <Pet {...pet}/>)
    }
  
        
    render(){
      return (
        <div className="ui cards">
           {this.petCards()} 
        </div>
        )
      } 
    }

    
   

