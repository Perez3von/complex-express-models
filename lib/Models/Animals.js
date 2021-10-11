
const pool = require('../utils/pool');
module.exports = class Animals {

   
    
    
  constructor(row){
    
    this.id =Number(row.id);
    this.name = row.animal_name;
    this.species_id = Number(row.species_id);
    

  }


  static async insertAnimals({ name, species_id }){

    const { rows } = await pool.query(
      'INSERT INTO animals (animal_name, species_id) VALUES ($1, $2) RETURNING *',
      [name, species_id]

    );
    console.log(rows[0]);
    return new Animals(rows[0]);

  }

  static async getAll(){

    const { rows } = await pool.query(
      'SELECT * FROM animals'

    );
   
    return rows.map(animal => new Animals(animal));

  }
    

    
}
