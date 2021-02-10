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
 

  module.exports = router;