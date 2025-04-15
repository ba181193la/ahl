SELECT * FROM customers
LIMIT 20;

SELECT * FROM customers
LIMIT 20 OFFSET 20;

SELECT * from products
	
SELECT MIN(price)
FROM products;

SELECT MAX(price)
FROM products;

SELECT MIN(price) as loest_price FROM products;

SELECT *  FROM customers;

SELECT COUNT(customer_id)  FROM customers;

SELECT COUNT(customer_id) as customer FROM customers;

SELECT COUNT(customer_id) as customer_count FROM customers WHERE city = 'London';
