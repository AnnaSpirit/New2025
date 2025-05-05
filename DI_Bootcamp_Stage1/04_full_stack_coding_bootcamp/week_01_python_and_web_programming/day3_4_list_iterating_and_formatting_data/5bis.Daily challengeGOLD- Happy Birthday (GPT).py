#TODO: Daily challenge GOLD : Happy birthday --Instructions-- 1. Ask the user for their birthdate (specify the format, for example: DD/MM/YYYY). 2. Display a little cake as seen below:
#        ___iiiii___
#       |:H:a:p:p:y:|
#     __|___________|__
#    |^^^^^^^^^^^^^^^^^|
#    |:B:i:r:t:h:d:a:y:|
#    |                 |
#    ~~~~~~~~~~~~~~~~~~~

#HACK: The number of candles on the cake should be the last number of the users age, if they are 53, then add 3 candles. Bonus : If they were born on a leap year, display two cakes !

from datetime import datetime

def display_cake(cake_lines):
    print("\n".join(cake_lines))

# INFO: CAKE
cake_top = "   ,,,,,   "
happy_line = "|:H:a:p:p:y:|"
cake_line4 = "__|___________|__"
cake_line5 = "|^^^^^^^^^^^^^^^^^|"
birthday_line = "|:B:i:r:t:h:d:a:y:|"
cake_line7 = "|                 |"

# Définir une largeur minimale et calculer la largeur d'affichage
min_width = 30
width = max(min_width, len(cake_top) + 8, len(happy_line) + 8, len(birthday_line) + 8)

line1 = cake_top.center(width)
line2 = "<candles>".center(width)  # placeholder pour les bougies
line3 = happy_line.center(width)
line4 = cake_line4.center(width)
line5 = cake_line5.center(width)
line6 = birthday_line.center(width)
line7 = cake_line7.center(width)
line8 = "~" * width

# Regrouper les lignes dans une liste
cake_lines = [line1, line2, line3, line4, line5, line6, line7, line8]

# Saisie de la date de naissance
birth_date_str = input("Please enter your birthdate (DD/MM/YYYY): ")
birth_date = datetime.strptime(birth_date_str, "%d/%m/%Y")

# Calcul de l'âge
today = datetime.today()
age = today.year - birth_date.year - ((today.month, today.day) < (birth_date.month, birth_date.day))
print(f"age: {age}")

# Extraire le dernier chiffre de l'âge pour déterminer le nombre de candles
last_digit = int(str(age)[-1])

# Générer la chaîne de bougies et mettre à jour la ligne 2
candles = "___" + ("i" * last_digit) + "___"
line2 = candles.center(width)
cake_lines[1] = line2

#TODO: Bonus:
#INFO:  Une année bissextile est divisible par 4 et aussi par 100, mais pas par 400.

birth_year = birth_date.year
is_leap = (birth_year % 400 == 0) or (birth_year % 4 == 0 and birth_year % 100 != 0)

if is_leap:
    display_cake(cake_lines)
    print()  # séparation entre les deux gâteaux
    display_cake(cake_lines)
else:
    display_cake(cake_lines)