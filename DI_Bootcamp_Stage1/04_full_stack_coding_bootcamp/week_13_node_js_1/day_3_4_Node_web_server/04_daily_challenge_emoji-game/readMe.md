****ENGLISH VERSION****

# 🎯 Emoji Guessing Game - Daily Challenge

## 📋 Description

An interactive emoji guessing game developed with Express.js. Players must guess the correct name of an emoji from several given options.

## 🎮 Basic Exercise Instructions

### Initial Goal

Create a fun emoji guessing game using an Express API.
The game displays a random emoji and a set of options. Players must guess the correct emoji name from the given choices.

### Basic Requirements

* ✅ Set up an Express server to manage the game
* ✅ Create an array of emoji objects (emoji + corresponding name)
* ✅ Generate a random emoji and select incorrect options
* ✅ Present the player with the emoji and multiple-choice options via a form
* ✅ Allow the player to submit their answer (POST with Fetch API)
* ✅ Check if the answer is correct and update the score
* ✅ Provide player feedback (correct/incorrect)
* ✅ Continue presenting new emojis
* ✅ Track the player’s total score
* ✅ Implement a leaderboard to display the top scores

### Example of basic emojis

```javascript
const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    // More emoji objects...
];
```

## 🚀 Advanced Features Added

### ✨ Implemented Improvements

#### 🎚️ **Difficulty System**

* **Easy Mode**: 1 point per correct answer, options visible
* **Hard Mode**: 3 points per correct answer, all options hidden (e.g. `h_pp_`)
* **Tools used**: JavaScript (conditions, DOM manipulation)

#### 👤 **Custom Player System**

* Player name input
* Persistent individual scores
* **Tools used**: Express.js (validation), File System (JSON storage)

#### 🏆 **Advanced Leaderboard**

* Persistent ranking in `leaderboard.json`
* Display of top 5 players
* Scores saved between sessions
* **Tools used**: Node.js fs module, JSON manipulation

#### 🎮 **Game Controls**

* **Restart Button**: Restart with confirmation
* **Stop & Export Button**: Stop the game and export results
* **Tools used**: JavaScript (event listeners, confirmations)

#### 📥 **Multi-Format Export System**

1. **JSON Export**: Structured data with metadata
2. **PNG Export**: Graphical leaderboard image with medals
3. **PDF-style Export**: High-quality report-style image

* **Tools used**: Canvas API, Blob API, URL.createObjectURL()

#### 🎨 **Modern User Interface**

* Responsive design with organized sections
* CSS visual effects and animations
* Customizable background
* Buttons with gradients and 3D effects
* **Tools used**: CSS3 (flexbox, gradients, animations, media queries)

#### 🔧 **Technical Features**

* Full error handling
* Debug logs
* Server-side data validation
* **Tools used**: Express.js middleware, error handling

## 🛠️ Technologies Used

### Frontend

* **HTML5**: Semantic structure
* **CSS3**: Modern styles, animations, responsive design
* **JavaScript (Vanilla)**: Client-side logic, Canvas API, Fetch API

### Backend

* **Node.js**: JavaScript runtime
* **Express.js**: Web framework, API routes
* **File System (fs)**: Data persistence

### APIs and Tools

* **Canvas API**: Image generation for export
* **Blob API**: Binary file handling
* **Fetch API**: Client-server communication
* **JSON**: Data format and storage

## 📁 Project Structure

```
04_daily_challenge_emoji-game/
├── 📄 app.js                 # Main Express server
├── 📄 package.json           # npm dependencies
├── 📄 leaderboard.json       # Score storage
├── 📁 data/
│   └── 📄 emojis.js          # Emoji database
├── 📁 public/                # Static files
│   ├── 📄 script.js          # Client logic
│   ├── 📄 style.css          # CSS styles
│   └── 🖼️ bck_smile.jpg      # Custom background
└── 📁 views/
    └── 📄 index.html         # User interface
```

## 🚀 Installation & Launch

### Prerequisites

* Node.js installed
* npm or yarn

### Steps

1. **Clone/Download** the project
2. **Install dependencies**:

   ```bash
   npm install express
   ```
3. **Run the server**:

   ```bash
   node app.js
   ```
4. **Open in browser**:

   ```
   http://localhost:5000
   ```

## 🎯 How to Play

1. **Enter your name** in the input field
2. **Choose the difficulty** (Easy or Hard)
3. **Look at the displayed emoji**
4. **Click the correct answer** among the options
5. **Your score** will be displayed and saved automatically
6. **Check the leaderboard** to see your ranking

### Game Modes

* **Easy**: Readable options, 1 point per correct answer
* **Hard**: Hidden options (e.g. `h_pp_` for "happy"), 3 points per correct answer

## 📊 Export Features

Click **"🛑 Stop Game & Export"** to export the leaderboard:

1. **JSON**: Data file with metadata
2. **PNG**: Colorful image with medals for top players
3. **PDF-style**: Professional high-resolution report image

## 🏆 Scoring System

* **Easy Mode**: +1 point per correct answer
* **Hard Mode**: +3 points per correct answer
* **Automatic save** in the leaderboard
* **Real-time ranking** of the top 5 players

## 🎨 Customization

To change the background:

1. Place your image in `/public/`
2. Edit `style.css` line 3:

   ```css
   background-image: url("your-image.jpg");
   ```

## 🔄 Advanced Features vs. Basic Instructions

| Feature                 | Basic | Added | Tools               |
| ----------------------- | ----- | ----- | ------------------- |
| Express Server          | ✅     | ✅     | Express.js          |
| Emoji Array             | ✅     | ✅     | JavaScript          |
| Random Options          | ✅     | ✅     | Math.random()       |
| Form/Choices            | ✅     | ✅     | HTML/CSS            |
| POST with Fetch         | ✅     | ✅     | Fetch API           |
| Answer Check            | ✅     | ✅     | Express validation  |
| User Feedback           | ✅     | ✅     | DOM manipulation    |
| Score Tracking          | ✅     | ✅     | JSON persistence    |
| Leaderboard             | ✅     | ✅     | File System         |
| **Difficulty Modes**    | ❌     | ✅     | JavaScript, CSS     |
| **Player Names**        | ❌     | ✅     | Express, validation |
| **Score Persistence**   | ❌     | ✅     | fs module, JSON     |
| **Multi-Format Export** | ❌     | ✅     | Canvas API, Blob    |
| **Modern Interface**    | ❌     | ✅     | CSS3, animations    |
| **Custom Background**   | ❌     | ✅     | CSS background      |
| **Advanced Controls**   | ❌     | ✅     | Event listeners     |

---

Step — Goal
1 — Create the Express server (`app.js`)
2 — Create an emoji array (`emojis.js`)
3 — Create `/api/question` route to send 1 emoji + 4 choices
4 — Create HTML page with form (`index.html`)
5 — Send answer with POST `/api/guess`
6 — Check correctness and update score
7 — Display score and feedback
8 — Add leaderboard (`leaderboard.json`)

### Basic Features

🎯 HTML page with an emoji to guess + multiple choices
🔁 Each round: 1 random emoji + 3 wrong answers (total 4 choices)
🧠 User selects an answer and submits via POST form
✅ Express checks correctness, updates score
🥇 Score displayed live + leaderboard below
🗂️ All stored in memory (or simple JSON)

### Project Structure

emoji-game/
├── data/
│   └── emojis.js       ✅ Emoji array
├── public/
│   └── style.css       ✅ Styling
├── views/
│   └── index.html      ✅ Form + interface
├── leaderboard.json    ✅ Score storage
├── app.js              ✅ Express server

---
## 👨‍💻 Developers:
**AnnaSpirit**


***FRENCH VERSION****
# 🎯 Emoji Guessing Game - Daily Challenge

## 📋 Description

Un jeu de devinettes d'emojis interactif développé avec Express.js. Les joueurs doivent deviner le nom correct d'un emoji parmi plusieurs options proposées.

## 🎮 Instructions de l'exercice de base

### Objectif initial
Créer un jeu de devinettes d'emojis amusant en utilisant une API Express.
Le jeu présente aux joueurs un emoji aléatoire et un ensemble d'options. Les joueurs doivent deviner le nom correct de l'emoji parmi les options données.

### Exigences de base
- ✅ Configurer un serveur Express pour gérer le jeu
- ✅ Créer un tableau d'objets emoji (emoji + nom correspondant)
- ✅ Générer un emoji aléatoire et sélectionner des options incorrectes
- ✅ Présenter le joueur avec l'emoji et les choix multiples via un formulaire
- ✅ Permettre au joueur de soumettre sa réponse (POST avec Fetch API)
- ✅ Vérifier si la réponse est correcte et mettre à jour le score
- ✅ Fournir un feedback au joueur (correct/incorrect)
- ✅ Continuer à présenter de nouveaux emojis
- ✅ Suivre le score total du joueur
- ✅ Implémenter un classement pour afficher les meilleurs scores

### Exemple d'emojis de base
```javascript
const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    // Plus d'objets emoji...
];
```

## 🚀 Fonctionnalités avancées ajoutées

### ✨ Améliorations implémentées

#### 🎚️ **Système de difficulté**
- **Mode Easy** : 1 point par bonne réponse, options visibles
- **Mode Hard** : 3 points par bonne réponse, toutes les options masquées (ex: `h_pp_`)
- **Outils utilisés** : JavaScript (conditions, manipulation DOM)

#### 👤 **Système de joueurs personnalisés**
- Saisie du nom du joueur
- Scores individuels persistants
- **Outils utilisés** : Express.js (validation), File System (stockage JSON)

#### 🏆 **Leaderboard avancé**
- Classement persistant dans `leaderboard.json`
- Affichage des top 5 joueurs
- Scores sauvegardés entre les sessions
- **Outils utilisés** : Node.js fs module, JSON manipulation

#### 🎮 **Contrôles de jeu**
- **Bouton Restart** : Recommencer avec confirmation
- **Bouton Stop & Export** : Arrêter et exporter les résultats
- **Outils utilisés** : JavaScript (event listeners, confirmations)

#### 📥 **Système d'export multi-format**
1. **Export JSON** : Données structurées avec métadonnées
2. **Export PNG** : Image graphique du classement avec médailles
3. **Export PDF-style** : Image haute qualité format rapport
- **Outils utilisés** : Canvas API, Blob API, URL.createObjectURL()

#### 🎨 **Interface utilisateur moderne**
- Design responsive avec sections organisées
- Effets visuels et animations CSS
- Background personnalisable
- Boutons avec gradients et effets 3D
- **Outils utilisés** : CSS3 (flexbox, gradients, animations, media queries)

#### 🔧 **Fonctionnalités techniques**
- Gestion d'erreurs complète
- Logs de debugging
- Validation des données côté serveur
- **Outils utilisés** : Express.js middleware, error handling

## 🛠️ Technologies utilisées

### Frontend
- **HTML5** : Structure sémantique
- **CSS3** : Styles modernes, animations, responsive design
- **JavaScript (Vanilla)** : Logique client, Canvas API, Fetch API

### Backend
- **Node.js** : Runtime JavaScript
- **Express.js** : Framework web, routes API
- **File System (fs)** : Persistance des données

### APIs et outils
- **Canvas API** : Génération d'images pour l'export
- **Blob API** : Manipulation de fichiers binaires
- **Fetch API** : Communication client-serveur
- **JSON** : Format de données et stockage

## 📁 Structure du projet

```
04_daily_challenge_emoji-game/
├── 📄 app.js                 # Serveur Express principal
├── 📄 package.json           # Dépendances npm
├── 📄 leaderboard.json       # Stockage des scores
├── 📁 data/
│   └── 📄 emojis.js          # Base de données des emojis
├── 📁 public/                # Fichiers statiques
│   ├── 📄 script.js          # Logique client
│   ├── 📄 style.css          # Styles CSS
│   └── 🖼️ bck_smile.jpg      # Background personnalisé
└── 📁 views/
    └── 📄 index.html         # Interface utilisateur
```

## 🚀 Installation et lancement

### Prérequis
- Node.js installé
- npm ou yarn

### Étapes
1. **Cloner/télécharger** le projet
2. **Installer les dépendances** :
   ```bash
   npm install express
   ```
3. **Lancer le serveur** :
   ```bash
   node app.js
   ```
4. **Ouvrir dans le navigateur** :
   ```
   http://localhost:5000
   ```

## 🎯 Comment jouer

1. **Entrez votre nom** dans le champ prévu
2. **Choisissez la difficulté** (Easy ou Hard)
3. **Regardez l'emoji** affiché
4. **Cliquez sur la bonne réponse** parmi les options
5. **Votre score** s'affiche et se sauvegarde automatiquement
6. **Consultez le classement** pour voir votre position

### Modes de jeu
- **Easy** : Options lisibles, 1 point par bonne réponse
- **Hard** : Options masquées (ex: `h_pp_` pour "happy"), 3 points par bonne réponse

## 📊 Fonctionnalités d'export

Cliquez sur "🛑 Stop Game & Export" pour exporter le classement :

1. **JSON** : Fichier de données avec métadonnées
2. **PNG** : Image colorée avec médailles pour le podium
3. **PDF-style** : Rapport professionnel en image haute résolution

## 🏆 Système de scoring

- **Mode Easy** : +1 point par bonne réponse
- **Mode Hard** : +3 points par bonne réponse
- **Sauvegarde automatique** dans le leaderboard
- **Classement en temps réel** des 5 meilleurs joueurs

## 🎨 Personnalisation

Pour changer le background :
1. Placez votre image dans `/public/`
2. Modifiez `style.css` ligne 3 :
   ```css
   background-image: url("votre-image.jpg");
   ```

## 🔄 Fonctionnalités avancées vs. Instructions de base

| Fonctionnalité | Base | Ajoutée | Outils |
|---|---|---|---|
| Serveur Express | ✅ | ✅ | Express.js |
| Array d'emojis | ✅ | ✅ | JavaScript |
| Options aléatoires | ✅ | ✅ | Math.random() |
| Formulaire/choix | ✅ | ✅ | HTML/CSS |
| POST avec Fetch | ✅ | ✅ | Fetch API |
| Vérification réponse | ✅ | ✅ | Express validation |
| Feedback utilisateur | ✅ | ✅ | DOM manipulation |
| Score tracking | ✅ | ✅ | JSON persistence |
| Leaderboard | ✅ | ✅ | File System |
| **Modes de difficulté** | ❌ | ✅ | JavaScript, CSS |
| **Noms de joueurs** | ❌ | ✅ | Express, validation |
| **Persistance scores** | ❌ | ✅ | fs module, JSON |
| **Export multi-format** | ❌ | ✅ | Canvas API, Blob |
| **Interface moderne** | ❌ | ✅ | CSS3, animations |
| **Background custom** | ❌ | ✅ | CSS background |
| **Contrôles avancés** | ❌ | ✅ | Event listeners |

---

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

---
## 👨‍💻 Developers:
**AnnaSpirit**


Post for__LINKEDIN___

Built a dynamic Emoji Guessing Game with Node.js, Express.js, HTML5, CSS3, and Vanilla JavaScript, featuring real-time scoring, difficulty modes, and a persistent leaderboard. Designed a sleek, responsive UI with animations, custom backgrounds, and multi-format exports (JSON, PNG, PDF-style) via Canvas API & Blob API — blending clean code with playful interactivity.