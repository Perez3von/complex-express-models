// import { promises as fs } from 'fs';
const fs = require('fs').promises;

module.exports =  (pool) => {
  return fs.readFile('./sql/setup.sql', { encoding: 'utf-8' })
    .then(sql => pool.query(sql));
};


