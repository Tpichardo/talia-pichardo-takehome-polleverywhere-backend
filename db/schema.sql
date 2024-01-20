DROP DATABASE IF EXISTS raffles;

CREATE DATABASE raffles;

\c raffles;

DROP TABLE IF EXISTS raffle;

CREATE TABLE raffle (
    id SERIAL PRIMARY KEY
    raffle_name TEXT NOT NULL,
    secret_token TEXT NOT NULL,
    date_created TIMESTAMP NOT NULL,
    date_raffled TIMESTAMP
);

DROP TABLE IF EXISTS participant;

CREATE TABLE participant (
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL, 
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone_number TEXT,
    is_winner BOOLEAN DEFAULT false,
    lost BOOLEAN DEFAULT false,
    raffle_id INT NOT NULL,
    FOREIGN KEY (raffle_id) REFERENCES raffle (id)
);