import os
from collections import Counter

class AnagramChecker:
    def __init__(self) -> None:
        with open(r'E:\New2025\DI_Bootcamp_Stage1\04-Full-Stack Coding Bootcamp\4 Week - Project and Review Time\1.Mini-Project - Anagram Checker\words_list.txt', encoding='utf-8') as f:
            word_list = f.read().splitlines()
        self.word_dict = {word.upper(): Counter(word.upper()) for word in word_list}

    def is_valid_word(self, word: str):
        if len(word.split()) > 1 or not word[0].isalpha():
            raise TypeError("Invalid word")
        else:
            return True
        
    def get_anagrams(self, word: str):
        word = word.upper()
        this_word = {}
        for index in range(len(word)):
            this_word[word[index]] = word.count(word[index])
        anagrams = []
        for dico in self.word_dict:
            if self.word_dict[dico] == this_word:
                anagrams.append(dico)
        return anagrams

    def is_anagram(self, word1: str, word2: str):
        return word2.upper() in self.get_anagrams(word1.upper())

anagram_checker = AnagramChecker()
asked_word = "listen"
user_asked_word = input ("Enter a word to find its anagrams:")
anagrams = anagram_checker.get_anagrams(asked_word)
user_anagrams = anagram_checker.get_anagrams(user_asked_word)

print(anagrams)
#RESULT: ['ELINTS', 'ENLIST', 'INLETS', 'INTELS', 'LISTEN', 'SILENT', 'TINSEL']
print(user_anagrams)
#RESULT: (with python )['PHYTON', 'PYTHON', 'TYPHON']

#----------------------------------------------
#OTHER: Improves with GPT advises: 
# • On utilise Counter pour compter les lettres d'un mot, ce qui améliore la performance et simplifie le code.
# • Les mots sont convertis en majuscules dès leur lecture afin d'assurer une comparaison cohérente.
# • La méthode is_valid_word vérifie que le mot contient uniquement des lettres (au lieu de vérifier seulement le premier caractère).
# • Une gestion d'erreur est ajoutée pour la lecture du fichier.

# import os
# from collections import Counter

# class AnagramChecker:
#     def __init__(self) -> None:
#         try:
#             with open(r'E:\New2025\DI_Bootcamp_Stage1\04-Full-Stack Coding Bootcamp\4 Week - Project and Review Time\1.Mini-Project - Anagram Checker\words_list.txt', encoding='utf-8') as f:
#                 word_list = f.read().splitlines()
#         except FileNotFoundError:
#             raise FileNotFoundError("Le fichier words_list.txt est introuvable.")
        
#         # Stockage des mots en majuscules pour une comparaison homogène et utilisation de Counter pour compter les lettres
#         self.word_dict = {word.upper(): Counter(word.upper()) for word in word_list if word}
    
#     def is_valid_word(self, word: str) -> bool:
#         # Vérifie que le mot est unique (pas d'espaces) et composé uniquement de lettres
#         if len(word.split()) > 1 or not word.isalpha():
#             raise ValueError("Mot invalide : le mot doit être composé uniquement de lettres et être unique.")
#         return True
        
#     def get_anagrams(self, word: str):
#         word = word.upper()
#         # Validation du mot
#         self.is_valid_word(word)
#         word_counter = Counter(word)
#         # Récupère les mots dont le compteur de lettres est identique à celui du mot donné
#         anagrams = [w for w, counter in self.word_dict.items() if counter == word_counter]
#         return anagrams

#     def is_anagram(self, word1: str, word2: str) -> bool:
#         # Vérifie si word2 est un anagramme de word1
#         return word2.upper() in self.get_anagrams(word1.upper())

# anagram_checker = AnagramChecker()
# asked_word = "listen"
# anagrammes = anagram_checker.get_anagrams(asked_word)

# print (f"Anagrams of '{asked_word}': {anagrammes}")
# #RESULT: Anagrams of 'listen': ['ELINTS', 'ENLIST', 'INLETS', 'INTELS', 'LISTEN', 'SILENT', 'TINSEL']