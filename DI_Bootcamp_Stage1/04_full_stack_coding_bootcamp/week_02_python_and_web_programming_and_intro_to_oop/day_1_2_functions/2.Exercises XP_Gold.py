# EXERCICE:  1 : When will I retire ? -- The point of the exercice:  is to check if a person can retire depending on their age and their gender. --Note : Let’s say retirement age is 67 for men, and 62 for women (born after April, 1947). 1. Create a function get_age(year, month, day) 2. Create a function. Hard-code the current year and month in your code (there are better ways of doing this, but for now it will be enough.) 2. After calculating the age of a person, the function should return the age (the age is an integer). 3. Create a function can_retire(gender, date_of_birth). It should call the get_age function (with what arguments?) in order to receive an age. Now it has all the information it needs in order to determine if the person with the given gender and date of birth is able to retire or not. 4. Calculate. You may need to do a little more hard-coding here. 5. Return True if the person can retire, and False if he/she can’t. Some Hints: 1. Ask for the user’s gender as “m” or “f”. 2. Ask for the user’s date of birth in the form of “yyyy/mm/dd”, eg. “1993/09/21”. 3. Call can_retire to get a definite value for whether the person can or can’t retire. 4. Display a message informing the user whether they can retire or not. --As always, test your code to ensure it works--

# def get_age(year, month, day):
#     # Étape 1 & 2 : âge à partir d'une date de naissance
#     current_year = 2025
#     current_month = 4
#     current_day = 1  # On hard-code aussi le jour pour plus de précision

#     age = current_year - year
#     # On ajuste si la date d'anniversaire n’est pas encore passée cette année
#     if (month, day) > (current_month, current_day):
#         age -= 1
#     return age

# def can_retire(gender, date_of_birth):
#     # Étape 3 : on transforme la date de naissance
#     try:
#         day, month, year = map(int, date_of_birth.split("/"))
#     except ValueError:
#         print("⛔ Date invalid. Please use dd/mm/yyyy.")
#         return False
    
#     age = get_age(year, month, day)

#     # Étape 4 : règles de départ à la retraite
#     if gender == "m":
#         return age >= 67
#     elif gender == "f":
#         # On considère qu'elles sont toutes nées après avril 1947
#         return age >= 62
#     else:
#         print("⛔ Please use 'm' ou 'f'.")
#         return False


# # Étape 5 : interaction avec l'utilisateur
# def main():
#     gender = input("what is your gender ? (m/f) : ").strip().lower()
#     date_of_birth = input("What is your birthday date? (dd/mm/yyyy)")

#     if can_retire(gender, date_of_birth):
#         print("✈️ Go to stay at home or travel!!")
#     else:
#         print("🚩 Nop! 💼 Go! Return to work!")

# # Lancer le programme
# main()

#RESULT: ✈️ Go to stay at home or travel!!

# OTHER: 
#FIXME:     
# def years_until_retirement(gender, date_of_birth):
#     try:
#         day, month, year = map(int, date_of_birth.split("/"))
#     except ValueError:
#         return "⛔ Date invalid. Please use dd/mm/yyyy."

#     age = get_age(year, month, day)

#     if gender == "m":
#         return max(67 - age, 0)
#     elif gender == "f":
#         return max(62 - age, 0)
#     else:
#         return "⛔ Genre inconnu (utilise 'm' ou 'f')."
    
# reste = years_until_retirement(gender, date_of_birth)

# if isinstance(reste, int):
#     if reste > 0:
#         print(f"🕰️ Il te reste encore {reste} an{'née' if reste == 1 else 'nées'} avant la retraite. Courage ! 💪")
#     else:
#         print("🎉 Tu es déjà éligible pour la retraite !")
# else:
#     print(reste)
    
# EXERCICE:  2 : Sum --Instructions-- 1. Write a function that accepts one parameter (an int: X) and returns the value of X+XX+XXX+XXXX. Example: If X=3, the output when calling our function should be 3702 (3 + 33 + 333 + 3333) Hint: treating our number as a int or a str at different points in our code may be helpful

def sum_x(x):
    x_str = str(x)
    total = int(x_str) + int(x_str * 2) + int(x_str * 3) + int(x_str * 4)
    return total

user_input = input("Entre un chiffre (de 0 à 9) : ")

# Vérifie que l'entrée est bien un chiffre
if user_input.isdigit() and 0 <= int(user_input) <= 9:
    x = int(user_input)
    result = sum_x(x)
    print(f"The result of {x} + {x}{x} + {x}{x}{x} + {x}{x}{x}{x} is : {result}")
else:
    print("Please use only number between 0 to 9.")
    
#RESULT: The result of 9 + 99 + 999 + 9999 is : 11106


# EXERCICE:  3 : Double Dice -- Instructions-- 1. Create a function that will simulate the rolling of a dice. Call it throw_dice. It should return an integer between 1 and 6. 2.Create a function called throw_until_doubles. 2a. It should keep throwing 2 dice (using your throw_dice function) until they both land on the same number, ie. until we reach doubles. For example: (1, 2), (3, 1), (5,5) → then stop throwing, because doubles were reached. 2b. This function should return the number of times it threw the dice in total. In the example above, it should return 3. 3. Create a main function. It should throw doubles 100 times (ie. call your throw_until_doubles function 100 times), and store the results of those function calls (in other words, how many throws it took until doubles were thrown, each time) in a collection. (What kind of collection? Read below to understand what we will need the data for, and this should help you decide which data structure to use). 4. After the 100 doubles are thrown, print out a message telling the user how many throws it took in total to reach 100 doubles. 5. Also print out a message telling the user the average amount of throws it took to reach doubles. Round this off to 2 decimal places. 6. For example: 6a. If the results of the throws were as follows (your code would do 100 doubles, not just 3): (1, 2), (3, 1), (5, 5) (3, 3) (2, 4), (1, 2), (3, 4), (2, 2) 6a. Then my output would show something like this: 6a1. Total throws: 8. 6a2. Average throws to reach doubles: 2.67.

import random

def throw_dice():
    # Cette fonction simule un lancer de dé à 6 faces
    return random.randint(1, 6)
print("Rolling the dice:", throw_dice())
#RESULT: Rolling the dice: 4

def throw_until_doubles():
    # Compteur du nombre de lancers
    count = 0

    while True:
        # On lance deux dés
        die1 = throw_dice()
        die2 = throw_dice()
        count += 1

        # Affichage facultatif pour comprendre ce qu'il se passe
        # print(f"Rolled: ({die1}, {die2})")

        # Si on a un double, on s'arrête
        if die1 == die2:
            break

    # On retourne le nombre total de lancers avant d’obtenir un double
    return count

print("Number of throws to get doubles:", throw_until_doubles())
#RESULT: Number of throws to get doubles: 2

def main():
    # Liste pour stocker le nombre de lancers avant d'obtenir des doubles, 100 fois
    results = []

    # On répète 100 fois l'expérience
    for _ in range(100):
        throws = throw_until_doubles()  # Nombre de lancers pour obtenir des doubles
        results.append(throws)          # On stocke le résultat dans la liste

    # Calcul du total
    total_throws = sum(results)

    # Calcul de la moyenne (on divise le total par 100)
    average_throws = total_throws / len(results)

    # Affichage des résultats
    print(f"Total throws: {total_throws}")
    print(f"Average throws to reach doubles: {average_throws:.2f}")

main()
#RESULT: Total throws: 408, Average throws to reach doubles: 4.08