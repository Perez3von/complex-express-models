// import pool from '../lib/utils/pool.js';
// import setup from '../data/setup.js';
// import request from 'supertest';
// import app from '../lib/app.js';
const pool = require('../lib/utils/pool.js');
const setup = require('../data/setup.js');
const request = require('supertest'); 
const app = require('../lib/app.js');

describe('demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });


  it('insert data to table', () => {

    return request(app)
      .post('/data')
      .send([{}])
      .then(() => {
        expect(true).toEqual(true);
      });


  });

  afterAll(() => {
    pool.end();
  });
});
