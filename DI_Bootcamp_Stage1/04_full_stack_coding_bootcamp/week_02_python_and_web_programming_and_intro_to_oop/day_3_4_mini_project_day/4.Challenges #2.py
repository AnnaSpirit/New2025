#EXERCICE: 1: drawing
#1
def draw_triangle_pattern(number_of_lines):
    # Parcourir chaque ligne de 1 à n
    for line in range(1, number_of_lines + 1):
        # Calculer le nombre d'espaces à gauche
        spaces = number_of_lines - line
        
        # Calculer le nombre d'étoiles pour cette ligne
        stars = 2 * line - 1
        
        # Afficher la ligne complète : espaces + étoiles
        print(" " * spaces + "*" * stars)

#Test de la fonction
draw_triangle_pattern(3)

#RESULT:
#    *
#   ***
#  *****
#2
def draw_right_aligned_stairs(number_of_lines):
    # Parcourir chaque ligne de 1 à n
    for line in range(1, number_of_lines + 1):
        # Calculer le nombre d'espaces à gauche
        spaces = number_of_lines - line

        # Calculer le nombre d'étoiles à afficher
        stars = line

        # Afficher la ligne avec espaces suivis des étoiles
        print(" " * spaces + "*" * stars)
        
#Test de la fonction
draw_right_aligned_stairs(5)
#RESULT:
#      *
#     **
#    ***
#   ****
#  *****

#3
def draw_diamond_like_pattern(height):
    # Partie supérieure : triangle croissant (sans espaces)
    for line in range(1, height + 1):
        print("*" * line)

    # Partie inférieure : triangle décroissant avec indentation
    for line in range(height, 0, -1):
        spaces = height - line
        stars = line
        print(" " * spaces + "*" * stars)

#Test de la fonction
draw_diamond_like_pattern(5)
#RESULT:
#   *
#   **
#   ***
#   ****
#   *****
#   *****
#    ****
#     ***
#      **
#       *

#EXERCICE: 2: Analyse

my_list = [2, 24, 12, 354, 233] #liste de depart
for i in range(len(my_list) - 1):  # # Boucle sur chaque élément sauf le dernier, # 'i' représente l'index de l'élément actuellement en cours de comparaison
    minimum = i  # # On suppose que l'élément courant est le plus petit
    for j in range( i + 1, len(my_list)):  # # On compare l'élément courant avec tous les suivants
        if(my_list[j] < my_list[minimum]): ## Si on trouve un élément plus petit, on met à jour minimum
            minimum = j
            if(minimum != i): # # Si un plus petit élément a été trouvé, # on échange les positions avec l'élément à l’index i
                my_list[i], my_list[minimum] = my_list[minimum], my_list[i]
                
                
#🚩🚩🚩 Ce if est à l’intérieur du précédent, ce qui n’est pas habituel dans un tri par sélection. Du coup, le swap a lieu dès qu’un élément plus petit est trouvé, pas à la fin de la boucle j.
print(my_list)  ## Affiche la liste après le tri partiel

#RESULT: This code does not completely sort the list! He performs premature exchanges, which gives an incorrect sorting:

#FIXME: 

for i in range(len(my_list) - 1):
    minimum = i
    for j in range(i + 1, len(my_list)):
        if my_list[j] < my_list[minimum]:
            minimum = j
    if minimum != i:
        my_list[i], my_list[minimum] = my_list[minimum], my_list[i]
