const animals = require('../data/data.json');
const {defaultIfEmpty} = require('../utils');

function create(animal) {
    const id = animals.length + 1;
    
    animals.push({id,...animal});
  
    return animals[animals.length-1];
  }
  

  function deleteUser(id) {
    const index = animals.findIndex(animal => animal.id == id);
    const animal = animals.splice(index, index);
    return animal;
  }
  
  function update(id, newAnimalProperties) {
      const animal = this.get(id)
      Object.keys(newAnimalProperties).forEach(function(property) {
        animal[property] = defaultIfEmpty(newAnimalProperties[property], animal[property]);
      });
      return animal;
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