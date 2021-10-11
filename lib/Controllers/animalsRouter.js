// import { Router } from 'express';
const Router = require('express');
const Animals = require('../Models/Animals.js');
// const animals = require('../utils/animalsData.js');
// const Species = require('../Models/Species.js');
// const species = require('../utils/speciesData.js');


module.exports = Router()

  .post('/', async (req, res, next) => {
    try {
      
    
      const animal = await Animals.insertAnimals(req.body);

      
      res.send(animal);
    } catch (error) {
      next(error);
    }
  })
  
  
  .get('/', async (req, res, next) => {
    try {
      
    
      const animals = await Animals.getAll();

      
      res.send(animals);
    } catch (error) {
      next(error);
    }
  })
  
  
  
  .get('/species', async (req, res, next) => {
    try {
      
    
      const animals = await Animals.getAllWithSpecies();

      
      res.send(animals);
    } catch (error) {
      next(error);
    }
  })
  
  
  .put('/', async (req, res, next) => {
    try {
      
    
      const animals = await Animals.update(req.body);

      
      res.send(animals);
    } catch (error) {
      next(error);
    }
  });
  
  
