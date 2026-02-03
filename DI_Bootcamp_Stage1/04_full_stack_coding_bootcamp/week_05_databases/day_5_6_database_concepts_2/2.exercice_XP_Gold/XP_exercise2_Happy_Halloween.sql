--exclure DVD non rendus

--CREATE OR REPLACE VIEW inventory_available AS
--SELECT i.*
--FROM inventory i
--WHERE NOT EXISTS (
--    SELECT 1
--    FROM rental r
--    WHERE r.inventory_id = i.inventory_id
--      AND r.return_date IS NULL
--);

--1.How many stores there are, and in which city and country they are located.

--SELECT
--    s.store_id,
--    ci.city,
--    co.country
--FROM store s
--JOIN address a ON s.address_id = a.address_id
--JOIN city ci ON a.city_id = ci.city_id
--JOIN country co ON ci.country_id = co.country_id
--ORDER BY s.store_id;
--
--SELECT COUNT(*) AS store_count
--FROM store;

--2.How many hours of viewing time there are in total in each store – in other words, the sum of the length of every inventory item in each store.

--SELECT
--    ia.store_id,
--    SUM(f.length) AS total_minutes,
--    ROUND(SUM(f.length) / 60.0, 2) AS total_hours,
--    ROUND(SUM(f.length) / 60.0 / 24.0, 2) AS total_days
--FROM inventory_available ia
--JOIN film f ON ia.film_id = f.film_id
--GROUP BY ia.store_id
--ORDER BY ia.store_id;

-- 3. Make sure to exclude any inventory items which are not yet returned. (Yes, even in the time of zombies there are people who do not return their DVDs)
--SELECT
--    ia.store_id,
--    SUM(f.length) AS total_minutes,
--    ROUND(SUM(f.length) / 60.0, 2) AS total_hours,
--    ROUND(SUM(f.length) / 60.0 / 24.0, 2) AS total_days
--FROM inventory_available ia
--JOIN film f ON ia.film_id = f.film_id
--GROUP BY ia.store_id
--ORDER BY ia.store_id;

--4. A list of all customers in the cities where the stores are located.
--
--SELECT DISTINCT
--    c.customer_id,
--    c.first_name,
--    c.last_name,
--    co.country
--FROM customer c
--JOIN address a ON c.address_id = a.address_id
--JOIN city ci ON a.city_id = ci.city_id
--JOIN country co ON ci.country_id = co.country_id
--WHERE ci.country_id IN (
--    SELECT ci2.country_id
--    FROM store s
--    JOIN address a2 ON s.address_id = a2.address_id
--    JOIN city ci2 ON a2.city_id = ci2.city_id
--)
--ORDER BY co.country, c.last_name, c.first_name;

--5.A list of all customers in the countries where the stores are located.
--
--SELECT DISTINCT
--    c.customer_id,
--    c.first_name,
--    c.last_name,
--    co.country
--FROM customer c
--JOIN address a ON c.address_id = a.address_id
--JOIN city ci ON a.city_id = ci.city_id
--JOIN country co ON ci.country_id = co.country_id
--WHERE ci.country_id IN (
--    SELECT ci2.country_id
--    FROM store s
--    JOIN address a2 ON s.address_id = a2.address_id
--    JOIN city ci2 ON a2.city_id = ci2.city_id
--)
--ORDER BY co.country, c.last_name, c.first_name;


--6.Some people will be frightened by watching scary movies while zombies walk the streets. Create a ‘safe list’ of all movies which do not include the ‘Horror’ category, or contain the words ‘beast’, ‘monster’, ‘ghost’, ‘dead’, ‘zombie’, or ‘undead’ in their titles or descriptions… Get the sum of their viewing time (length).


--CREATE OR REPLACE VIEW safe_movies AS
--SELECT DISTINCT
--    f.film_id,
--    f.title,
--    f.length,
--    f.description
--FROM film f
--JOIN film_category fc ON f.film_id = fc.film_id
--JOIN category cat ON fc.category_id = cat.category_id
--WHERE cat.name <> 'Horror'
--  AND f.title NOT ILIKE '%beast%'
--  AND f.title NOT ILIKE '%monster%'
--  AND f.title NOT ILIKE '%ghost%'
--  AND f.title NOT ILIKE '%dead%'
--  AND f.title NOT ILIKE '%zombie%'
--  AND f.title NOT ILIKE '%undead%'
--  AND COALESCE(f.description, '') NOT ILIKE '%beast%'
--  AND COALESCE(f.description, '') NOT ILIKE '%monster%'
--  AND COALESCE(f.description, '') NOT ILIKE '%ghost%'
--  AND COALESCE(f.description, '') NOT ILIKE '%dead%'
--  AND COALESCE(f.description, '') NOT ILIKE '%zombie%'
--  AND COALESCE(f.description, '') NOT ILIKE '%undead%';


--SELECT
--    SUM(length) AS total_minutes,
--    ROUND(SUM(length) / 60.0, 2) AS total_hours,
--    ROUND(SUM(length) / 60.0 / 24.0, 2) AS total_days
--FROM safe_movies;


--SELECT
--    ia.store_id,
--    SUM(sm.length) AS total_minutes,
--    ROUND(SUM(sm.length) / 60.0, 2) AS total_hours,
--    ROUND(SUM(sm.length) / 60.0 / 24.0, 2) AS total_days
--FROM inventory_available ia
--JOIN safe_movies sm ON ia.film_id = sm.film_id
--GROUP BY ia.store_id
--ORDER BY ia.store_id;

--7.For both the ‘general’ and the ‘safe’ lists above, also calculate the time in hours and days (not just minutes).

--CREATE TABLE safe_movies_table (
--    film_id INTEGER PRIMARY KEY,
--    title TEXT NOT NULL,
--    description TEXT,
--    length INTEGER NOT NULL,
--    CONSTRAINT chk_no_scary_words CHECK (
--        title !~* '(beast|monster|ghost|dead|zombie|undead)'
--        AND COALESCE(description, '') !~* '(beast|monster|ghost|dead|zombie|undead)'
--    )
--);
