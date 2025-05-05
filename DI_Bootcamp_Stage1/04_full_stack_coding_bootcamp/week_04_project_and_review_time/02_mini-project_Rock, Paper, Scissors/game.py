import random
# NOTE: Ce fichier (ou module) doit contenir une classe nommée Game. Elle doit comporter 4 méthodes :

# get_user_item(self)
# Cette méthode demande à l’utilisateur de choisir un objet parmi pierre, papier ou ciseaux. Tant que l’utilisateur ne choisit pas correctement, on continue de le questionner (validation des données et boucle, quoi !). Finalement, la méthode renvoie l’item choisi.

# get_computer_item(self)
# Ici, c’est au tour de l’ordinateur de jouer : il sélectionne aléatoirement pierre, papier ou ciseaux en utilisant la fonction random.choice() de Python (n’hésite pas à te renseigner en ligne pour en savoir plus). La méthode renvoie l’item choisi.

# get_game_result(self, user_item, computer_item)
# Cette méthode détermine le résultat du jeu en comparant les choix de l’utilisateur et de l’ordinateur.
# Paramètres :

# user_item : l’item choisi par l’utilisateur (pierre, papier ou ciseaux)

# computer_item : l’item choisi par l’ordinateur (pierre, papier ou ciseaux)
# Elle renvoie soit win, draw, ou loss :

# win : l’utilisateur gagne
# draw : match nul (les deux ont choisi la même option)
# loss : l’utilisateur perd
# play(self)
# C’est la méthode qu’on appellera de l’extérieur (par exemple depuis rock-paper-scissors.py). Elle effectue 3 actions :

# Récupérer le choix de l’utilisateur (pierre, papier ou ciseaux) et le mémoriser.
# Récupérer un choix aléatoire pour l’ordinateur et le mémoriser.
# Comparer les deux choix pour déterminer le résultat du jeu.

# Ensuite, elle affiche un message du genre :
# « Tu as choisi pierre. L’ordinateur a choisi papier. Tu perds ! » ou
# « Tu as choisi ciseaux. L’ordinateur a choisi ciseaux. Match nul ! »

# Enfin, elle renvoie le résultat du jeu sous forme de chaîne de caractères : win, draw, ou loss.

import random

class Game:
    def get_user_item(self):
        # Mapping des choix numériques vers les items avec leur emoji
        mapping = {'1': ('rock', '🪨'), '2': ('paper', '📄'), '3': ('scissors', '✂️')}
        list_choice = list(mapping.keys())  # ['1', '2', '3']
        user_choice = ''
        while user_choice not in list_choice:
            user_choice = input("Chose 1 (rock 🪨), 2 (paper 📄) or 3 (scissors ✂️) : ")
        # On retourne l’item et son emoji correspondant
        return mapping[user_choice]

    def get_comp_item(self):
        # Même mapping pour l'ordinateur
        mapping = {'1': ('rock', '🪨'), '2': ('paper', '📄'), '3': ('scissors', '✂️')}
        comp_choice = random.choice(list(mapping.keys()))
        return mapping[comp_choice]

    def get_game_result(self, user_item, comp_item):
        # Conditions pour déterminer le résultat du jeu
        if (user_item == 'rock' and comp_item == 'scissors') or \
            (user_item == 'scissors' and comp_item == 'paper') or \
            (user_item == 'paper' and comp_item == 'rock'):
            return 'won'
        elif (comp_item == 'rock' and user_item == 'scissors') or \
        (comp_item == 'scissors' and user_item == 'paper') or \
        (comp_item == 'paper' and user_item == 'rock'):
            return 'lost'
        else:
            return 'drew'

    def play(self):
        user_item, user_emoji = self.get_user_item()
        comp_item, comp_emoji = self.get_comp_item()
        result = self.get_game_result(user_item, comp_item)
        
        # Mapping pour ajouter un emoji selon le résultat
        result_emojis = {'won': '🏆', 'lost': '😞', 'drew': '😐'}
        result_emoji = result_emojis.get(result, '')
        
        print(f"You chose {user_item} {user_emoji} and the computer chose {comp_item} {comp_emoji}. You have {result} {result_emoji}!")
        return result

