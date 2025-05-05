---COURSE AGGREGATE----

-- SELECT avg(number_oscars) AS average_number_oscars FROM actors;
-- SELECT count(first_name) AS name_actor FROM actors;
-- SELECT count(*) FROM actors;
-- SELECT max(number_oscars) AS best_actor FROM actors;
-- SELECT min(number_oscars) AS worst_actor FROM actors;
-- SELECT sum(number_oscars) AS total_oscars FROM actors;

-- INSERT INTO actors (first_name, last_name, birthdate, number_oscars)
-- VALUES('Matt','Ross','03/01/1970', 0);

-- SELECT * FROM actors;
-- SELECT DISTINCT first_name FROM actors ORDER BY first_name DESC;

-- SELECT * FROM actors WHERE first_name in ('Matt','Lea','Davis');

-- SELECT * FROM actors WHERE first_name not in ('Matt','Lea','Davis');

-- SELECT * FROM actors WHERE birthdate BETWEEN '01/01/1961' AND '01/01/1962';


-- INSERT INTO actors (first_name, last_name, birthdate, number_oscars) VALUES('George','Clooney','06/05/1961 ', 1);
-- SELECT first_name, last_name, sum(number_oscars) FROM actors GROUP BY first_name, last_name;

-- SELECT first_name, last_name, sum(number_oscars) FROM actors GROUP BY first_name, last_name 
-- ORDER BY min(number_oscars);

----EXERCICE----
-- SELECT AVG (number_oscars) FROM actors ;
-- SELECT DISTINCT first_name FROM actors ORDER BY first_name ASC;
-- SELECT DISTINCT first_name, last_name FROM actors WHERE birthdate >= '01/01/1970';
-- SELECT * FROM actors WHERE first_name in ('David','Morgan','Will');

---COURSE  HAVING / UNION---

---FOREIGN KEY, INNER JOIN---

-- CREATE TABLE movies(
-- movie_id SERIAL,
-- movie_title VARCHAR (50) NOT NULL,
-- movie_story TEXT,
-- actor_playing_id INTEGER,
-- PRIMARY KEY (movie_id),
-- FOREIGN KEY (actor_playing_id) REFERENCES actors (actor_id)
-- );

-- INSERT INTO movies (movie_title, movie_story, actor_playing_id) VALUES
--     ( 'Good Will Hunting', 
--     'Written by Affleck and Damon, the film follows 20-year-old South Boston janitor Will Hunting',
--     (SELECT actor_id from actors WHERE first_name='Matt' AND last_name='Damon')),
--     ( 'Oceans Eleven', 
--     'American heist film directed by Steven Soderbergh and written by Ted Griffin.', 
--     (SELECT actor_id from actors WHERE first_name='Matt' AND last_name='Damon'));

-- SELECT * FROM movies;

-- INSERT INTO movies (movie_title, movie_story, actor_playing_id) VALUES
--     ( 'Good Will Hunting', 
--     'Written by Affleck and Damon, the film follows 20-year-old South Boston janitor Will Hunting',
--     (SELECT actor_id from actors WHERE first_name='Maty' AND last_name='Damon')),
--     ( 'Oceans Eleven', 
--     'American heist film directed by Steven Soderbergh and written by Ted Griffin.', 
--     (SELECT actor_id from actors WHERE first_name='Maty' AND last_name='Damon'));

---COURSE INNER JOIN ---

-- SELECT actors.first_name, actors.last_name, movies.movie_title
-- FROM actors
-- INNER JOIN movies
-- ON actors.actor_id = movies.actor_playing_id;

----EXERCICE----

-- CREATE TABLE producers(
-- producer_id SERIAL PRIMARY KEY, 
-- movie_id SERIAL ,
-- producer_name VARCHAR (50) NOT NULL,
-- FOREIGN KEY (actor_playing_id) REFERENCES actors (actor_id),
-- FOREIGN KEY (movie_title_) REFERENCES movies (movie_id)
-- );

-- CREATE TABLE producers (
--     producer_id SERIAL PRIMARY KEY,      -- Identifiant unique pour chaque producteur.
--     producer_name VARCHAR(255) NOT NULL,  -- Nom du producteur, vous pouvez modifier la taille selon vos besoins.
--     movie_id INTEGER NOT NULL,            -- L'identifiant du film.
--     CONSTRAINT fk_movie                  -- Définition de la contrainte de clé étrangère.
--         FOREIGN KEY (movie_id)
--         REFERENCES movies(movie_id)            -- La colonne "id" de la table "movies" est référencée
-- 		);

-- SELECT* FROM movies;

-- INSERT INTO producers (producer_name, movie_id)
-- VALUES
--     ('Gus Van Sant', 3),
--     ('Steven Soderbergh', 4);

-- SELECT* FROM producers;


-- SELECT m.movie_title, p.producer_name, a.first_name, a.last_name
-- FROM movies m
-- INNER JOIN producers p ON m.movie_id = p.movie_id
-- INNER JOIN actors a ON m.actor_playing_id = a.actor_id; --La clause INNER JOIN actors a ON m.actor_playing_id = a.actor_id établit le lien entre le film et l’acteur en comparant la valeur actor_playing_id présente dans la table movies à la colonne actor_id de la table actors.

---LEFT or RIGHT JOIN---

-- SELECT actors.first_name, actors.last_name, movies.movie_title
-- FROM actors
-- LEFT OUTER JOIN movies
-- ON actors.actor_id = movies.actor_playing_id;

---FULL JOIN---

-- SELECT actors.first_name, actors.last_name, movies.movie_title
-- FROM actors
-- FULL OUTER JOIN movies
-- ON actors.actor_id = movies.actor_playing_id;

----EXERCICE----

-- CREATE TABLE countries (
--     country_id SERIAL PRIMARY KEY,
-- 	coountry_name VARCHAR (100) NOT NULL
-- 	);

-- SELECT a.actor_id, a.first_name, a.last_name, c.coountry_name
-- FROM actors a
-- INNER JOIN countries c ON a.actor_id = c.country_id;

-- SELECT a.actor_id, a.first_name, a.last_name, c.coountry_name
-- FROM actors a
-- LEFT JOIN countries c ON a.actor_id = c.country_id;

-- ALTER TABLE countries
-- RENAME COLUMN coountry_name TO country_name;

-- SELECT a.actor_id, a.first_name, a.last_name, c.country_name
-- FROM actors a
-- FULL JOIN countries c ON a.actor_id = c.country_id;








