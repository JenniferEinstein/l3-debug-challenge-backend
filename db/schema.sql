DROP DATABASE IF EXISTS song_tracker;
CREATE DATABASE song_tracker;

\c song_tracker;

DROP TABLE IF EXISTS songs;

CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    artist TEXT NOT NULL,
    genre TEXT NOT NULL
);