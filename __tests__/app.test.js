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
  beforeAll(() => {
    return setup(pool);
  });


  it('insert data to species table and return what it inserted', async () => {

    const res =  await request(app).post('/species').send({ species:'fish' });
    expect(res.body).toEqual({ id:1, species:'fish' });


  });
  it('Route to get all Species', async () => {

    const res =  await request(app).get('/species');
    expect(res.body).toEqual([{ id:expect.any(Number), species:expect.any(String) }]);


  });

  afterAll(() => {
    pool.end();
  });
});
