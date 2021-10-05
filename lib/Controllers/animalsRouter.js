// import { Router } from 'express';
const Router = require('express');
// const Animals = require('../Models/Animals.js');
// const animals = require('../utils/animalsData.js');
// const Species = require('../Models/Species.js');
// const species = require('../utils/speciesData.js');


module.exports = Router()

  .post('/', async (req, res, next) => {
    try {
      
      //res.json(on);
      //service

      
      res.send('WORK WORK WORK');
    } catch (error) {
      next(error);
    }
  });
  
  
