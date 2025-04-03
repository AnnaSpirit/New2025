# Instructions : Old MacDonald’s Farm

#     Take a look at the following code and output:

# File: market.py

# macdonald = Farm("McDonald")
# macdonald.add_animal('cow',5)
# macdonald.add_animal('sheep')
# macdonald.add_animal('sheep')
# macdonald.add_animal('goat', 12)
# print(macdonald.get_info())

# Output

# McDonald's farm

# cow : 5
# sheep : 2
# goat : 12

#     E-I-E-I-0!


# Create the code that is needed to receive the result provided above. Below are a few questions to assist you with your code:

#     Create a class called Farm. How should it be implemented?
#     Does the Farm class need an __init__ method? If so, what parameters should it take?
#     How many methods does the Farm class need?
#     Do you notice anything interesting about the way we are calling the add_animal method? What parameters should this function have? How many…?
#     Test your code and make sure you get the same results as the example above.
#     Bonus: nicely line the text in columns as seen in the example above. Use string formatting.


# Expand The Farm

#     Add a method called get_animal_types to the Farm class. This method should return a sorted list of all the animal types (names) in the farm. With the example above, the list should be: ['cow', 'goat', 'sheep'].

#     Add another method to the Farm class called get_short_info. This method should return the following string: “McDonald’s farm has cows, goats and sheeps.”. The method should call the get_animal_types function to get a list of the animals.

#NOTE:  Objectif Bonus 2 : méthode get_short_info
# 🔎 Elle doit :
# Utiliser get_animal_types() pour récupérer les types triés.
# Ajouter un “s” seulement si ce n’est pas un nom déjà au pluriel régulier.
# Gérer le cas spécial de “sheep” (pluriel = sheep, pas sheeps).
# Construire une jolie phrase avec des virgules + "and" à la fin.

#         Note : In English the plural form of the word “sheep” is sheep. But for the purpose of the exercise, let’s say that if there is more than 1 animal, an “s” should be added at the end of the word.
class Farm:
    def __init__(self, name):
        self.name = name
        self.animals = {}

    def add_animal(self, animal, count=1):
        if animal in self.animals:
            self.animals[animal] += count
        else:
            self.animals[animal] = count

    def get_info(self):
        result = f"{self.name}'s farm\n"
        for animal, count in self.animals.items():
            result += f"{animal:<6} : {count}\n"
        result += "\n    E-I-E-I-0!"
        return result

    def get_animal_types(self):
        return sorted(self.animals.keys())

    def get_short_info(self):
        types = self.get_animal_types()

        def pluralize(animal):
            if self.animals[animal] > 1:
                if animal == "sheep":
                    return "sheep"  # Cas particulier
                else:
                    return animal + "s"
            else:
                return animal

        plural_animals = [pluralize(animal) for animal in types]

        if len(plural_animals) == 1:
            animal_str = plural_animals[0]
        elif len(plural_animals) == 2:
            animal_str = " and ".join(plural_animals)
        else:
            animal_str = ", ".join(plural_animals[:-1]) + " and " + plural_animals[-1]

        return f"{self.name}'s farm has {animal_str}."


