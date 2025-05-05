------DAILY CHALLENGE - SQL PUZZLE ------------------------------------------------------------

-----COURSE: Rappel important sur le comportement de NOT IN avec les NULL :
---Quand une sous-requête utilisée dans un opérateur NOT IN renvoie au moins une valeur NULL, 
---la comparaison avec tout une valeur non NULL retourne le résultat "UNKNOWN" en SQL (logique à trois valeurs).
---Seules les conditions évaluées à TRUE sont prises en compte dans la clause WHERE.


---Q1. What will be the OUTPUT of the following statement?
---A1. COUNT(*) = 0
-- SELECT COUNT(*) 
-- FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )

---Q2. What will be the OUTPUT of the following statement?
---A2. COUNT(*) = 2 (ft.id = 6 and 7)
-- SELECT COUNT(*) 
-- FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )

---Q3. What will be the OUTPUT of the following statement?
---A3. COUNT(*) = 0. 
-- SELECT COUNT(*) 
-- FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )

---Q4. What will be the OUTPUT of the following statement?
--A4. COUNT(*) = 2. (ft.id =6 and 7)
-- SELECT COUNT(*) 
-- FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )

----------------------------------------------------------------------------------------------
---REFLEXION: 
--Q1 = 
-- SELECT COUNT(*) 
-- FROM FirstTab AS ft 
-- WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )
-- =>
-- SELECT id FROM SecondTab WHERE id IS NULL
-- =>WHERE ft.id NOT IN ({NULL})

-- Pour ft.id = 5: L'expression 5 NOT IN ({NULL}) est évaluée en comparant 5 = NULL qui donne UNKNOWN.
-- Pour ft.id = 6: L'expression 5 NOT IN ({NULL}) est évaluée en comparant 6 = NULL qui donne UNKNOWN.
-- Pour ft.id = 7: L'expression 5 NOT IN ({NULL}) est évaluée en comparant 7 = NULL qui donne UNKNOWN.
---- Aucune ligne ne renvoie TRUE (puisque UNKNOWN n'est pas considéré comme TRUE).


--Q2 = 
-- SELECT COUNT(*) 
-- FROM FirstTab AS ft 
-- WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )
-- =>
-- SELECT id FROM SecondTab WHERE id = 5
-- =>
-- WHERE ft.id NOT IN ({5})
-- Pour ft.id = 5 : 5 NOT IN ({5}) est FALSE (5 est dans la liste).
-- Pour ft.id = 6 : 6 NOT IN ({5}) est TRUE.
-- Pour ft.id = 7 : 7 NOT IN ({5}) est TRUE.
-- Pour ft.id = NULL : La comparaison NULL NOT IN ({5}) donne UNKNOWN.
-- --Les lignes avec 6 et 7 satisfont la condition


