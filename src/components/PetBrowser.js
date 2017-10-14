import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    const allPets = this.props.pets.map ((pet, index) => {
      return <Pet key={index} onAdoptPet={this.props.onAdoptPet} isAdopted={this.props.adoptedPets.includes(pet.id)} pet={pet}/>
    })
    debugger
    return (
      <div className="ui cards">
        {allPets}
      </div>
    );
  }
}

export default PetBrowser;
