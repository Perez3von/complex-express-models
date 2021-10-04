import { Router } from 'express';


export default Router()

  .get('/', async (req, res, next) => {
    try {
      
      //res.json(on);
      res.send('WORK WORK WORK');
    } catch (error) {
      next(error);
    }
  });
  