-- SELECT *
-- FROM public.language;
-- SELECT
--     f.title,
--     f.description,
--     l.name AS language_name
-- FROM public.film AS f
-- JOIN public.language AS l
--     ON f.language_id = l.language_id;

-- SELECT
--     f.title,
--     f.description,
--     l.name AS language_name
-- FROM public.language AS l
-- LEFT JOIN public.film AS f
--     ON f.language_id = l.language_id;

-- SELECT * FROM public.new_film;

-- INSERT INTO public.new_film (name)
-- VALUES
--     ('Space Croissant'),
--     ('Debugging Love'),
--     ('The Last Commit');


-- SELECT * FROM public.new_film;

-- CREATE TABLE public.customer_review (
--     review_id SERIAL PRIMARY KEY,
--     film_id INT NOT NULL,
--     language_id INT NOT NULL,
--     title VARCHAR(255) NOT NULL,
--     score INT NOT NULL CHECK (score BETWEEN 1 AND 10),
--     review_text TEXT NOT NULL,
--     last_update TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
--     CONSTRAINT fk_customer_review_film
--         FOREIGN KEY (film_id)
--         REFERENCES public.new_film (id)
--         ON DELETE CASCADE,
--     CONSTRAINT fk_customer_review_language
--         FOREIGN KEY (language_id)
--         REFERENCES public.language (language_id)
-- );
-- --
----SELECT * FROM public.customer_review;
--
--SELECT * FROM public.new_film;
--SELECT * FROM public.language;
--
--SELECT table_name
--FROM information_schema.tables
--WHERE table_schema = 'public';
--

--SELECT * FROM public.customer_review;

--SELECT * FROM public.new_film;

--SELECT * FROM public.language;
--
--INSERT INTO public.customer_review
--(film_id, language_id, title, score, review_text)
--VALUES
--(1, 1, 'A buttery sci-fi delight', 9,
-- 'Unexpected, funny, and oddly emotional. Croissant approved.'),
--(2, 1, 'Love, bugs and commits', 8,
-- 'A heartfelt story about debugging life and code at the same time.');


--SELECT * FROM public.customer_review;

--DELETE FROM public.new_film
--WHERE id = 1;

--SELECT * FROM public.customer_review;

--ANSWER EXO: When a film is deleted from the new_film table, all related reviews in the customer_review table are automatically deleted because of the ON DELETE CASCADE foreign key constraint.





