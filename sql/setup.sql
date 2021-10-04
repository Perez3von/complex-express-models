DROP TABLE IF EXISTS species CASCADE;
DROP TABLE IF EXISTS animals CASCADE;


CREATE TABLE species(

id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
species_type TEXT NOT NULL

);

CREATE TABLE animals(
    
id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
animal_name TEXT,
species_id BIGINT REFERENCES species (id)
);
