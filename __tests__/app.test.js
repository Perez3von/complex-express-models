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

  it('insert data to species table and return what it inserted', async () => {

    const res =  await request(app).post('/animal').send({ name: 'Grreat white shark', species_id: 1 });
    expect(res.body).toEqual({ id:1, name: 'Grreat white shark', species_id: 1 });


  });




  it('Route to get all Species', async () => {

    const res =  await request(app).get('/species');
    expect(res.body).toEqual([{ id:expect.any(Number), species:expect.any(String) }]);


  });
  it('Route to get all animals', async () => {

    const res =  await request(app).get('/animal');
    expect(res.body).toEqual([{ id:expect.any(Number), species_id:expect.any(Number), name:expect.any(String) }]);


  });

  it('Route to get all animals with species info', async () => {

    const res =  await request(app).get('/animal/species');
    expect(res.body).toEqual([{ animal_id:expect.any(Number), species:expect.any(String), name:expect.any(String) }]);


  });


  afterAll(() => {
    pool.end();
  });
});
