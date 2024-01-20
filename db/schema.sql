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