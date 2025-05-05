# from googletrans import Translator

# # Démarrer le traducteur
# translator = Translator()

# # liste des mots en français
# french_words = ["Bonjour", "Au revoir", "Bienvenue", "A bientôt", "Merci", "S'il vous plaît", "Excusez-moi", "Comment ça va?", "Je suis désolé", "Oui", "Non"]

# # Créer le dictionnaire pour stocker les traductions
# translations = {}

# # Traduction de chaque mot de français vers anglais
# for word in french_words:
#     translated = translator.translate(word, src='fr', dest='en')
#     translations[word] = translated.text

# # Afficher les traductions
# print("French to English Translations:")
# print(translations)


#FIXME: [FR] googletrans utilise le module cgi via sa dépendance httpx, et ce module était présent dans les versions antérieures de Python. Avec Python 3.13, ce module n'est plus disponible, ce qui entraîne l'erreur que vous rencontrez. Pour utiliser googletrans sans ce problème, il faut utiliser une version de Python (comme 3.10 ou 3.11) qui inclut encore le module cgi. Vous pouvez également envisager d'utiliser une autre bibliothèque de traduction qui n'a pas cette dépendance: pip install deep-translator [EN] Googletrans uses the CGI module via its HTTPX dependence, and this module was present in the previous versions of Python. With Python 3.13, this module is no longer available, which leads to the error you encounter. To use Googletrans without this problem, use a python version (like 3.10 or 3.11) which still includes the CGI module. You can also consider using another translation library that does not have this dependence: Pip Install Deep-Translator

from deep_translator import GoogleTranslator

# Liste des mots en français
french_words = [
    "Bonjour", "Au revoir", "Bienvenue", "A bientôt", "Merci", 
    "S'il vous plaît", "Excusez-moi", "Comment ça va?", "Je suis désolé", "Oui", "Non"
]

# Dictionnaire pour stocker les traductions
translations = {}

# Traduction de chaque mot du français vers l'anglais
for word in french_words:
    translated_text = GoogleTranslator(source='fr', target='en').translate(word)
    translations[word] = translated_text

# Afficher chaque couple sur une nouvelle ligne
print("French to English Translations:")
for french, english in translations.items():
    print(f"{french} : {english}")

