CREATE DATABASE IF NOT EXISTS chatapp;

USE chatapp;

DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS messages;

CREATE TABLE user(
  id INT AUTO_INCREMENT NOT NULL,
  username VARCHAR(255),
  password VARCHAR(255),
  name VARCHAR(255),
  PRIMARY KEY (id)
);


CREATE TABLE messages(
  id INT AUTO_INCREMENT NOT NULL,
  sender_id INT, 
  receiver_id INT, 
  body VARCHAR(255),
  PRIMARY KEY (id),
  FOREIGN KEY (sender_id) REFERENCES user(id),
  FOREIGN KEY (receiver_id) REFERENCES user(id)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < db/init.sql
 *  to create the database and the tables.*/