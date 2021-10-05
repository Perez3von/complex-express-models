
const pool = require('../utils/pool');
module.exports = class Animals {

   
    
    
  constructor(row){
    
    this.id = row.id;
    this.name = row.animal_name;
    this.species = row.species_id;
    

  }


  static async insertAnimals({ name, species_id }){

    const rows = await pool.query(
      'INSERT INTO animals (animal_name, species_id) VALUES ($1, $2) RETURNING *',
      [name, species_id]

    );
    return new Animals(rows[0]);

  }
    

    
}
