-- Database: bootcamp

-- DROP DATABASE IF EXISTS bootcamp;

-- CREATE DATABASE bootcamp
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'fr-FR'
--     LC_CTYPE = 'fr-FR'
--     LOCALE_PROVIDER = 'libc'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

-- CREATE TABLE students(
-- stud_id SERIAL PRIMARY KEY,
-- stud_f_name VARCHAR (50) NOT NULL,
-- stud_l_name VARCHAR (100) NOT NULL,
-- stud_birthday DATE NOT NULL
-- )
----Insert data--------------------------------------------------------
-- INSERT INTO students (stud_f_name, stud_l_name, stud_birthday)  
-- VALUES ('Marc','Benichou','22/11/1998'),
-- ('Yoan', 'Cohen','03/12/2010'), 
-- ('Lea', 'Benichou','27/07/1987'), 
-- ('Amelia', 'Dux','07/04/1996'), 
-- ('David', 'Grez','14/06/2003'), 
-- ('Omer', 'Simpson','03/10/1980');

-- INSERT INTO students (stud_f_name, stud_l_name, stud_birthday)  
-- VALUES ('Anna','LEVY','06/03/1987')

----Select---------------------------------------------------------------

----1.Fetch all of the data from the table
-- SELECT * FROM students;
----2. Fetch all of the students first_names and last_names.
-- SELECT stud_l_name, stud_l_name FROM students;
----3.For the following questions, only fetch the first_names and last_names of the students.
----3.1.Fetch the student which id is equal to 2.
-- SELECT stud_l_name, stud_f_name FROM students WHERE stud_id =2;  --Cohen Yoan
----3.2.Fetch the student whose last_name is Benichou AND first_name is Marc.
-- SELECT stud_l_name, stud_f_name FROM students WHERE stud_l_name ='Benichou' AND stud_f_name='Marc';
----3.3. Fetch the students whose last_names are Benichou OR first_names are Marc.
-- SELECT stud_l_name, stud_f_name FROM students WHERE stud_l_name ='Benichou' OR stud_f_name='Marc';
----3.4. Fetch the students whose first_names contain the letter a
-- SELECT stud_l_name, stud_f_name FROM students WHERE stud_f_name LIKE '%a%'
----3.5.Fetch the students whose first_names start with the letter a
-- SELECT stud_l_name, stud_f_name FROM students WHERE stud_f_name LIKE 'a%'
-- SELECT stud_l_name, stud_f_name FROM students WHERE stud_f_name LIKE 'A%'
-- SELECT stud_l_name, stud_f_name FROM students WHERE stud_f_name ILIKE 'a%'  --sans distinction de Casse
----3.6.Fetch the students whose first_names end with the letter a.
-- SELECT stud_l_name, stud_f_name FROM students WHERE stud_f_name ILIKE '%a'
----3.7. Fetch the students whose second to last letter of their first_names are a (Example: Leah)
-- SELECT stud_l_name, stud_f_name FROM students WHERE stud_f_name ILIKE '__a%'
--3.8. Fetch the students whose id’s are equal to 1 AND 3
-- SELECT  stud_l_name, stud_f_name FROM students WHERE stud_id = 1 OR stud_id = 3;
-- SELECT  stud_l_name, stud_f_name FROM students WHERE stud_id IN (1,3);
----4.Fetch the students whose birth_dates are equal to or come after 1/01/2000.
-- SELECT * FROM students WHERE stud_birthday >= '2000-01-01';


------NOTE: dans la clause LIKE, le %  remplace zéro ou plusieurs caractères, le symbole _ est utilisé pour remplacer exactement un seul caractère
------ un A à la 3eme lettre: LIKE '__a%'  2 _ pour les 2 lettres