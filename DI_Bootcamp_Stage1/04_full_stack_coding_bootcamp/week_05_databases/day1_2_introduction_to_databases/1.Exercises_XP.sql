-- Database: Public

-- DROP DATABASE IF EXISTS "Public";

-- CREATE DATABASE "Public"
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'fr-FR'
--     LC_CTYPE = 'fr-FR'
--     LOCALE_PROVIDER = 'libc'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

-- CREATE TABLE items(
--  item_id SERIAL PRIMARY KEY,
--  item_name VARCHAR (120),
--  item_price SMALLINT NOT NULL
-- )

-- CREATE TABLE customers(
--  custo_id SERIAL PRIMARY KEY,
--   custo_f_name VARCHAR (50) NOT NULL,
--   custo_l_name VARCHAR (100) NOT NULL
-- )

-- INSERT INTO items (item_name, item_price)  --++Onpeut par ajouter plusieurs enregistrement en 1 fois!!!---
-- VALUES('Small Desk', 100);
-- VALUES('Large Desk', 300);
-- VALUES('Fan', 80)

-- INSERT INTO items (item_name, item_price)  
-- VALUES('Small Desk', 100);
-- INSERT INTO items (item_name, item_price) 
-- VALUES('Large Desk', 300);
-- INSERT INTO items (item_name, item_price) 
-- VALUES('Fan', 80)

-- INSERT INTO customers (custo_f_name, custo_l_name)  
-- VALUES ('Greg', 'Jones'), ('Sandra', 'Jones'), ('Scott', 'Scott'), ('Trevor', 'Green'), ('Melanie', 'Johnson'); 

--NOTE: Use SQL to fetch the following data from the database = écrire des requêtes SQL qui vont extraire les informations spécifiées à partir de la base de données
----1.Fetch All items
-- SELECT * FROM items;
----Corecting table items:
---- DELETE FROM items WHERE item_id>=2
----2.All the items with a price above 80 (80 not included).
-- SELECT * FROM items WHERE item_price>80;
----3. All the items with a price below 300. (300 included)
-- SELECT * FROM items WHERE item_price<=300;
----4. All customers whose last name is ‘Smith’ (What will be your outcome?)
-- SELECT * FROM customers WHERE custo_l_name = 'Smith'; --empty table
----5. All customers whose last name is ‘Jones’.
-- SELECT * FROM customers WHERE custo_l_name = 'Jones'; --2 records
----6.All customers whose firstname is not ‘Scott’.
-- SELECT * FROM customers WHERE custo_f_name != 'Scott'; --4 records



