-- CREATE DATABASE Practice;

-- CREATE TABLE Users(
-- 	id SERIAL Primary Key,
-- 	name char(30),
-- 	username char(30),
-- 	email char(30),
-- 	address text,
-- 	phone char(30),
-- 	website char(30),
-- 	company char(50)
-- );

-- SELECT * from Users;

-- DROP Table Users;

-- INSERT INTO Users VALUES (
-- 	101, 
-- 	'Kalpana Upadhyay', 
-- 	'Kalpana98', 
-- 	'k.u@tcs.com',
-- 	'Silly Street, 4/4, Abu-Road, 307510',
-- 	'9999999999',
-- 	'http://www.ku.com',
-- 	'TCS Group'
-- );

-- INSERT INTO Users VALUES (
-- 	102, 
-- 	'abc', 
-- 	'abc1', 
-- 	'abc@tcs.com', 
-- 	'Random',
-- 	'8888888888',
-- 	'http://www.abc.com',
-- 	'Random Group'
-- );

-- INSERT INTO Users VALUES (103, 'pqr', 'pqr1', 'pqr@tcs.com', 'Anything','7777777777','http://www.pqr.com','Random Group');



-- CREATE DATABASE Practice;

-- CREATE TYPE address_type as (
-- 	street char(30),
-- 	suite char(30),
-- 	city char(30),
-- 	zipcode char(20),
-- 	geo TEXT []	
-- );

-- CREATE TYPE company_type as (
-- 	name char(30),
-- 	catchPhrase char(50),
-- 	bs char(50)
-- );

-- CREATE TABLE Users(
-- 	id SERIAL Primary Key,
-- 	name char(30),
-- 	username char(30),
-- 	email char(30),
-- 	address address_type,
-- 	phone char(30),
-- 	website char(30),
-- 	company company_type
-- );

SELECT * from Users;

-- INSERT INTO Users VALUES (
-- 	101, 
-- 	'Kalpana Upadhyay', 
-- 	'Kalpana98', 
-- 	'k.u@tcs.com', 
-- 	ROW('Silly Street','4/4','Abu-Road','307510',ARRAY['24.8918','21.8984']),
-- 	'9999999999',
-- 	'http://www.ku.com',
-- 	ROW('TCS Group','Configurable multimedia task-force','generate enterprise e-tailers')
-- );

-- INSERT INTO Users VALUES (
-- 	102, 
-- 	'abc', 
-- 	'abc1', 
-- 	'abc@tcs.com', 
-- 	ROW('Random','4/4','Random','307511',ARRAY['100.8918','101.8984']),
-- 	'8888888888',
-- 	'http://www.abc.com',
-- 	ROW('TCS Group','Random','Random')
-- );

-- INSERT INTO Users VALUES (103, 'pqr', 'pqr1', 'pqr@tcs.com', ROW('Anything','2/3','Anything','444444',ARRAY['1.8918','1.8984']),'7777777777','http://www.pqr.com',ROW('Random Group','Anything','Anything'));