# EXERCICE: Daily challenge: Solve the Matrix --Given a “Matrix” string:

# 7ii
# Tsx
# h%?
# i #
# sM 
# $a 
# #t%
# ^r!

# Matrix: A matrix is a two-dimensional array. It is a grid of numbers arranged in rows and columns.
# To reproduce the grid, the matrix should be a 2D list, not a string


# To decrypt the matrix, Neo reads each column from top to bottom, starting from the leftmost column, selecting only the alpha characters and connecting them. Then he replaces every group of symbols between two alpha characters by a space.

# Using his technique, try to decode this matrix.

# Hints:
# Use
#  lists for storing data ✅
#  Loops for going through the data ✅
#  if/else statements to check the data ✅
#  String for the output of the secret message ✅

#NOTE: Définition de la chaîne représentant la "Matrix"

#INFO: Les triples guillemets (""" ou ''') en Python servent à définir une chaîne de caractères multi-lignes.

matrix_str = """7ii
Tsx
h%?
i #
sM 
$a 
#t%
^r!"""

#NOTE: Étape 1 : Transformer la chaîne en une matrice (liste de listes)
lignes = matrix_str.splitlines()  # Séparation en lignes
matrice = [list(ligne) for ligne in lignes]  # Conversion de chaque ligne en liste de caractères

#RESULT: ['7ii', 'Tsx', 'h%?', 'i #', 'sM ', '$a ', '#t%', '^r!']

#NOTE: Affichage de la matrice 2D pour vérification
print("Matrice 2D:")
for ligne in matrice:
    print(ligne)

#RESULT: ['7', 'i', 'i'], ['T', 's', 'x'], ['h', '%', '?'], ['i', ' ', '#'], ['s', 'M', ' '], ['$','a',' '], ['#','t','%'], ['^','r','!']

#NOTE: Récupérer le nombre de lignes et de colonnes
nombre_lignes = len(matrice)
nombre_colonnes = len(matrice[0]) if nombre_lignes > 0 else 0

#RESULT: 8, 3

#NOTE: Étape 2 : Déchiffrer le message en parcourant la matrice colonne par colonne
message = ""  # Variable pour stocker le message final

#NOTE: Parcourir chaque colonne de gauche à droite
for col in range(nombre_colonnes):
    colonne_message = ""  # Message temporaire pour la colonne actuelle
    group_symbol = False  # Indicateur pour détecter un groupe de symboles entre deux lettres
    # Parcourir chaque ligne (de haut en bas) pour la colonne courante
    for ligne in range(nombre_lignes):
        caractere = matrice[ligne][col]
        if caractere.isalpha():
            # Si un groupe de symboles a été rencontré avant une lettre, ajouter un espace
            if group_symbol and colonne_message != "":
                colonne_message += " "
                group_symbol = False  # Réinitialiser l'indicateur
            colonne_message += caractere
        else:
            # Dès qu'on rencontre un symbole après avoir ajouté une lettre, on active l'indicateur
            if colonne_message != "":
                group_symbol = True
    #NOTE: Concaténer le message de cette colonne au message final suivi d'un espace
    message += colonne_message + " "

#RESULT: Message décrypté: This is Matr ix

#NOTE: Étape 3 : Nettoyer le message et corriger "Matr ix"
message = message.strip()                 # enlever l'espace final
message = message.replace("Matr ix", "Matrix")  # correction
print("\nMessage décrypté :")
print(message)
