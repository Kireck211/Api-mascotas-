const express = require('express');
const Joi = require('joi');
const router = express.Router();

const data = require('../controllers/animals');

const schema = Joi.object({

  animalname:Joi.string().min(3).required(),
  breedname:Joi.string().min(1).required(),
  basecolour: Joi.string().min(3).required(),
  speciesname:Joi.string().min(3).required(),
  animalage: Joi.string().min(3).required(),
  sexname:Joi.string().min(3).required(),
  location:Joi.string().min(3).required()
});


router.get('/', (req, res) => {
  res.send(data);
});

router.get('/:id', (req, res) => {
  const {id} = req.params;
  res.send(data.get(id));
});

router.post('/', (req, res) => {
  const {animalname,breedname,basecolour,speciesname,animalage,sexname,location} = req.body;

  const result = schema.validate({animalname,breedname,basecolour,speciesname,animalage,sexname,location});
  if (result.error) return res.status(400).send(result.error.details[0].message);

  const animal = data.create(animalname,breedname,basecolour,speciesname,animalage,sexname,location);

  res.send(animal);
});



router.put('/:id', (req, res, next) => {
  const {id} = req.params;
  const {
        animalname= '',breedname= '',
        basecolour= '',speciesname= '',
        animalage= '',sexname= '',location= ''} = req.body;

  const {animal, err} = data.update(id, animalname,breedname,basecolour,speciesname,animalage,sexname,location);
  if (err) return next();

  res.send(animal);
});
 
router.delete('/:id', (req, res) => {
  const {id} = req.params;

  const animal = data.delete(id);

  res.send(animal);
});

module.exports = router;