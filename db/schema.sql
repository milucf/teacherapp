DROP DATABASE IF EXISTS college_db;

CREATE DATABASE college_db;

USE college_db;

CREATE TABLE names(
    id varchar(5) ,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    dob date,
    PRIMARY KEY (id)
);

CREATE TABLE sampleData(
    id varchar(5) ,
    address VARCHAR(100),
    city VARCHAR(50),
    county VARCHAR(50),
    state varchar(2),
    zip INTEGER,
    PRIMARY KEY (id)
);
