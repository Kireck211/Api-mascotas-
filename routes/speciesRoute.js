const express = require('express');
const { array } = require('joi');
const Joi = require('joi');
const router = express.Router();

const data = require('../controllers/animals');



router.get('/', (req, res) => {
    let animals =  data.animals
    let species = animals.map( animal =>   animal.speciesname);
     
    let arr = [...species]


    res.send([...new Set(arr)]);

  });

  router.get('/:id', (req, res) => {
    const {id} = req.params;
    res.send(data.get(id));
  });

  module.exports = router;