DROP TABLE IF EXISTS tasks;

CREATE TABLE tasks (
  id SERIAL,
  description TEXT
);

INSERT INTO tasks(description) VALUES('Go to the gym');
INSERT INTO tasks(description) VALUES('Dont think about how depressed you are');
