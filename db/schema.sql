DROP DATABASE IF EXISTS burgerDB;

CREATE DATABASE burgerDB;

USE burgerDB;

CREATE TABLE burgers(
	id INT NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(255) NULL,
	devoured BOOLEAN default false,
	PRIMARY KEY(id)
);
