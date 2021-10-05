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
      // console.log('THE SPECIES DATA FILE', species);
      const inserted_species = await Promise.all(req.body.map(async (specie)  => await Species.insertSpecies(specie)));
      //gooood question above...
      // const inserted_species = await Promise.all(req.body.map((specie) => Species.insertSpecies(specie)));
     

      console.log(req.body);
      
      res.json(inserted_species);
    } catch (error) {
      next(error);
    }
  });