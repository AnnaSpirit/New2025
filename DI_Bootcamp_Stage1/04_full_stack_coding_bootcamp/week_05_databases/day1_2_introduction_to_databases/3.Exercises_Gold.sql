----Exercise XP Gold-----

----1.Fetch the first four students. You have to order the four students alphabetically by last_name.
-- SELECT * FROM students;

-- SELECT stud_l_name, stud_f_name, stud_birthday FROM students ORDER BY stud_l_name ASC LIMIT 4;

----2. Fetch the details of the youngest student. ---MAX pour obtenir la date la plus récente (donc le plus jeune étudiant).

-- SELECT stud_l_name, stud_f_name, stud_birthday FROM students ORDER BY stud_birthday DESC LIMIT 1; --Cohen Yoan

-- SELECT stud_l_name, stud_f_name, stud_birthday FROM students WHERE stud_birthday = (SELECT MAX(stud_birthday) FROM students);

----3. Fetch three students skipping the first two students.

-- SELECT stud_l_name, stud_f_name, stud_birthday FROM students LIMIT 3 OFFSET 2;



