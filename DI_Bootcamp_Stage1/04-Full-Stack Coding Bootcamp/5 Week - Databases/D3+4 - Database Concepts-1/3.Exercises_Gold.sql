------EXERCICE XP GOLD----------------------------------

----Exercise 1: DVD Rental------------------------
----1.
-- SELECT rating, count(*) as film_count
-- FROM film
-- GROUP BY rating
-- ORDER BY rating

----2.
-- SELECT * FROM film 
-- WHERE (rating = 'G' OR rating = 'PG-13') 
-- AND length < 120 
-- AND rental_rate < 3.00
-- ORDER BY title

----3 + 4
-- SELECT * FROM customer

-- UPDATE customer
-- SET first_name = 'Anna',
-- 	last_name = 'LEVY',
-- 	email = 'anna25levy@gmail.com'
-- WHERE first_name = 'Mary'


----Exercise 2: students table--------------------------
---UPDATE---
-- UPDATE students 
-- SET stud_birthday = '1998/11/02'
-- WHERE stud_l_name = 'Benichou'

-- SELECT * FROM students

-- UPDATE students
-- SET stud_l_name = 'Guez'
-- WHERE stud_f_name = 'David'

-- SELECT * FROM students ORDER BY Stud_id

---DELETE---

-- DELETE FROM students WHERE stud_f_name = 'Lea'   --Dupliquer la table pour eviter erreurs ou + de specificite de la rechrche

---++-- 3 times all datas were deleted so the stud_id are not from 1 to 6!!!! 

---COUNT---
---1.
-- SELECT COUNT (*) FROM students

---2.
-- SELECT COUNT (*) FROM students WHERE stud_birthday > '01/01/2000'

---INSERT / ALTER ---
---1.
-- ALTER table students
-- ADD column math_grade integer

---2.
-- UPDATE students 
-- SET math_grade = 80 
-- WHERE stud_id = 16

---3.
-- UPDATE students 
-- SET math_grade = 90 
-- WHERE stud_id = 17 or stud_id = 19

---4.
-- UPDATE students 
-- SET math_grade = 40 
-- WHERE stud_id = 20

-- UPDATE students 
-- SET math_grade = 65
-- WHERE stud_id = 21

---5.
-- SELECT COUNT (*) FROM students WHERE math_grade > 83

---6.
-- INSERT into students(stud_f_name, stud_l_name, stud_birthday, math_grade)
-- values
-- ('Omer', 'Simpson', '1980-10-03', 70)
---7.
-- SELECT * FROM students ORDER BY Stud_id

---BONUS.
-- ALTER table students
-- ADD column numb_grade integer

-- SELECT 
--     stud_f_name, 
--     stud_l_name, 
--     COUNT(math_grade) AS numb_grade
-- FROM students
-- GROUP BY stud_f_name, stud_l_name;

-- -----ATTENTION: Cas des valeurs NULL :
-- Si jamais la colonne math_grade comporte des valeurs NULL, celles-ci ne seront pas comptabilisées dans le COUNT(math_grade).
-- Si vous souhaitez compter les lignes même quand la note est NULL, utilisez COUNT(*).

-- SELECT 
--     stud_f_name, 
--     stud_l_name, 
--     COUNT(math_grade) AS total_grade
-- FROM students
-- GROUP BY stud_f_name, stud_l_name;

---SUM---
-- SELECT SUM(math_grade) FROM students -- 435

-- SELECT AVG(math_grade) FROM students -- 72.500000


----Exercise 3 : Items and customers--------------------------------
---PART 1
---1.
-- CREATE TABLE purchases (
--     id SERIAL PRIMARY KEY,
--     customer_id INT NOT NULL,
--     item_id INT NOT NULL,
--     quantity_purchased INT NOT NULL,
--     FOREIGN KEY (customer_id) REFERENCES customers (custo_id),
--     FOREIGN KEY (item_id) REFERENCES items (item_id)
-- );

-- SELECT * FROM purchases

---2.
-- INSERT INTO purchases (customer_id, item_id, quantity_purchased)
-- VALUES
-- (
--   (SELECT custo_id 
--    FROM customers 
--    WHERE custo_f_name = 'Scott' 
--      AND custo_l_name = 'Scott'),
--   (SELECT item_id 
--    FROM items 
--    WHERE item_name = 'Fan'),
--   7
-- ),
-- (
--   (SELECT custo_id 
--    FROM customers 
--    WHERE custo_f_name = 'Melanie' 
--      AND custo_l_name = 'Johnson'),
--   (SELECT item_id 
--    FROM items 
--    WHERE item_name = 'Large Desk'),
--   10
-- ),
-- (
--   (SELECT custo_id 
--    FROM customers 
--    WHERE custo_f_name = 'Greg' 
--      AND custo_l_name = 'Jones'),
--   (SELECT item_id 
--    FROM items 
--    WHERE item_name = 'Small Desk'),
--   1
-- );


---???- How to overcome the breakage in SQL?---


-- SELECT * FROM customers
-- SELECT * FROM items
-- SELECT * FROM purchases

--- Scott Scott a acheté 1 fan
-- UPDATE purchases
-- SET quantity_purchased = 1
-- WHERE id = 7;

--- Greg Jones a acheté 2 small desks
-- UPDATE purchases
-- SET quantity_purchased = 2
-- WHERE id = 9;


---PART 2
---1.1.
-- SELECT * FROM purchases

--This information can be useful for having a global overview of transactions. 
-- However, without joint with other tables (such as customers or articles), 
--the results give us only digital identifiers (IDS) without context (which bought what).

---1.2.
-- SELECT 
--     p.*,
--     c.custo_f_name AS first_name,
--     c.custo_l_name AS last_name
-- FROM purchases AS p
-- JOIN customers AS c
--     ON p.customer_id = c.custo_id;

----OTHER idea:
SELECT
    p.id,
    p.item_id,
    p.quantity_purchased,
	p.customer_id,
    c.custo_f_name AS first_name,
    c.custo_l_name AS last_name
FROM purchases AS p
JOIN customers AS c
    ON p.customer_id = c.custo_id;

---1.3.
-- SELECT * 
-- FROM purchases
-- WHERE customer_id = 5;

---1.4.
-- SELECT *
-- FROM purchases
-- WHERE item_id IN (
--     SELECT item_id
--     FROM items
--     WHERE item_name IN ('Large Desk', 'Small Desk')
-- );

---2. 
-- SELECT 
--     c.custo_f_name AS first_name,
--     c.custo_l_name AS last_name,
--     i.item_name
-- FROM purchases AS p
-- JOIN customers AS c
--     ON p.customer_id = c.custo_id
-- JOIN items AS i
--     ON p.item_id = i.item_id;

---3.

-- INSERT INTO purchases (customer_id, item_id, quantity_purchased)
-- VALUES (5, NULL, 1); 
--- This cannot work, because we have specified that the data of the column 'item_id' were 'NOT NULL'
