Ce que ça couvre (check-list rapide)
✅ Serveur Express qui sert le front (/public) et expose des routes API :

GET /api/questions → renvoie les questions sans les bonnes réponses.

POST /api/answer → vérifie la réponse et renvoie feedback immédiat.

POST /api/score + GET /api/leaderboard → leaderboard en mémoire (optionnel avancé).

✅ Front HTML/CSS/JS séparé.

✅ Une question à la fois, bouton Submit, feedback direct (vert/rouge), Next, Restart.

✅ Score suivi côté client et score final affiché.

✅ Timer par question (20s par défaut) ⏳.

✅ Types de questions : MCQ, True/False, Text (remplir).

✅ Messages UI en anglais (et commentaires/code bilingues).

✅ Noms de fichiers minuscules + underscores, indentations 4 espaces, petite dose d’humour 😄.