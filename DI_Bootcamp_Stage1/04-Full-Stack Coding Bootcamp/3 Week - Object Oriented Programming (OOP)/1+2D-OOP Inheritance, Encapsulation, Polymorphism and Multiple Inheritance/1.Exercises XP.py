# #EXERCICE: 1:Pets
# # Create another cat breed named Siamese which inherits from the Cat class.
# # Create a list called all_cats, which holds three cat instances : one Bengal, one Chartreux and one Siamese.
# # Those three cats are Sara’s pets. Create a variable called sara_pets which value is an instance of the Pet class, and pass the variable all_cats to the new instance.
# # Take all the cats for a walk, use the walk method.
# class Pets():
#     def __init__(self, animals):
#         self.animals = animals

#     def walk(self):
#         for animal in self.animals:
#             print(animal.walk())

# class Cat():
#     is_lazy = True

#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def walk(self):
#         return f'{self.name} is just walking around'

# class Bengal(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'

# class Chartreux(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'

# class Siamese(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'
    

# all_cats = [
#     Bengal("Bengal Cat", 2),
#     Chartreux("Chartreux Cat", 3),
#     Siamese("Siamese Cat", 4)
# ]

# sara_pets = Pets(all_cats)


# sara_pets.walk()

# #EXERCICE 2:Dogs
# # Create a class called Dog with the following attributes name, age, weight.
# # Implement the following methods in the Dog class:
# #     bark: returns a string which states: “<dog_name> is barking”.
# #     run_speed: returns the dogs running speed (weight/age*10).
# #     fight : takes a parameter which value is another Dog instance, called other_dog. This method returns a string stating which dog won the fight. The winner should be the dog with the higher run_speed x weight.
#     # Create 3 dogs and run them through your class.


# class Dog:
#     def __init__(self, name, age, weight):
#         self.name = name
#         self.age = age
#         self.weight = weight

#     def bark(self):
#         return f'{self.name} is barking'

#     def run_speed(self):
#         return (self.weight / self.age) * 10

#     def fight(self, other_dog):
#         if self.run_speed() * self.weight > other_dog.run_speed() * other_dog.weight:
#             return f'{self.name} wins the fight!'
#         else:
#             return f'{other_dog.name} wins the fight!'

# # Create 3 dog instances
# dog1 = Dog("Onyx", 5, 22)
# dog2 = Dog("Lassy", 4, 25)
# dog3 = Dog("Boule", 2, 15)

# # Test the methods
# print(dog1.bark())
# print(dog2.bark())
# print(dog3.bark())
# print(f"{dog1.name}'s run speed: {dog1.run_speed()}")
# print(f"{dog2.name}'s run speed: {dog2.run_speed()}")
# print(f"{dog3.name}'s run speed: {dog3.run_speed()}")
# print(dog1.fight(dog2))
# print(dog2.fight(dog3))
# print(dog1.fight(dog3))


# #EXERCICE: 3: Dogs Domesticated

# # Create a new python file and import your Dog class from the previous exercise.
# # In the new python file, create a class named PetDog that inherits from Dog.
# # Add an attribute called trained to the __init__ method, this attribute is a boolean and the value should be False by default.
# # Add the following methods:
# #     train: prints the output of bark and switches the trained boolean to True

# #     play: takes a parameter which value is a few names of other Dog instances (use *args). The method should print the following string: “dog_names all play together”.

# #     do_a_trick: If the dog is trained the method should print one of the following sentences at random:
# #         “dog_name does a barrel roll”.
# #         “dog_name stands on his back legs”.
# #         “dog_name shakes your hand”.
# #         “dog_name plays dead”.

# from Exercises_XP_Dogs import Dog
# import random
# class PetDog(Dog):
#     def __init__(self, name, age, weight):
#         # Appel du constructeur de la classe parente Dog
#         super().__init__(name, age, weight)
#         # Nouvel attribut : le chien n'est pas entraîné par défaut
#         self.trained = False
        
#     def train(self):
#         # Fait aboyer le chien et le marque comme entraîné
#         print(self.bark())
#         self.trained = True
        
#     def play(self, *args):
#         # Fait jouer le chien avec d'autres chiens
#         names = ", ".join(args)
#         print(f"{names} all play together")
        
#     def do_trick (self):
#         # Si le chien est entraîné, effectue une astuce au hasard
#         if self.trained:
#             tricks = [
#                 f"{self.name} does a barrel roll",
#                 f"{self.name} stands on his back legs",
#                 f"{self.name} shakes your hand",
#                 f"{self.name} plays dead"
#             ]
#             print(random.choice(tricks))
#         else:
#             print(f"{self.name} hasn't been trained yet!")

# #Test the PetDog class
# print(PetDog("Buddy", 3, 20).trained)
# #RESULT: False -ok

# #Test the full file

# buddy = PetDog("Buddy", 3, 12)
# buddy.train()
# buddy.play("Buddy", "Max", "Rex")
# buddy.do_trick()

# #EXERCICE: 4: Family
# # Create a class called Family and implement the following attributes:

# #     members: list of dictionaries
# #     last_name : (string)

# # Implement the following methods:

# #     born: adds a child to the members list (use **kwargs), don’t forget to print a message congratulating the family.
# #     is_18: takes the name of a family member as a parameter and returns True if they are over 18 and False if not.
# #     family_presentation: a method that prints the family’s last name and all the members’ details.

class Family:
    def __init__(self, last_name):
        # Attributs de la classe
        self.last_name = last_name
        self.members = []

    def born(self, **kwargs):
        # Ajoute un enfant dans la liste des membres en utilisant les valeurs passées en paramètre. kwargs doit contenir au minimum 'name' et 'age'.
        self.members.append(kwargs)
        print(f"🎉 Congratulations to the {self.last_name} family on the birth 👶🏻 of {kwargs.get('name', 'a new baby')}!")

    def is_18(self, name):
        # Retourne True si le membre spécifié a plus de 18 ans, sinon False.
        for member in self.members:
            if member.get('name') == name:
                return member.get('age', 0) >= 18
        print(f"⚠️ No member named {name} found in the {self.last_name} family.")
        return False

    def family_presentation(self):
        # Affiche le nom de famille et les détails de chaque membre.

        print(f"\n👪 The {self.last_name} Family:")
        for member in self.members:
            print(" - " + ", ".join([f"{key}: {value}" for key, value in member.items()]))

# # Test de la classe Family:
if __name__ == "__main__":
    smiths = Family("Smith")
    smiths.born(name="Alice", age=0, gender="female")
    smiths.born(name="Buddy", age=35, gender="male")
    smiths.born(name="Causette", age=33, gender="female")
    
#     print("\nIs Bob over 18?", smiths.is_18("Bob"))
#     print("Is Alice over 18?", smiths.is_18("Alice"))
#     print("Is Dave over 18?", smiths.is_18("Dave")) 
    
    smiths.family_presentation()
    
#     #RESULT:
#     # 🎉 Congratulations to the Smith family on the birth 👶🏻 of Alice!
#     # 🎉 Congratulations to the Smith family on the birth 👶🏻 of Buddy!
#     # 🎉 Congratulations to the Smith family on the birth 👶🏻 of Causette!

#     # ⚠️ No member named Bob found in the Smith family.
#     # Is Bob over 18? False
#     # Is Alice over 18? False
#     # ⚠️ No member named Dave found in the Smith family.
#     # Is Dave over 18? False

# # Création de l'instance avec les membres donnés
my_family = Family("Johnson")
my_family.members = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}
]

# # Appel des méthodes
my_family.born(name='Ema', age=0, gender='Female', is_child=True)

# print("\nIs Michael over 18?", my_family.is_18('Michael'))
# #RESULT: Is Michael over 18? True
# print("Is Ema over 18?", my_family.is_18('Ema'))
# #RESULT: Is Ema over 18? False
# print("Is Unknown over 18?", my_family.is_18('Unknown'))
# #RESULT: ⚠️ No member named Unknown found in the Johnson family., Is Unknown over 18? False

my_family.family_presentation()

# #RESULT:
# # 👪 The Johnson Family:
# #  - name: Michael, age: 35, gender: Male, is_child: False
# #  - name: Sarah, age: 32, gender: Female, is_child: False
# #  - name: Ema, age: 0, gender: Female, is_child: True


#EXERCICE: 5: TheIncredibles Family
# Create a class called TheIncredibles. This class should inherit from the Family class:
# This is no random family they are an incredible family, therefore the members attributes, will be a list of dictionaries containing the additional keys : power and incredible_name. (See Point 4)

# Add a method called use_power, this method should print the power of a member only if they are over 18 years old. If not raise an exception (look up exceptions) which stated they are not over 18 years old.

# Add a method called incredible_presentation which :

#     Print a sentence like “*Here is our powerful family **”
#     Prints the family’s last name and all the members’ details (ie. use the super() function, to call the family_presentation method)

class TheIncredibles(Family):
    def __init__(self, last_name):
        # Appel du constructeur de la classe parente Family
        super().__init__(last_name)

    def use_power(self, name):
        # Vérifie si le membre a plus de 18 ans et imprime son pouvoir
        for member in self.members:
            if member.get('name') == name:
                if member.get('age', 0) >= 18:
                    print(f"{member['name']}'s power is {member['power']}")
                else:
                    raise Exception(f"{member['name']} is not over 18 years old!")
                return
        print(f"❓ No member named {name} in the family.")

    def incredible_presentation(self):
        # Imprime une phrase d'introduction et utilise la méthode de présentation de la famille
        print(f"\n✨✨ Here is our powerful family:")
        super().family_presentation()
        
# Test de la classe TheIncredibles:

if __name__ == "__main__":
    incredibles = TheIncredibles("Parr")
    incredibles.members = [
        {'name': 'Bob', 'age': 40, 'gender': 'Male', 'is_child': False, 'power': 'Super Strength', 'incredible_name': 'Mr. Incredible'},
        {'name': 'Helen', 'age': 38, 'gender': 'Female', 'is_child': False, 'power': 'Elasticity', 'incredible_name': 'Elastigirl'},
        {'name': 'Violet', 'age': 14, 'gender': 'Female', 'is_child': True, 'power': 'Invisibility', 'incredible_name': 'Invisible Girl'},
        {'name': 'Dash', 'age': 10, 'gender': 'Male', 'is_child': True, 'power': 'Super Speed', 'incredible_name': 'Dash'},
        # {'name': 'Jack', 'age': 0, 'gender': 'Male', 'is_child': True, 'power': 'Density move', 'incredible_name': 'Jack-Jack'}
    ]

    # Présentation incroyable
    incredibles.incredible_presentation()

    # Utilisation des pouvoirs
    incredibles.use_power('Bob')
    incredibles.use_power('Helen')

    try:
        incredibles.use_power('Dash')
    except Exception as e:
        print(e)
#RESULT:
# ✨ Here is our powerful family:

# 👪 The Parr Family:
#  - name: Bob, age: 40, gender: Male, is_child: False, power: Super Strength, incredible_name: Mr. Incredible
#  - name: Helen, age: 38, gender: Female, is_child: False, power: Elasticity, incredible_name: Elastigirl
#  - name: Violet, age: 14, gender: Female, is_child: True, power: Invisibility, incredible_name: Invisible Girl
#  - name: Dash, age: 10, gender: Male, is_child: True, power: Super Speed, incredible_name: Dash
# Bob's power is Super Strength
# Helen's power is Elasticity
# Dash is not over 18 years old!
