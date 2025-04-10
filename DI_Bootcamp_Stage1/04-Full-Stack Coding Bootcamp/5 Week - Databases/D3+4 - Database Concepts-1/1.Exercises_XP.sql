----EXERCICE XP----
----Exercise 1 : Items and customers -----

-- SELECT * FROM items ORDER BY item_price
-- SELECT * FROM items WHERE item_price >80 ORDER BY item_price
-- SELECT custo_f_name, custo_l_name  WHERE custo_id <4 
-- SELECT custo_l_name FROM customers ORDER BY custo_l_name ASC



-----Exercise 2 : dvdrental database----
----1. 
--SELECT * FROM customer
----2.
-- SELECT concat(first_name, ' ', last_name) as full_name FROM customer
----3.
-- SELECT DISTINCT create_date FROM customer
----4.
-- SELECT * FROM customer ORDER BY first_name DESC
----5.
-- SELECT film_id, title, description, release_year, rental_rate FROM film ORDER BY rental_rate
----6.
-- SELECT address, district, phone FROM address WHERE district = 'Texas'
----7.
-- SELECT * FROM film WHERE film_id = 150 OR film_id = 15
----8.
-- SELECT film_id, title, description, length, rental_rate FROM film WHERE title = 'The Parent Trap'
----9.
-- SELECT * FROM film
-- SELECT film_id, title, description, length, rental_rate FROM film WHERE title ILIKE 'el%'
----10.
-- SELECT film_id, title, rental_rate FROM film ORDER BY rental_rate LIMIT 10
----11.
-- SELECT film_id, title, rental_rate FROM film ORDER BY rental_rate OFFSET 10 LIMIT 10
----12.
-- SELECT c.first_name, c.last_name, p.amount, p.payment_date
-- FROM customer as c
-- JOIN payment as p on c.customer_id = p.customer_id
-- ORDER BY c.customer_id;
----13.
-- SELECT f.*
-- FROM film AS f
-- LEFT JOIN inventory AS i on f.film_id = i.film_id
-- WHERE i.film_id is NULL;
----14.
-- SELECT ci.city, co.country
-- FROM city AS ci
-- JOIN country AS co on ci.country_id = co.country_id;
----BONUS

SELECT
    s.staff_id AS seller_id,
    c.customer_id,
    c.first_name,
    c.last_name,
    p.amount,
    p.payment_date
FROM payment AS p
JOIN customer AS c
    ON p.customer_id = c.customer_id
JOIN staff AS s
    ON p.staff_id = s.staff_id
ORDER BY s.staff_id, p.payment_date;

