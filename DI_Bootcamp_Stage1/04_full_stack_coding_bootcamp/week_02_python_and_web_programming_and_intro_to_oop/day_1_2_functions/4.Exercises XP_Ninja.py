# #EXERCICE: 1 : What’s your name ?
# Instructions
#     Write a function called get_full_name() that takes three arguments: 1: first_name, 2: middle_name 3: last_name.
#     middle_name should be optional, if it’s omitted by the user, the name returned should only contain the first and the last name.

# For example, get_full_name(first_name="john", middle_name="hooker", last_name="lee") will return John Hooker Lee.
# But get_full_name(first_name="bruce", last_name="lee") will return Bruce Lee.

# def get_full_name(first_name, last_name, middle_name=None):
#     # On met en majuscule la première lettre de chaque partie du nom
#     first_name = first_name.capitalize()
#     last_name = last_name.capitalize()

#     # Si le prénom du milieu est fourni, on le capitalise et on assemble les trois
#     if middle_name:
#         middle_name = middle_name.capitalize()
#         return f"{first_name} {middle_name} {last_name}"
#     else:
#         # Sinon, on ne renvoie que prénom + nom
#         return f"{first_name} {last_name}"

# print(get_full_name(first_name="john", middle_name="hooker", last_name="lee"))
# #RESULT: John Hooker Lee

# print(get_full_name(first_name="bruce", last_name="lee"))
# #RESULT: Bruce Lee


#EXERCICE: 2 : From English to Morse
# Instructions
# Write a function that converts English text to morse code and another one that does the opposite.
# Hint: Check the internet for a translation table, every letter is separated with a space and every word is separated with a slash /.


# Dictionnaire de traduction texte <=> morse
# @LINK: https://morsecode.world/international/morse.html
# MORSE_CODE_DICT = {
#     'A': '.-',     'B': '-...',   'C': '-.-.',   'D': '-..',
#     'E': '.',      'F': '..-.',   'G': '--.',    'H': '....',
#     'I': '..',     'J': '.---',   'K': '-.-',    'L': '.-..',
#     'M': '--',     'N': '-.',     'O': '---',    'P': '.--.',
#     'Q': '--.-',   'R': '.-.',    'S': '...',    'T': '-',
#     'U': '..-',    'V': '...-',   'W': '.--',    'X': '-..-',
#     'Y': '-.--',   'Z': '--..',
#     '1': '.----',  '2': '..---',  '3': '...--',  '4': '....-',
#     '5': '.....',  '6': '-....',  '7': '--...',  '8': '---..',
#     '9': '----.',  '0': '-----',
#     ',': '--..--', '.': '.-.-.-', '?': '..--..', '/': '-..-.',
#     '-': '-....-', '(': '-.--.',  ')': '-.--.-', ' ': '/'
# }

# # Inverser le dictionnaire pour la fonction inverse
# MORSE_CODE_REVERSE_DICT = {value: key for key, value in MORSE_CODE_DICT.items()}

# # Fonction pour convertir du texte vers du morse
# def text_to_morse(text):
#     text = text.upper()
#     morse = []
#     for char in text:
#         if char in MORSE_CODE_DICT:
#             morse.append(MORSE_CODE_DICT[char])
#         else:
#             morse.append('?')  # Pour les caractères inconnus
#     return ' '.join(morse)

# # Fonction pour convertir du morse vers du texte
# def morse_to_text(morse_code):
#     words = morse_code.split(' / ')
#     decoded_words = []

#     for word in words:
#         letters = word.split()
#         decoded_letters = [MORSE_CODE_REVERSE_DICT.get(letter, '?') for letter in letters]
#         decoded_words.append(''.join(decoded_letters))

#     return ' '.join(decoded_words)

# print(text_to_morse("Hello Python World"))
# #RESULT: .... . .-.. .-.. --- / .--. -.-- - .... --- -. / .-- --- .-. .-.. -..

# print(morse_to_text(".... . .-.. .-.. --- / .--. -.-- - .... --- -. / .-- --- .-. .-.. -.."))
# #RESULT: HELLO PYTHON WORLD


# EXERCICE: 3 : Box of stars
# Instructions
# Write a function named box_printer that takes any amount of strings (not in a list) and prints them, one per line, in a rectangular frame.

# def box_printer(*args, indent=10):
#     max_length = max(len(word) for word in args)
#     border = '*' * (max_length + 4)
#     space = ' ' * indent  # décalage horizontal

#     lines = [space + border]
    
#     for word in args:
#         lines.append(space + f'* {word.ljust(max_length)} *')
    
#     lines.append(space + border)
    
#     return '\n'.join(lines)

# print(box_printer("Hello", "World", "in", "reallylongword", "a", "frame"))
# # #RESULT:
# # **************
# # * Hello      *
# # * World      *
# # * in         *    
# # * reallylongword *
# # * a          *
# # **************


#OTHER:

# def box_printer(*args, indent=10, padding=1):
#     # Longueur du mot le plus long
#     max_length = max(len(word) for word in args)

#     # Largeur totale : mot + padding gauche + padding droite
#     total_width = max_length + padding * 2

#     # Ligne du haut et du bas (bordure)
#     border = '*' * (total_width + 2)  # +2 pour les étoiles de chaque côté
#     space = ' ' * indent

#     # Construction de la boîte
#     lines = [space + border]
#     for word in args:
#         line = f"*{' ' * padding}{word.ljust(max_length)}{' ' * padding}*"
#         lines.append(space + line)
#     lines.append(space + border)

#     return '\n'.join(lines)


# print(box_printer("Hello", "World", "in", "reallylongword", "a", "frame"))


#EXERCICE: 4 : What is the purpose of this code?

# Analyse this code before executing it. What is the purpose of this code?

def insertion_sort(alist):
   for index in range(1,len(alist)):
#     
        # On parcourt la liste à partir du deuxième élément. On suppose que tout ce qui est à gauche de l’élément courant est déjà trié.

     currentvalue = alist[index]
     position = index

        # On garde en mémoire la valeur courante à insérer (currentvalue), et on note sa position.

     while position>0 and alist[position-1]>currentvalue:
         alist[position]=alist[position-1]
         position = position-1

        #Tant que la valeur précédente est plus grande, on la décale à droite pour faire de la place. C’est ce décalage qui donne le nom "insertion".

     alist[position]=currentvalue

        #Quand on a trouvé la bonne position, on insère la valeur.

alist = [54,26,93,17,77,31,44,55,20]
insertion_sort(alist)
print(alist)

#NOTE: to sort a list of numbers in place with insertion comes out. Best case: o(n) (list already sorted) Worse case: o(n²) (reverse list) Advantage: simple to understand, works of course on small lists.
