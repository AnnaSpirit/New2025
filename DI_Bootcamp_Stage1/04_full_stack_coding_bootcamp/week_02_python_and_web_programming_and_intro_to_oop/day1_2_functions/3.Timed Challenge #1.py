def count_character_occurrence():
    # Demande à l'utilisateur d'entrer une chaîne de caractères
    text = input("Enter a string: ")

    # Demande à l'utilisateur d'entrer un caractère (on prend seulement le 1er au cas où il en met plusieurs)
    char = input("Enter a character to count: ")[0]

    # On compte combien de fois le caractère apparaît dans le texte
    count = text.count(char)

    # On affiche le résultat
    print(f"The character '{char}' appears {count} times in the string.")

count_character_occurrence()

#OTHER: test
# On peut aussi faire ça avec une fonction lambda
# count_char = lambda s, c: s.count(c)
# text = input("Enter a string: ")
# char = input("Enter a character to count: ")[0]

# print(f"The character '{char}' appears {count_char(text, char)} times in the string.")
