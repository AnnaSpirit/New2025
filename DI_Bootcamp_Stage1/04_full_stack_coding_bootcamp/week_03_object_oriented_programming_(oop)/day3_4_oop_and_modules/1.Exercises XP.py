# #EXERCICE: 1: Currencies
# # Instructions
# class Currency:
#     def __init__(self, currency, amount):
#         self.currency = currency
#         self.amount = amount

#     # Using the code above, implement the relevant methods and dunder methods which will output the results below.
#     # Hint : When adding 2 currencies which don’t share the same label you should raise an error.
# # >>> c1 = Currency('dollar', 5)
# # >>> c2 = Currency('dollar', 10)
# # >>> c3 = Currency('shekel', 1)
# # >>> c4 = Currency('shekel', 10)
# # >>> str(c1)
# # '5 dollars'
# # >>> int(c1)
# # 5
# # >>> repr(c1)
# # '5 dollars'
# # >>> c1 + 5
# # 10
# # >>> c1 + c2
# # 15
# # >>> c1 
# # 5 dollars
# # >>> c1 += 5
# # >>> c1
# # 10 dollars
# # >>> c1 += c2
# # >>> c1
# # 20 dollars
# # >>> c1 + c3
# # TypeError: Cannot add between Currency type <dollar> and <shekel>


# class Currency:
#     def __init__(self, currency, amount):
#         # Initialisation de l'instance avec le nom de la devise et le montant.
#         self.currency = currency
#         self.amount = amount

#     def __str__(self):
#         # Méthode appelée pour obtenir la représentation en chaîne de caractères de l'objet.
#         # Si le montant est égal à 1, on n'ajoute pas de "s" à la devise.
#         if self.amount == 1:
#             return f"{self.amount} {self.currency}"
#         # Pour tout autre montant, on ajoute un "s" pour indiquer le pluriel.
#         return f"{self.amount} {self.currency}s"

#     # On définit __repr__ de la même manière que __str__ pour la représentation officielle de l'objet.
# #NOTE: En Python, __repr__ est généralement utilisé pour obtenir une représentation non ambiguë de l'objet, mais dans ce cas, on souhaite que les deux méthodes retournent la même chose. La méthode __str__ définit comment l'objet est affiché sous forme de chaîne. **Si le montant est 1, on affiche par exemple "1 dollar". Sinon, on affiche avec un "s" en fin, par exemple "5 dollars". *La méthode __repr__ est assignée à __str__ pour que la représentation officielle soit identique.
    
#     __repr__ = __str__

#     def __int__(self):
#         # Méthode permettant de convertir l'objet en entier (retourne simplement le montant). Ainsi, int(c1) renvoie la valeur de c1.amount.
#         return self.amount

#     def __add__(self, other):
#         # Méthode pour gérer l'addition avec un autre objet ou un entier.
#         # Si "other" est un entier, on ajoute cet entier au montant de l'objet.
#         if isinstance(other, int):
#             return self.amount + other
#         # Si "other" est une instance de Currency, on vérifie que la devise est identique.
#         elif isinstance(other, Currency):
#             if self.currency != other.currency:
#                 # Si les devises sont différentes, on lève une exception avec le message approprié.
#                 raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
#             # Si les devises sont identiques, on additionne les montants.
#             return self.amount + other.amount
#         # Pour tout autre type, on retourne NotImplemented.
#         return NotImplemented

#     def __radd__(self, other):
#         # Cette méthode permet de supporter l'addition dans l'ordre inverse : entier + Currency.
#         # On délègue simplement à la méthode __add__.
#         return self.__add__(other)

#     def __iadd__(self, other):
#         # Méthode pour l'addition en place (avec l'opérateur +=).
#         if isinstance(other, int):
#             # Si "other" est un entier, on ajoute directement à l'attribut "amount".
#             self.amount += other
#         elif isinstance(other, Currency):
#             # Si "other" est une instance de Currency, on vérifie que les devises sont identiques.
#             if self.currency != other.currency:
#                 raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
#             # Si les devises sont identiques, on ajoute le montant de l'autre objet.
#             self.amount += other.amount
#         else:
#             return NotImplemented
#         # On retourne l'objet modifié.
#         return self

# #Test des classes et méthodes

# c1 = Currency('dollar', 5)
# c2 = Currency('dollar', 10)
# c3 = Currency('shekel', 1)
# c4 = Currency('shekel', 10)

# print(str(c1))
# #RESULT: 5 dollars
# print(int(c1))
# #RESULT: 5
# print(repr(c1))
# #RESULT: 5 dollars

# print(c1 + 5)
# #RESULT: 10 (addition 5+5)
# print(c1 + c2)
# #RESULT: 15 (addition de 2 meme devise 5+10)

# c1 += 5
# print(c1)
# #RESULT: 10 dollars

# c1 += c2
# print(c1)
# #RESULT: 20 dollars

# c1+= c3
# print(c1)
# #RESULT: ... TypeError: Cannot add between Currency type <dollar> and <shekel>...
# # # L'addition de c1 et c3 lève une exception car les devises sont différentes


#EXERCICE: 2: Import
# Instructions:     In a file named func.py create a function that sum 2 numbers, and prints the result
#     In a file named exercise_one.py import the function and call it to print the result
# Hint: You can use the the following syntaxes:

# import module_name OR from module_name import function_name OR from module_name import function_name as fn OR import module_name as mn

#NOTE: Dans ce fichier, nous importons la fonction définie dans func.py et nous l'utilisons pour afficher le résultat de l'addition de deux nombres.
# # Importation de la fonction sum_two_numbers directement depuis le module func.
# from func import sum_two_numbers

# # Appel de la fonction avec deux nombres (par exemple 5 et 3)
# sum_two_numbers(5, 3)

#COURSE: 
# Toutes ces syntaxes fonctionnent correctement pour importer du code, mais le choix dépend souvent de la clarté, de la lisibilité et du contexte dans lequel vous travaillez. Voici quelques points à considérer :

# ⁂ Importation complète (ex : import func) :
# Cette syntaxe importe le module entier. Vous devez alors utiliser le nom du module comme préfixe (ex : func.sum_two_numbers(5, 3)). Cela évite les conflits de noms et rend clair d'où provient chaque fonction, ce qui est utile dans les projets plus grands.

# ⁂ Importation spécifique (ex : from func import sum_two_numbers) :
# Cette syntaxe importe directement la fonction désirée, ce qui permet de l'appeler sans préfixe. Elle est idéale si vous n'avez besoin que de quelques éléments du module. Attention toutefois à ne pas polluer l'espace de noms si vous importez trop de fonctions.

# ⁂ Importation avec alias (ex : import func as f ou from func import sum_two_numbers as stn) :
# ⁂ Utiliser un alias peut raccourcir le nom du module ou de la fonction, ce qui peut améliorer la lisibilité dans certains cas, surtout pour des modules avec des noms longs ou très utilisés (par exemple, import numpy as np).

# En résumé, le choix est souvent guidé par la préférence personnelle, la taille du projet et les conventions de codage (comme le PEP8 pour Python). Dans des projets collaboratifs, il est important de rester cohérent avec les conventions de l'équipe ou du projet.

#EXERCICE: 3: String module
# Instructions : Generate random String of length 5
#     Note: String must be the combination of the UPPER case and lower case letters only. No numbers and a special symbol.
#     Hint: use the string module

# import string  # Module string est utilisé pour accéder à ascii_letters, qui inclut toutes les lettres en majuscules et minuscules.
# import random  # Module pour générer des nombres et sélections aléatoires

# letters = string.ascii_letters
# #regroupe toutes les lettres de l'alphabet en minuscules et majuscules. Cela garantit qu'il n'y a ni chiffres ni symboles spéciaux.

# # random.choices sélectionne k éléments (ici 5) aléatoirement dans la séquence 'letters'
# random_string = ''.join(random.choices(letters, k=5))

# print(random_string)

# #Test de la longueur de la chaîne générée
# #RESULT: tJiRu (ou autre combinaison aléatoire de 5 lettres)


#EXERCICE: 4 : Current Date
# Instructions : Create a function that displays the current date.
# Hint : Use the datetime module.

import datetime  # Module pour travailler avec les dates et heures

def display_current_date():
    """
    Cette fonction récupère et affiche la date actuelle.
    """
    # Récupère la date d'aujourd'hui sous forme d'objet date (année, mois, jour)
    current_date = datetime.date.today()
    
    # Affiche la date actuelle au format 'YYYY-MM-DD'
    print("The current date is :", current_date)

# Appel de la fonction pour afficher la date
display_current_date()

#RES
#RESULT: The current date is : 2025-04-03

#EXERCICE: 5 :Amount of time left until January 1st
# Instructions: Create a function that displays the amount of time left from now until January 1st.
#     (Example: the 1st of January is in 10 days and 10:34:01hours).

def time_until_january_first():
    """
    Cette fonction calcule et affiche le temps restant depuis l'instant actuel jusqu'au prochain 1er janvier.
    """
    # Récupération de la date et de l'heure actuelles
    now = datetime.datetime.now()
    
    # Définition de la date cible : 1er janvier de l'année prochaine.
    # On ajoute toujours 1 à l'année actuelle pour viser le prochain 1er janvier.
    target = datetime.datetime(year=now.year + 1, month=1, day=1)
    
    # Calcul de la différence entre la date cible et l'instant présent. La différence entre 2 objets (ici dates) est un objet timedelta qui contient le nombre de jours et le nombre de secondes.
    difference = target - now
    
    # Récupération du nombre de jours complets restant
    days = difference.days
    
    # Pour les heures, minutes et secondes restantes, on travaille sur difference.seconds
    # On divise le nombre total de secondes par 3600 (le nombre de secondes dans une heure).
    hours = difference.seconds // 3600
    # On prend le reste des secondes après avoir enlevé les heures et on le divise par 60.
    minutes = (difference.seconds % 3600) // 60
    # Le reste des secondes après avoir enlevé les heures et les minutes.
    seconds = difference.seconds % 60
    
    # Affichage du résultat formaté avec des zéros devant les nombres d'heures, minutes et secondes si nécessaire
    print(f"January 1st is in {days} days and {hours: 02d}: {minutes: 02d}: {seconds: 02d} hours.")

# Appel de la fonction pour afficher le temps restant à partir du moment où la fonction est exécutée.
time_until_january_first()

# RESULT: January 1st is in 272 days and  2:  45:  44 hours.

#EXERCICE: 6 : Birthday and minutes
# Instructions : Create a function that accepts a birthdate as an argument (in the format of your choice), then displays a message stating how many minutes the user lived in his life.
#LINK: https://github.com/AnnaSpirit/New2025/blob/5187ff4a9a46b6aa609a7474e62b75832af4aa4d/DI_Bootcamp_Stage1/04-Full-Stack%20Coding%20Bootcamp/1%20Week%20-%20Python%20and%20Web%20Programming/3%2B4D%20-%20List%2C%20iterating%20and%20formatting%20data/5.Daily%20challengeGOLD-%20Happy%20Birthday.py#L62

def minutes_lived(birthdate_str):
    """
    Cette fonction accepte une date de naissance sous forme de chaîne de caractères au format "DD/MM/YYYY". Elle calcule et affiche le nombre de minutes vécues depuis cette date jusqu'au moment actuel.
    """
    # Conversion de la chaîne de caractères en objet datetime en utilisant le format "DD/MM/YYYY"
    birthdate = datetime.datetime.strptime(birthdate_str, "%d/%m/%Y")
    
    # Récupération de la date et de l'heure actuelles
    now = datetime.datetime.now()
    
    # Calcul de la différence de temps entre le moment actuel et la date de naissance
    time_difference = now - birthdate
    
    # Conversion de la différence totale en minutes
    minutes = int(time_difference.total_seconds() // 60)
    
    # Conversion de la différence totale en heures
    hours = int(time_difference.total_seconds() // 3600)
    
    # Affichage du résultat
    # print(f"You lived about {minutes} minutes.")
    print (f"You lived about {minutes} minutes = {hours} hours.")

#Test de la fonction avec une date de naissance (ex: 5 avril 1990)
minutes_lived("05/04/1990")

#RESULT: You lived about 185,000 minutes.
#RESULT: You lived about 18407367 minutes = 306789 hours.



#EXERCICE:7 : Faker Module
# Instructions : Install the faker module, and take a look at the documentation and learn how to properly implement faker in your code.
#     Create an empty list called users. Tip: It should be a list of dictionaries.
#     Create a function that adds new dictionaries to the users list. Each user has the following keys: name, adress, langage_code. Use faker to populate them with fake data.

# USE pip install faker 
#REVIEW: How to use pip: 
            # Voici les étapes détaillées pour installer n'importe quel package via pip, par exemple le module Faker :

            # Vérifier l'installation de Python et pip :

            # Ouvrez votre terminal (sur Windows, utilisez l'invite de commandes ou PowerShell).

            # Tapez la commande suivante pour vérifier que pip est installé :

                # pip --version
            # Vous devriez voir une sortie indiquant la version de pip, par exemple pip 23.0.1 from .... Si pip n'est pas installé, vous pouvez généralement l'installer avec :

                # python -m ensurepip --upgrade
            
            # Pour installer un package, utilisez la commande pip install suivie du nom du package. Par exemple, pour installer Faker, tapez :

            # pip install faker
            # Pip se connectera alors au dépôt PyPI, téléchargera le package et l'installera dans votre environnement Python.

            # Mettre à jour pip (optionnel) :

            # Il est parfois utile de mettre à jour pip avant d'installer de nouveaux packages. Vous pouvez le faire avec :

            # pip install --upgrade pip
            # Utiliser un environnement virtuel (optionnel mais recommandé) :

            # Pour éviter des conflits entre différentes versions de packages ou pour garder votre projet organisé, il est recommandé d'utiliser un environnement virtuel.

            # Vérifier l'installation du package :

            # Une fois installé, vous pouvez tester l'importation du package dans une console Python :

            # from faker import Faker
            # fake = Faker()
            # print(fake.name())
            # Si cela fonctionne sans erreur, le package est bien installé.

import faker  # Importation du module faker pour générer des données factices
#INFO: il est utiliser pour trouver des nom en anglais-US. Pour des noms en francais il faut ajouter: 
from faker import Faker
# # Création d'une instance de Faker avec la locale française
# fake = Faker('fr_FR')
# # Génération et affichage d'un nom en français
# print(fake.name())

# Création d'une instance de Faker pour générer des données factices
fake = Faker()

# Création d'une liste vide qui servira à stocker les dictionnaires représentant chacun un utilisateur.
users = []

def add_user():
    """
    Cette fonction génère des données factices pour un utilisateur et l'ajoute à la liste 'users'.
    Chaque utilisateur est représenté par un dictionnaire comportant les 3 clés :
    - name : le nom complet de l'utilisateur
    - adress : l'adresse complète (attention, ici le nom de la clé est 'adress' conformément aux instructions)
    - langage_code : un code de langue aléatoire
    """
    user = {
        "name": fake.name(),
# Génère un nom complet aléatoire
        "adress": fake.address(),
# Génère une adresse factice (⁉️ name of the key is "adress" as specified in the statement)
        "langage_code": fake.language_code()  # Génère un code de langue aléatoire (par exemple 'en', 'fr', etc.)
    }
    users.append(user)  # Ajoute le dictionnaire user à la liste users

# Exemple : ajout de 5 utilisateurs factices
for _ in range(5):
    add_user()

# Affichage de la liste des utilisateurs
for user in users:
    print(user)
    
#RESULT: {'name': 'Sandra Grant', 'adress': '599 William Lights\nNathanport, WA 76048', 'langage_code': 'bs'}
# {'name': 'Gregory Larson', 'adress': '5111 Kramer Groves Apt. 040\nWest Krystalborough, MD 87820', 'langage_code': 'ast'}
# {'name': 'Melinda Garrison', 'adress': '283 Ramirez River\nNew Billyberg, MH 87342', 'langage_code': 'ga'}
# {'name': 'Eric Nelson', 'adress': '3146 Miller Lake\nPort Frankchester, ID 64025', 'langage_code': 'ro'}
# {'name': 'Andrew Flores', 'adress': '3297 Joshua Mount\nRiosfort, LA 20165', 'langage_code': 'tig'}