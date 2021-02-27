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
  res.send(data.animals);
});

router.get('/:id', (req, res) => {
  const {id} = req.params;
  res.send(data.get(id));
});

router.post('/', (req, res) => {
  const result = schema.validate(req.body);
  if (result.error) return res.status(400).send(result.error.details[0].message);

  const animal = data.create(id, req.body);

  res.send(animal);
});



router.put('/:id', (req, res) => {
  const {id} = req.params;
  const result = schema.validate(req.body);
  if (result.error) return res.status(400).send(result.error.details[0].message);
  // if (err) return next(); NOTE: if you call next() without arguments express would think it is a successful call, it should be next(err)
  const animal = data.update(id, req.body);

  res.send(animal);
});
 
router.delete('/:id', (req, res) => {
  const {id} = req.params;

  const animal = data.delete(id);

  res.send(animal);
});

module.exports = router;