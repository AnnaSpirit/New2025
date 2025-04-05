#EXERCICE: 1 – Random Sentence Generator
# Instructions: Description: In this exercise we will create a random sentence generator. We will do this by asking the user how long the sentence should be and then printing the generated sentence. Hint : The generated sentences do not have to make sense.

#     Download this word list
#NOTE: (name of my file: mix_words.txt)

    # Save it in your development directory.

    # Create a function called get_words_from_file. This function should read the file’s content and return the words as a collection. What is the correct data type to store the words?

    # Create another function called get_random_sentence which takes a single parameter called length. The length parameter will be used to determine how many words the sentence should have. The function should:
    #     use the words list to get your random words.
    #     the amount of words should be the value of the length parameter.

    # Take the random words and create a sentence (using a python method), the sentence should be lower case.

    # Create a function called main which will:
    #     Print a message explaining what the program does.

    #     Ask the user how long they want the sentence to be. Acceptable values are: an integer between 2 and 20. Validate your data and test your validation!
    #         If the user inputs incorrect data, print an error message and end the program.
    #         If the user inputs correct data, run your code.

import random
import os

# Chemin absolu vers le fichier mix_words.txt
file_path = r"DI_Bootcamp_Stage1\04-Full-Stack Coding Bootcamp\3 Week - Object Oriented Programming (OOP)\5D-Python File I-O, JSON and API\mix_words.txt"

def get_words_from_file():
    with open(file_path, "r") as file:
        content = file.readlines()
    return content

def get_random_sentence(length):
    words = get_words_from_file()
    sentence = random.sample(words, length)
    real_sentence = ' '.join(word.strip() for word in sentence)
    return real_sentence.lower().capitalize()

def main():
    print("This program uses your input as the sentence length (see below). If the number isn't between 2 and 20, it throws an error and terminates the program; otherwise, it calls the function below.")
    # La boucle while permet de redemander la saisie tant que l'entrée n'est pas valide.
    while True:
        try:
            user_length = int(input("Please, chose a length between 2-20 : "))
            if 2 <= user_length <= 20:
                print(get_random_sentence(user_length))
                break  # On sort de la boucle quand l'entrée est correcte.
            else:
                print("🚩 The chosen length is not between 2 and 20. Please try again.")
        except ValueError:
            print("🚩 Please enter a valid integer.")

if __name__ == "__main__":
    main()


#EXERCICE: 2: Working with JSON
# Instructions:
    # Access the nested “salary” key from the JSON-string above.
    # Add a key called “birth_date” to the JSON-string at the same level as the “name” key.
    # Save the dictionary as JSON to a file.

import json
import os

# Chaîne JSON initiale
sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

# 1. Conversion de la chaîne JSON en dictionnaire Python
data = json.loads(sampleJson)

# 2. Accès à la clé imbriquée "salary"
salary = data["company"]["employee"]["payable"]["salary"]
print("Salary:", salary)

# 3. Ajout d'une clé "birth_date" au même niveau que "name"
data["company"]["employee"]["birth_date"] = "1990-01-01"  # Exemple de date de naissance

# 4. Définir le chemin complet où le fichier JSON sera enregistré
json_file_path = r"DI_Bootcamp_Stage1\04-Full-Stack Coding Bootcamp\3 Week - Object Oriented Programming (OOP)\5D-Python File I-O, JSON and API\employee.json"

# Vérifier si le dossier de destination existe, sinon le créer
folder_path = os.path.dirname(json_file_path)
if not os.path.exists(folder_path):
    os.makedirs(folder_path)

# 5. Enregistrer le dictionnaire modifié dans le fichier JSON
with open(json_file_path, "w") as file:
    json.dump(data, file, indent=4)

print("Le fichier JSON a été enregistré dans :", json_file_path)


#QUESTION: Pourquoi je dois préciser mon chemin d'accès. Je le fais car sinon il s'enregistre à la base de mon arborescence (DI_Bootcamp_Stage1)

# QUESTION: Comment faire pour que le fichier s'enregistre dans le même dossier que mon fichier python ?