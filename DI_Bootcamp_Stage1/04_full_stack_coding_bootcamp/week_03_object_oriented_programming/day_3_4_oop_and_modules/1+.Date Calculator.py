import datetime  # On importe le module datetime pour travailler avec les dates

def date_difference():
    """
    Cette fonction demande à l'utilisateur de saisir deux dates au format "DD/MM/YYYY"
    et calcule la différence en jours entre ces deux dates.
    """
    # Demande de la première date à l'utilisateur
    date_str1 = input("Entrez la première date (format DD/MM/YYYY) : ")
    # Demande de la deuxième date à l'utilisateur
    date_str2 = input("Entrez la deuxième date (format DD/MM/YYYY) : ")
    
    # Conversion des chaînes de caractères en objets datetime en utilisant le format spécifié
    date1 = datetime.datetime.strptime(date_str1, "%d/%m/%Y")
    date2 = datetime.datetime.strptime(date_str2, "%d/%m/%Y")
    
    # Calcul de la différence en jours entre les deux dates.
    # On utilise abs() pour obtenir une valeur absolue afin que l'ordre des dates n'impacte pas le résultat.
    difference_in_days = abs((date2 - date1).days)
    
    # Affichage du résultat
    print(f"Il y a {difference_in_days} jours entre {date_str1} et {date_str2}.")

# Appel de la fonction pour exécuter le programme
date_difference()

#RESULT: Enre Moi et Carole
# Entrez la première date (format DD/MM/YYYY) : 06/03/1987
# Entrez la deuxième date (format DD/MM/YYYY) : 05/04/1990
# Il y a 1126 jours entre 06/03/1987 et 05/04/1990.

#RESULT: Enre Gabriel et Nolan
# Entrez la première date (format DD/MM/YYYY) : 15/04/2021
# Entrez la deuxième date (format DD/MM/YYYY) : 16/11/2022
# Il y a 580 jours entre 15/04/2021 et 16/11/2022.