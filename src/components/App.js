import React, {Component} from 'react'
import Filters from './Filters'
import PetBrowser from './PetBrowser'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  } 

  onAdoptPet = () => {
    console.log("hi")
  }
componentDidMount(){
  this.fetchPets()

}

fetchPets = () => {
  fetch('/api/pets')
    .then(response => response.json())
    .then(allpets => this.setState({
      pets: allpets
    }))
}
  


  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onFindPetsClick={this.fetchPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser 
              pets={this.state.pets} />
         
            </div>
          </div>
        </div>
      </div>
    )
  }
}

