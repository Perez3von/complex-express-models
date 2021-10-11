const Router = require('express');
// const Animals = require('../Models/Animals.js');
// const animals = require('../utils/animalsData.js');
const Species = require('../Models/Species.js');
// const species = require('../utils/speciesData.js');


module.exports =  Router()

  .post('/', async (req, res, next) => {
    try {
      
      //res.json(on);
      //service
      // console.log('THE SPECIES DATA FILE', species);
      // const inserted_species = await Promise.all(req.body.map(async (specie)  => await Species.insertSpecies(specie)));
      //gooood question above...
      //const inserted_species = await Promise.all(req.body.map((specie) => Species.insertSpecies(specie)));
      
      
      const inserted_specie = await Species.insertSpecies(req.body);

      // console.log(req.body);
      
      res.json(inserted_specie);
    } catch (error) {
      next(error);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      
      //res.json(on);
      //service
      // console.log('THE SPECIES DATA FILE', species);
      // const inserted_species = await Promise.all(req.body.map(async (specie)  => await Species.insertSpecies(specie)));
      //gooood question above...
      //const inserted_species = await Promise.all(req.body.map((specie) => Species.insertSpecies(specie)));
      
      
      const all = await Species.getAll();

      // console.log(req.body);
      
      res.json(all);
    } catch (error) {
      next(error);
    }
  });


