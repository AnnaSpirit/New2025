Plan d'exécution

Étape -- Objectif
1 -- Créer le serveur Express (app.js)
2 -- Créer un tableau d’emojis (emojis.js)
3 -- Créer la route /api/question pour envoyer 1 emoji + 4 choix	
4 -- Créer la page HTML avec le formulaire (index.html)	
5 -- Envoyer la réponse avec POST /api/guess	
6 -- Vérifier si c'est correct et mettre à jour le score	
7 -- Afficher score et feedback	
8 -- Ajouter le leaderboard (leaderboard.json)


Fonctionnalités de base

🎯 Page HTML avec un emoji à deviner + plusieurs options
🔁 Chaque round : un emoji aléatoire + 3 mauvaises réponses (donc 4 choix)
🧠 L'utilisateur choisit une réponse et soumet via un formulaire POST
✅ Express reçoit la réponse, vérifie si c’est juste, met à jour le score
🥇 Score affiché en direct + Leaderboard en bas
🗂️ Tout est en mémoire (ou JSON simple)

STRUCTURE PROJET

emoji-game/
├── data/
│   └── emojis.js       ✅ Tableau des emojis
├── public/
│   └── style.css       ✅ Pour rendre ça joli
├── views/
│   └── index.html      ✅ Formulaire + interface
├── leaderboard.json    ✅ Stockage des scores
├── app.js              ✅ Serveur Express
