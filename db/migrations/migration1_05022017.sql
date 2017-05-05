\connect travelapp

CREATE TABLE IF NOT EXISTS state_tbl (
  id BIGSERIAL PRIMARY KEY,
  state VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS city_tbl (
 id BIGSERIAL PRIMARY KEY,
 city VARCHAR(255),
 state_id INTEGER REFERENCES state_tbl(id),
 food VARCHAR(1024)[] DEFAULT '{}',
 attraction VARCHAR(1024)[] DEFAULT '{}'
 );