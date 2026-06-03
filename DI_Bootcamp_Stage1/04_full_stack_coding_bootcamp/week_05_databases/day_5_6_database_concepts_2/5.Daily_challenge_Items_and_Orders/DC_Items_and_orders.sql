-- Table product_orders (commande principale)
--CREATE TABLE product_orders (
--    id SERIAL PRIMARY KEY,
--    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
--);
--
-- Table items (produits associés à une commande)
--CREATE TABLE items (
--    id SERIAL PRIMARY KEY,
--    order_id INT NOT NULL REFERENCES product_orders(id),
--    product_name VARCHAR(255),
--    price DECIMAL(10,2) NOT NULL
--);

-- Table users (utilisateurs)-
--CREATE OR REPLACE FUNCTION get_order_total(order_id INT)
--RETURNS DECIMAL AS $$
--BEGIN
--    RETURN (SELECT SUM(price) FROM items WHERE order_id = order_id);
--END;
--$$ LANGUAGE plpgsql;

--CREATE TABLE users (
--    id SERIAL PRIMARY KEY,
--    username VARCHAR(255) NOT NULL,
--    email VARCHAR(255) NOT NULL
--);

-- Ajouter la clé étrangère user_id à product_orders
--ALTER TABLE product_orders
--ADD COLUMN user_id INT NOT NULL REFERENCES users(id);

--For Testing--

--INSERT INTO users (username, email) VALUES ('john', 'john@example.com');
--INSERT INTO product_orders (user_id) VALUES (1);
--INSERT INTO items (order_id, product_name, price) VALUES (1, 'T-shirt', 19.99);
--INSERT INTO items (order_id, product_name, price) VALUES (1, 'Jeans', 49.99);
--SELECT get_order_total(1);
--SELECT get_user_order_total(1, 1);

--SELECT *
--from  product_orders
--from items
--from users

