----Daily challenge : Actors----

--1.Count how many actors are in the table.
-- SELECT COUNT(*) FROM actors;  -- 6 actors

--2. Try to add a new actor with some blank fields. What do you think the outcome will be ?

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Brad','Pitt', '', 3); 
-- VALUES('Brad','Pitt', 1); 
--ERROR:  la colonne « age » de la relation « actors » n'existe pas
--Error: the "age" column of the "actors" relationship does not exist