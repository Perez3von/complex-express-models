
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
    //console.log(rows[0]);
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
    
  static async update({ id, name }){

    const { rows } = await pool.query(
      'UPDATE animals SET animal_name = $2 WHERE id = $1 RETURNING * ',
      [id, name]

    );
    //console.log(rows[0]);
    return new Animals(rows[0]);

  }

  static async delete({ id }){

    const { rows } = await pool.query(
      'DELETE FROM animals WHERE id = $1 RETURNING * ',
      [id]

    );
    // console.log(rows[0]);
    return new Animals(rows[0]);

  }
  static async count(){

    const { rows } = await pool.query(
      `
      SELECT 
      species.species_type as species_name,
      SUM(animals.id) as  number_of_animals
      FROM species
      RIGHT JOIN animals
      ON animals.species_id = species.id
      GROUP BY animals.animal_name, species.species_type
      `

    );
    //console.log(rows[0]);
    return rows.map(row => {return { number_of_animals:Number(row.number_of_animals), species_name:row.species_name }; });

  }

    
};
