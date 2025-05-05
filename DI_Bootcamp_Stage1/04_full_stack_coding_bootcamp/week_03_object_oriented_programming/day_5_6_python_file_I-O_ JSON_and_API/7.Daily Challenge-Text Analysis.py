#EXERCICE: Daily challenge : Text Analysis
# Instructions :
# The goal of the exercise is to create a class that will help you analyze a specific text. A text can be just a simple string, like “Today, is a happy day” or it can be an external text file.
#
# Part I
# First, we will analyze a simple string, like “A good book would sometimes cost as much as a good house.”
#     Create a class called Text that takes a string as an argument and store the text in a attribute.
#     Hint: You need to manually copy-paste the text, straight into the code
#     Implement the following methods:
#         a method to return the frequency of a word in the text (assume words are separated by whitespace) return None or a meaningful message.
#         a method that returns the most common word in the text.
#         a method that returns a list of all the unique words in the text.

# Part II
#     Then, we will analyze a text coming from an external text file. Download the_stranger.txt file.
#     Implement a classmethod that returns a Text instance but with a text file:
# Text.from_file('the_stranger.txt')
# Hint: You need to open and read the text from the text file.
#     Now, use the provided the_stranger.txt file and try using the class you created above.

# Bonus:
#     Create a class called TextModification that inherits from Text.
#     Implement the following methods:
#         a method that returns the text without any punctuation.
#         a method that returns the text without any english stop-words (check out what this is !!).
#         a method that returns the text without any special characters.

# Note: Instead of creating a child class, you could also implements those methods as static methods in the Text class.
# Note: Feel free to implement/create any attribute, method or function needed to make this work, be creative

#EXERCICE: Part I
from collections import Counter
import os
import re
import string


class Text:
    def __init__(self, text):
        self.text = text

    # AJOUT : Méthode de classe pour créer une instance à partir d'un fichier 
    @classmethod
    
    def from_file(cls, filename):
        # Récupère le répertoire du script actuel
        script_dir = os.path.dirname(os.path.abspath(__file__))
        # Construit le chemin complet vers le fichier
        file_path = os.path.join(script_dir, filename)
        # Ouvre et lit le contenu du fichier
        with open(file_path, "r", encoding="utf-8") as file:
            text = file.read()
        # Retourne une nouvelle instance de Text avec le texte converti en minuscules
        return cls(text.lower())
    #
# NOTE: Dans une méthode de classe, cls est une convention pour désigner la classe elle-même. Cela fonctionne de manière similaire à self dans une méthode d'instance, sauf qu'ici on travaille avec la classe.

    def frequency(self, word):
        # Utilise split() sans argument pour gérer tous les espaces blancs
        list_text = self.text.split()
        word_counter = Counter(list_text)
        print(word_counter[word])
    
    def most_commun(self):
        list_text = self.text.split()
        word_counter = Counter(list_text)
        # Combine les valeurs et clés pour obtenir des tuples (compte, mot),
        # puis récupère le mot avec le plus grand compte
        most_common = max(zip(word_counter.values(), word_counter.keys()))[1]
        print(most_common)

#NOTE: word_counter.values() et word_counter.keys() : Ces méthodes renvoient respectivement la liste des fréquences (comptes) des mots et la liste des mots eux-mêmes, obtenus avec Counter.

#NOTE: zip(word_counter.values(), word_counter.keys()): La fonction zip combine ces deux listes en une séquence de tuples, chacun ayant la forme (nombre_d_occurrences, mot). Par exemple, si le mot "the" apparaît 1949 fois, il y aura un tuple (1949, 'the')

    def all_unique(self):
        list_text = self.text.split()
        word_counter = Counter(list_text)
        unique_words = [key for key, value in word_counter.items() if value == 1]
        print(unique_words)

# -------------------- Partie I --------------------
# Utilisation avec un texte en dur
text = Text('A good book would sometimes cost as much as a good house'.lower())
# text.frequency('the')
#RESULT: 0
# text.most_commun()
#RESULT: good
# text.all_unique()
#RESULT: ['book', 'would', 'sometimes', 'cost', 'much', 'house']

# -------------------- Partie II --------------------
# Création d'une instance à partir du fichier grâce à la méthode de classe
text2 = Text.from_file('the_stranger.txt')
# text2.frequency('the')
# RESULT: 2071
# text2.most_commun()
# RESULT: the
# text2.all_unique()
# RESULT: !!too long...!!

# -------------------- Bonus --------------------
#ajout import: re, string

# Création de la classe TextModification héritant de Text
class TextModification(Text):
    # Méthode qui retourne le texte sans aucune ponctuation.
    def remove_punctuation(self):
        # Crée une table de traduction pour supprimer tous les signes de ponctuation
        translator = str.maketrans('', '', string.punctuation)
        return self.text.translate(translator)
    
    # Méthode qui retourne le texte sans les stop-words en anglais.
    def remove_stopwords(self):
        # Définir une liste minimale de stop-words en anglais
        stop_words = {
            'the', 'a', 'an', 'and', 'or', 'but', 'if', 'while', 'with',
            'without', 'of', 'in', 'on', 'at', 'to', 'for', 'by', 'is',
            'are', 'was', 'were', 'this', 'that', 'it'
        }
        # Découpe le texte en mots et filtre ceux qui ne sont pas dans stop_words
        words = self.text.split()
        filtered_words = [word for word in words if word not in stop_words]
        return ' '.join(filtered_words)
    
    # Méthode qui retourne le texte sans aucun caractère spécial.
    def remove_special_characters(self):
        # Utilise une expression régulière pour ne garder que les lettres, chiffres et espaces
        return re.sub(r'[^a-zA-Z0-9\s]', '', self.text)
    
# ---- Nouvelle méthode : Supprimer tous les espaces ----
    def remove_spaces(self):
        # Cette méthode retourne le texte sans aucun espace
        return self.text.replace(" ", "")
    
    # Nouvelle méthode combinée pour obtenir uniquement les lettres sans stop-words, ponctuation,
    # caractères spéciaux et espaces.
    def clean_text(self):
        # On part du texte d'origine
        text = self.text
        
        # 1. Supprimer la ponctuation
        translator = str.maketrans('', '', string.punctuation)
        text = text.translate(translator)
        
        # 2. Supprimer les caractères spéciaux (on ne garde que les lettres et espaces)
        text = re.sub(r'[^a-zA-Z\s]', '', text)
        
        # 3. Supprimer les stop-words
        stop_words = {
            'the', 'a', 'an', 'and', 'or', 'but', 'if', 'while', 'with',
            'without', 'of', 'in', 'on', 'at', 'to', 'for', 'by', 'is',
            'are', 'was', 'were', 'this', 'that', 'it'
        }
        words = text.split()
        text = ' '.join(word for word in words if word not in stop_words)
        
        # 4. Supprimer tous les espaces
        text = text.replace(" ", "")
        
        return text
    
# Test du bonus

# Création d'une instance de TextModification en utilisant la méthode de classe from_file
text_mod = TextModification.from_file('the_stranger.txt')

# print("Texte sans ponctuation:")
# print(text_mod.remove_punctuation())

# print("\nTexte sans stop-words:")
# print(text_mod.remove_stopwords())

# print("\nTexte sans caractères spéciaux:")
# print(text_mod.remove_special_characters())

# print("\nTexte sans espaces:")
# print(text_mod.remove_spaces())

#OTHER: Nouvelle méthode combinée pour obtenir uniquement les lettres sans stop-words, ponctuation, caractères spéciaux et espaces.

# print("\nTexte nettoyé (clean_text) :")
cleaned_text = text_mod.clean_text()  # Cette ligne définit cleaned_text
# print(text_mod.clean_text())


# Boucle pour compter le nombre d'apparitions des lettres formant "CAMUS"
print("\nFrequency of letters (C, A, M, U, S) in the cleaned text: ")
for lettre in "camus":
    compte = cleaned_text.count(lettre)
    print(f"{lettre.upper()} : {compte}")