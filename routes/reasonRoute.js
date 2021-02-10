const express = require('express');
const Joi = require('joi');
const router = express.Router();

const data = require('../controllers/animals');

//FUNCIONA 
router.get('/', (req, res) => {
    res.send(data);
  });
  //FUNCIONA
  router.get('/:id', (req, res) => {
    const {id} = req.params;
    res.send(data.get(id));
  });

  module.exports = router;