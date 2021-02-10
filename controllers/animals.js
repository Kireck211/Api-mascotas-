const animals = require('../data/data.json');

function create(animalname,breedname,basecolour,speciesname,animalage,sexname,location) {
    const id = animals.length + 1;
    
    animals.push({id,animalname,breedname,basecolour,speciesname,animalage,sexname,location});
  
    return animals[animals.length-1];
  }
  

  function deleteUser(id) {
    const index = animals.findIndex(animal => animal.id == id);
    const animal = animals.splice(index, index);
    return animal;
  }
  
  function update(id,animalname,breedname,basecolour,speciesname,animalage,sexname,location) {
    try {
      const animal = this.get(id)
      animal.animalname = animalname.length === 0 ? animal.animalname: animalname;
      animal.breedname = breedname.length === 0 ? animal.breedname: breedname;
      animal.basecolour = basecolour.length === 0 ? animal.basecolour: basecolour;
      animal.speciesname = speciesname.length === 0 ? animal.speciesname: speciesname;
      animal.animalage = animalage.length === 0 ? animal.animalage: animalage;
      animal.sexname = sexname.length === 0 ? animal.sexname: sexname;
      animal.location = location.length === 0 ? animal.location: location;

      return {animal, err: null};
    } catch (err) {
      return {err, animal: null}
    }
  }
  
  function get(id) {
    return animals.find(animal => animal.id == id);
  }
  
  module.exports = {
    animals,
    create,
    delete: deleteUser,
    update,
    get
  };