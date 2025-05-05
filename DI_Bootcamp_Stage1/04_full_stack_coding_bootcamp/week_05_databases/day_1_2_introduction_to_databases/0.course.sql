-- Database: Hollywood

-- DROP DATABASE IF EXISTS "Hollywood";

-- CREATE DATABASE "Hollywood"
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'fr-FR'
--     LC_CTYPE = 'fr-FR'
--     LOCALE_PROVIDER = 'libc'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

-- CREATE TABLE actors(
--  actor_id SERIAL PRIMARY KEY,
--  first_name VARCHAR (50) NOT NULL,
--  last_name VARCHAR (100) NOT NULL,
--  age DATE NOT NULL,
--  number_oscars SMALLINT NOT NULL
-- )

-- SELECT * FROM actors;

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Matt','Damon','08/10/1970', 5);

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('George','Clooney','06/05/1961', 2);

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Juliette','Binoche','09/03/1964', 1);

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Gal','Gadot','30/04/1985', 0);  

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Meryl','Streep','27/06/1949', 3); 
-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Cate','Blanchett','14/05/1969', 2);
-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Leonardo','DiCaprio','11/11/1974', 1);

-- SELECT * FROM actors WHERE first_name = 'Matt';

-- SELECT * FROM actors WHERE number_oscars >= 3;

-- SELECT last_name FROM actors WHERE first_name != 'Matt' ;  --Affiche la colonne last_name sans la vleur Matt

-- SELECT first_name, last_name FROM actors WHERE first_name = 'Matt'  AND 
-- last_name = 'Damon' ; --1 ligne est récupérée, avec les colonnes Last_name et First_name

-- SELECT first_name, last_name FROM actors WHERE first_name = 'Matt'  OR  
-- number_oscars = 2 ; --3 lignes: avec les colonnes Last_name et First_name

-- ++ COURS++ Ne fonctionne pas ici:
-- SELECT * FROM customers WHERE (age > 30 OR num_of_children > 2) AND is_vip = TRUE; --Vous pouvez utiliser "NOT" pour inverser le résultat d'une condition.
-- SELECT * FROM customers WHERE (age > 30 OR num_of_children > 2) AND NOT (is_vip = FALSE);


-- SELECT * FROM actors WHERE age > '1960-01-01' ORDER BY first_name ASC --orted alphabetically by the “first_name” column


--**EXERCICE**--
-- SELECT * FROM actors WHERE actor_id <= 4 --The first 4 actors

-- SELECT * FROM actors WHERE actor_id <= 4 ORDER BY first_name DESC --The first 4 actors ordered in descending order of the last_name

-- SELECT first_name FROM actors WHERE last_name ILIKE '%e%' --The actors that have the letter 'e' in their first_name

-- SELECT first_name, last_name FROM actors WHERE number_oscars < 5 --    The actors that got at least 5 oscars


-- UPDATE actors 
-- SET age='1970-01-01' 
-- WHERE first_name='Matt' AND last_name='Damon'
-- RETURNING 
--     actor_id,
--     first_name, 
--     last_name,
--     age;

-- DELETE FROM actors WHERE actor_id=6   -- supprime la ligne double de Meryl
-- RETURNING actor_id, first_name, last_name, number_oscars; --RETURNING indique 
-- de renvoyer immédiatement le ou les enregistrements 
-- affectés par l'opération. Ainsi, après l'exécution de la requête, vous verrez la version 
-- mise à jour de la ligne, ce qui est particulièrement utile pour vérifier que la modification a bien été effectuée.

--**EXERCICE**--

-- UPDATE actors SET first_name='Maty' WHERE first_name='Matt' AND last_name='Damon'
-- RETURNING *

-- UPDATE actors SET number_oscars='4' WHERE first_name='George' AND last_name='Clooney'
-- RETURNING
--     actor_id,
--     first_name, 
--     last_name,
--     age,
-- 	number_oscars;
	
-- ALTER TABLE actors RENAME COLUMN age TO birthdate;

-- DELETE FROM actors WHERE actor_id=7
-- RETURNING actor_id, first_name, last_name, number_oscars; --Cate a ete supprime mais affichee

-- SELECT * FROM actors ORDER BY last_name ASC

-- SELECT * FROM actors ORDER BY actor_id; --affiche la table entiere classe par leur id

