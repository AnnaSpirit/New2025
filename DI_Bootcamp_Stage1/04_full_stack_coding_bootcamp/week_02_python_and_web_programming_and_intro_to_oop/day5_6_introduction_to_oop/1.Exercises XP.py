#  EXERCICE: 1: Cats -- Instructions --
# Using this class
# class Cat:
#     def __init__(self, cat_name, cat_age):
#         self.name = cat_name
#         self.age = cat_age

# #     Instantiate three Cat objects using the code provided above.

# cat1 = Cat("Yoshi", 4)
# cat2 = Cat("Gally", 14)
# cat3 = Cat("Inook", 12)  #this year, on Aug 15th!!!

# # Verification des informations de chaque chat
# # print(f"Cat 1: {cat1.name}, {cat1.age} years old")
# # print(f"Cat 2: {cat2.name}, {cat2.age} years old")
# # print(f"Cat 3: {cat3.name}, {cat3.age} years old")

# #     Outside of the class, create a function that finds the oldest cat and returns the cat.

# # Fonction pour trouver le chat le plus âgé parmi une liste de chats
# def Oldest_cat(cats):
#     return max(cats, key=lambda cat: cat.age)

# # Création d'une liste contenant nos instances de Chat
# liste_cats = [cat1, cat2, cat3]

# # Recherche du chat le plus âgé et affichage de ses informations
# old_cat = Oldest_cat(liste_cats)

# #     Print the following string: “The oldest cat is <cat_name>, and is <cat_age> years old.”. Use the function previously created.

# # Affichage de la chaîne demandée en utilisant la fonction Oldest_cat
# print(f"The oldest cat is {old_cat.name}, and is {old_cat.age} years old.")

# #RESULT: The oldest cat is Gally, and is 14 years old.

#COURSE: Paramètres : La méthode reçoit trois paramètres : self : qui fait référence à l'instance courante de la classe.cat_name : qui représente le nom du chat. cat_age : qui représente l'âge du chat.

# 🌟 EXERCICE: 2 : Dogs
# Instructions

#     Create a class called Dog.
#     In this class, create an __init__ method that takes two parameters : name and height. This function instantiates two attributes, which values are the parameters.
#     Create a method called bark that prints the following string “<dog_name> goes woof!”.
#     Create a method called jump that prints the following string “<dog_name> jumps <x> cm high!”. x is the height*2.
#     Outside of the class, create an object called davids_dog. His dog’s name is “Rex” and his height is 50cm.
#     Print the details of his dog (ie. name and height) and call the methods bark and jump.
#     Create an object called sarahs_dog. Her dog’s name is “Teacup” and his height is 20cm.
#     Print the details of her dog (ie. name and height) and call the methods bark and jump.
#     Create an if statement outside of the class to check which dog is bigger. Print the name of the bigger dog.

#Créer la classe Dog avec __init__
# class Dog:
#     def __init__(self, name, height):
#         self.name = name
#         self.height = height

# #Ajouter la méthode bark
#     def bark(self):
#         print(f"{self.name} goes woof!")

# #Ajouter la méthode jump
#     def jump(self):
#         print(f"{self.name} jumps {self.height * 2} cm high!")
        
# #Créer l’objet davids_dog
# davids_dog = Dog("Rex", 50)

# # Afficher ses infos et appeler les méthodes
# print(f"David´s dog is named {davids_dog.name}, and is {davids_dog.height} cm tall.")
# davids_dog.bark()
# davids_dog.jump()

# #RESULT: David´s dog is named Rex, and is 50 cm tall. Rex goes woof! Rex jumps 100 cm high!

# # Créer l’objet sarahs_dog
# sarahs_dog = Dog("Teacup", 20)

# # Afficher ses infos et appeler les méthodes
# print(f"Sarah´s dog is named {sarahs_dog.name}, and is {sarahs_dog.height} cm tall.")
# sarahs_dog.bark()
# sarahs_dog.jump()

# #RESULT: Sarah´s dog is named Teacup, and is 20 cm tall. Teacup goes woof! Teacup jumps 40 cm high!

# #Comparer les tailles et afficher le plus grand
# if davids_dog.height > sarahs_dog.height:
#     print(f"{davids_dog.name} is the bigger dog.")
# else:
#     print(f"{sarahs_dog.name} is the bigger dog.")

# #RESULT: Rex is the bigger dog.

# EXERCICE: 3 : Who’s the song producer?
# Instructions

# 1. Define a class called Song, it will show the lyrics of a song.
# Its __init__() method should have two arguments: self and lyrics (a list).
# 2. Inside your class create a method called sing_me_a_song that prints each element of lyrics on its own line.
# 3. Create an object, for example:

# stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])


# 4. Then, call the sing_me_a_song method. The output should be:
# There’s a lady who's sure
# all that glitters is gold
# and she’s buying a stairway to heaven

# class Song:
#     def __init__(self, lyrics):
#         self.lyrics = lyrics

#     def sing_me_a_song(self):
#         for line in self.lyrics:
#             print(line)
            
# # Créer un objet Song
# stairway = Song(["There’s a lady who's sure", "all that glitters is gold", "and she’s buying a stairway to heaven"])

# # Appeler la méthode pour chanter

# stairway.sing_me_a_song()

#RESULT: There’s a lady who's sure, all that glitters is gold, and she’s buying a stairway to heaven

# Exercise 4 : Afternoon at the Zoo
# Instructions

#     Create a class called Zoo.
#     In this class create a method __init__ that takes one parameter: zoo_name.
#     It instantiates two attributes: animals (an empty list) and name (name of the zoo).
#     Create a method called add_animal that takes one parameter new_animal. This method adds the new_animal to the animals list as long as it isn’t already in the list.
#     Create a method called get_animals that prints all the animals of the zoo.
#     Create a method called sell_animal that takes one parameter animal_sold. This method removes the animal from the list and of course the animal needs to exist in the list.

#     Create a method called sort_animals that sorts the animals alphabetically and groups them together based on their first letter.
#     Example

#     { 
#         A: "Ape",
#         B: ["Baboon", "Bear"],
#         C: ['Cat', 'Cougar'],
#         E: ['Eel', 'Emu']
#     }

#     Create a method called get_groups that prints the animal/animals inside each group.

#     Create an object called new_york_zoo and call all the methods.
#     Tip: The zookeeper is the one who will use this class.
#     Example: Which animal should we add to the zoo --> Giraffe
#     x.add_animal(Giraffe)

#EXERCICE: From course
#Créer la classe Zoo et son constructeur
# class Zoo:
#     def __init__(self, zoo_name):
#         self.animals = []
#         self.name = zoo_name
#         self.grouped_animals = {}

#     # Ajouter un animal (sans doublon)
#     def add_animal(self, new_animal):
#         if new_animal not in self.animals:
#             self.animals.append(new_animal)

#     # Afficher tous les animaux
#     def get_animals(self):
#         for animal in self.animals:
#             print(animal)

#     # Vendre un animal (avec gestion des majuscules/minuscules)
#     def sell_animal(self, animal_sold):
#         for animal in self.animals:
#             if animal.lower() == animal_sold.lower():
#                 self.animals.remove(animal)
#                 break

#     # Trier et grouper les animaux
#     def sort_animals(self):
#         self.animals.sort()
#         self.grouped_animals = {}
#         for animal in self.animals:
#             first_letter = animal[0].upper()
#             if first_letter not in self.grouped_animals:
#                 self.grouped_animals[first_letter] = [animal]
#             else:
#                 self.grouped_animals[first_letter].append(animal)

#     # Afficher les groupes
#     def get_groups(self):
#         for letter, animals in self.grouped_animals.items():
#             print(f"{letter}: {', '.join(animals)}")


# # Utilisation
# new_york_zoo = Zoo("New York Zoo")
# new_york_zoo.add_animal("Bear")
# new_york_zoo.add_animal("Ape")
# new_york_zoo.add_animal("Baboon")
# new_york_zoo.add_animal("Cat")
# new_york_zoo.add_animal("Cougar")
# new_york_zoo.add_animal("Eel")
# new_york_zoo.add_animal("Emu")

# print("Animals in the New-York zoo:")
# new_york_zoo.get_animals()

# new_york_zoo.sell_animal("bear")  # fonctionne même si c’est en minuscule

# new_york_zoo.sort_animals()
# print("\nGrouped animals:")
# new_york_zoo.get_groups()


#INFO: Code with asking for zookeeper input:
import random

# Full list of possible animals ()
POSSIBLE_ANIMALS = [
    "Lion", "Elephant", "Giraffe", "Zebra", "Kangaroo", "Monkey", "Cougar", 
    "Penguin", "Bear", "Tiger", "Flamingo", "Crocodile",
    "Koala", "Peacock", "Ape", "Baboon", "Leopard",
    "Otter", "Raccoon", "Moose", "Sloth", "Hippopotamus",
    "Ostrich", "Meerkat", "Panda"
]

class Zoo:
    def __init__(self, zoo_name):
        self.animals = []
        self.name = zoo_name
        self.grouped_animals = {}

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
            print(f"✅ {new_animal} has been added to the zoo.")
        else:
            print(f"⚠️ {new_animal} is already in the zoo.")

    def get_animals(self):
        if not self.animals:
            print("🐾 There are no animals in the zoo yet.")
        else:
            print(f"🐾 Animals in {self.name}:")
            for animal in self.animals:
                print(f" - {animal}")

    def sell_animal(self, animal_sold):
        for animal in self.animals:
            if animal.lower() == animal_sold.lower():
                self.animals.remove(animal)
                print(f"💸 {animal} has been sold.")
                return
        print(f"❌ {animal_sold} is not in the zoo.")

    def sort_animals(self):
        self.animals.sort()
        self.grouped_animals = {}
        for animal in self.animals:
            first_letter = animal[0].upper()
            self.grouped_animals.setdefault(first_letter, []).append(animal)
        # print(f"📦 Animals have been sorted and grouped.")

    def get_groups(self):
        if not self.grouped_animals:
            print("📂 Animals haven't been sorted yet.")
        else:
            print("📚 Animal groups:")
            for letter, animals in self.grouped_animals.items():
                print(f"{letter}: {', '.join(animals)}")

    def add_random_animals(self, number=3):
        available_choices = list(set(POSSIBLE_ANIMALS) - set(self.animals))
        if len(available_choices) < number:
            number = len(available_choices)
        new_animals = random.sample(available_choices, k=number)
        print(f"🎲 Adding {number} random animals:")
        for animal in new_animals:
            self.add_animal(animal)


# Zookeeper Interface
def zookeeper_interface():
    print("🎪 Welcome to the Zoo Administration System!")
    name = input("What's the name of your zoo? ")
    zoo = Zoo(name)

    while True:
        print("\n--- 🦁 ZOOKEEPER MENU ---")
        print("1. Add an animal")
        print("2. View animals")
        print("3. Sell an animal")
        print("4. Sort and show animal groups")
        print("5. Add random animals to the zoo")
        print("6. Exit")
        choice = input("👉 What do you want to do? (1-6): ")

        if choice == "1":
            animal = input("Which animal do you want to add? ").capitalize()
            zoo.add_animal(animal)

        elif choice == "2":
            zoo.get_animals()

        elif choice == "3":
            animal = input("Which animal do you want to sell? ").capitalize()
            zoo.sell_animal(animal)

        elif choice == "4":
            zoo.sort_animals()
            zoo.get_groups()
            
        elif choice == "5":
            how_many = input("How many random animals do you want to add? (1-10): ")
            if how_many.isdigit() and 1 <= int(how_many) <= 10:
                zoo.add_random_animals(int(how_many))
            else:
                print("⛔ Please enter a number between 1 and 10.")


        elif choice == "6":
            print("👋 See you soon, Zookeeper!")
            break

        else:
            print("⛔ Invalid choice. Try again.")


# Run the program
zookeeper_interface()
