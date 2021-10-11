
const pool = require('../utils/pool');
module.exports = class Animals {

   
    
    
  constructor(row){
    
    this.id = Number(row.id);
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
  static async getAllWithSpecies(){

    const { rows } = await pool.query(
      `SELECT 
       animals.id as animals_id,
       animals.animal_name as animal_name,
       species.species_type as species_name
       FROM animals
       LEFT JOIN species
       ON animals.species_id = species.id  `

    );


   
    return rows.map(animal => { return { animal_id:Number(animal.animals_id), animal_name:animal.animal_name, species_name:animal.species_name }; });

  }
    

    
}
