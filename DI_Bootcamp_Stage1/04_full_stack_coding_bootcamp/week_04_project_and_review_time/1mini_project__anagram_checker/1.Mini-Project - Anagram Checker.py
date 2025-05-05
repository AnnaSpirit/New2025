import os  # Import du module os pour les fonctions liées au système d'exploitation si nécessaire
from collections import Counter  # Import de Counter pour compter facilement la fréquence des lettres

class AnagramChecker:
    def __init__(self) -> None:
        # Ouvre le fichier contenant la liste de mots et lit chaque ligne dans une liste
        with open(r'E:\New2025\DI_Bootcamp_Stage1\04-Full-Stack Coding Bootcamp\4 Week - Project and Review Time\1.Mini-Project - Anagram Checker\words_list.txt', encoding='utf-8') as f:
            word_list = f.read().splitlines()  # Découpe le contenu du fichier en lignes (chaque ligne correspond à un mot)
        
        # Crée un dictionnaire où chaque clé est le mot en majuscules et la valeur est un Counter de ses lettres
        self.word_dict = {word.upper(): Counter(word.upper()) for word in word_list}
    
    def is_valid_word(self, word: str):
        # Vérifie si le mot est composé d'un seul mot (sans espaces) et si le premier caractère est une lettre
        if len(word.split()) > 1 or not word[0].isalpha():
            raise TypeError("Invalid word")  # Lève une erreur si le mot n'est pas valide
        else:
            return True  # Retourne True si le mot est valide
        
    def get_anagrams(self, word: str):
        # Convertit le mot en majuscules pour assurer une comparaison homogène
        word = word.upper()
        
        # Valide le mot en utilisant la méthode is_valid_word
        self.is_valid_word(word)
        
        # Crée un dictionnaire pour compter la fréquence de chaque lettre dans le mot
        # (Cette boucle crée manuellement un dictionnaire de fréquence pour le mot)
        this_word = {}
        for index in range(len(word)):
            this_word[word[index]] = word.count(word[index])
        # Remarque : on pourrait également utiliser Counter(word) pour obtenir le même résultat
        
        anagrams = []  # Initialise une liste vide pour stocker les anagrammes
        
        # Parcourt chaque mot du dictionnaire chargé
        for dico in self.word_dict:
            # Compare la fréquence des lettres du mot courant avec celle du mot entré
            if self.word_dict[dico] == this_word:
                anagrams.append(dico)  # Si elles correspondent, ajoute le mot à la liste des anagrammes
        
        return anagrams  # Retourne la liste des anagrammes trouvés
        
    def is_anagram(self, word1: str, word2: str):
        # Vérifie si word2 (converti en majuscules) se trouve dans la liste des anagrammes de word1
        return word2.upper() in self.get_anagrams(word1.upper())

# Création d'une instance d'AnagramChecker
anagram_checker = AnagramChecker()

# Demande à l'utilisateur de saisir un mot pour lequel trouver les anagrammes
asked_word = input("Enter a word to find its anagrams: ")

# Récupère la liste des anagrammes pour le mot saisi
anagrams = anagram_checker.get_anagrams(asked_word)

# Affiche le résultat : la liste des anagrammes pour le mot spécifié par l'utilisateur
print("The anagrams of", asked_word, "are:", anagrams)

