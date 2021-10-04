
const pool = require('../utils/pool');

module.exports =  class Species {



  constructor(row){

    this.id = row.id;
    this.species = row.species_type;


  }



  static async insertSpecies({ species }){

    const rows = await pool.query(
      'INSERT INTO species (species_type) VALUES ($1) RETURNING *',
      [species]

    );
    return new Species(rows[0]);

  }


};

