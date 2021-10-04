import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

describe('demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });


  it('insert data to table', () =>{

    return request(app)
    .post('/data')
    .send([{}])
    .then(() => {
      expect().toEqual();
    })


  })

  afterAll(() => {
    pool.end();
  });
});
