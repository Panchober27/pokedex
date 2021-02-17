CREATE DATABASE pokedb;

USE pokedb;



-- Tablas. --
CREATE TABLE trainer (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    address VARCHAR(50),
    phone VARCHAR(50) 
);


 