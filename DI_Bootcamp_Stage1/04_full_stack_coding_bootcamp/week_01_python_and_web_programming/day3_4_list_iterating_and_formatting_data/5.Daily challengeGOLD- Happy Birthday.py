#TODO: Daily challenge GOLD : Happy birthday --Instructions-- 1. Ask the user for their birthdate (specify the format, for example: DD/MM/YYYY). 2. Display a little cake as seen below:
#        ___iiiii___
#       |:H:a:p:p:y:|
#     __|___________|__
#    |^^^^^^^^^^^^^^^^^|
#    |:B:i:r:t:h:d:a:y:|
#    |                 |
#    ~~~~~~~~~~~~~~~~~~~

#HACK: The number of candles on the cake should be the last number of the users age, if they are 53, then add 3 candles. Bonus : If they were born on a leap year, display two cakes !

#BUG: built the cake
def display_cake(cake):
    # Définir une largeur minimale pour l'affichage
    min_width = 30
    width = max(min_width, len(cake) + 8)

    # Préparer chaque ligne centrée selon la largeur calculée
    line1 = cake.center(width)
    line2 = candles.center(width)
    line3 = "|:H:a:p:p:y:|".center(width)
    line4 = "__|___________|__".center(width)
    line5 = "|^^^^^^^^^^^^^^^^^|".center(width)
    line6 = "|:B:i:r:t:h:d:a:y:|".center(width)
    line7 = "|                 |".center(width)
    line8 = "~" * width

    # Combiner toutes les lignes dans une seule variable
    cake_art = "\n".join([line1, line2, line3, line4, line5, line6, line7, line8])
    return cake_art

from datetime import datetime

birth_date = input("Please enter your birthdate (DD/MM/YYYY): ")

#HACK: Convertir la chaîne de caractères en objet date
birth_date = datetime.strptime(birth_date, "%d/%m/%Y")

#HACK: Récupérer la date du jour
today = datetime.today()

#TODO: if today = date_bith print "HappyBirthday"

age = today.year - birth_date.year - ((today.month, today.day) < (birth_date.month, birth_date.day))

# Extraire le dernier chiffre de l'âge
			#Proposition GPT
			# last_digit = age % 10

age_str = str(age)
last_digit = int(age_str[-1])

# Générer les bougies en répétant le caractère "i"
candle = "i" * last_digit

# Construire et afficher le "gâteau" avec les bougies
candles = "___" + candle + "___" 

# Définir l'aspect fixe du gâteau (le "cake")
cake = " "


# Construire le gâteau complet en appelant display_cake (maintenant cake et candles sont définis)
cake_art = display_cake(cake)

#TODO: Bonus:

# 
birth_year = birth_date.year
if (birth_year % 400 == 0) or (birth_year % 4 == 0 and birth_year % 100 != 0):
# 2 cakes
    print(cake_art)
    print(cake_art)
else:
    # 1 cake
    print(cake_art)