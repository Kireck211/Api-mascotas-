const express = require('express');
const Joi = require('joi');
const router = express.Router();

const data = require('../controllers/animals');


router.get('/', (req, res) => {
    let animals =  data.animals
    let reason = animals.map( animal =>   animal.intakereason);

    
  });
  //FUNCIONA
  router.get('/:id', (req, res) => {
    const {id} = req.params;
    res.send(data.get(id));
  });

  module.exports = router;