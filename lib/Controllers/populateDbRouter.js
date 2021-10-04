const Router = require('express');
// const Animals = require('../Models/Animals.js');
// const animals = require('../utils/animalsData.js');
const Species = require('../Models/Species.js');
const species = require('../utils/speciesData.js');


module.exports =  Router()

  .post('/', async (req, res, next) => {
    try {
      
      //res.json(on);
      //service

      const inserted_species = await Promise.all(species.map(async (specie)  => await Species.insertSpecies(specie)));
      res.json(inserted_species);
    } catch (error) {
      next(error);
    }
  });