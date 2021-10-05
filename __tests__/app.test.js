// import pool from '../lib/utils/pool.js';
// import setup from '../data/setup.js';
// import request from 'supertest';
// import app from '../lib/app.js';
const pool = require('../lib/utils/pool.js');
const setup = require('../data/setup.js');
const request = require('supertest'); 
const app = require('../lib/app.js');

const species_data = require('../lib/utils/speciesData.js');



describe('demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });


  it('insert data to species table and return what it inserted', () => {

    return request(app)
      .post('/species')
      .send(species_data)
      .then((res) => {
        expect(res.body).toEqual(species_data);
      });


  });

  afterAll(() => {
    pool.end();
  });
});
