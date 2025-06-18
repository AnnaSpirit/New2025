Explication rapide du JS (avant les fichiers)
On attend que l’utilisateur remplisse les 4 champs (2 villes).

On utilise fetch() deux fois, chaque appel retourne une Promise.

On regroupe ces deux Promises avec Promise.all().

Quand les deux sont résolues → on affiche les heures de lever du soleil.