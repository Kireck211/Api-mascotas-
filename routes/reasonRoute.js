const express = require('express');
const Joi = require('joi');
const router = express.Router();

const data = require('../controllers/animals');


router.get('/', (req, res) => {
    let animals =  data.animals
    let reason = animals.map( animal =>   animal.intakereason); 
    let arr = [...reason]

    res.send([...new Set(arr)]);


  });
  

  module.exports = router;