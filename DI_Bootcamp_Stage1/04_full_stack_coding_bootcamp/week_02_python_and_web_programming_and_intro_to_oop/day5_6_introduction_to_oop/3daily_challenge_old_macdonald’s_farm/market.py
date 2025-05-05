import sys
sys.path.append(r"E:\New2025\DI_Bootcamp_Stage1\04-Full-Stack Coding Bootcamp\2 Week - Python and Web Programming and Intro to OOP\5D - Introduction to OOP\7.Daily Challenge-Old MacDonald’s Farm")

from farm import Farm


macdonald = Farm("McDonald")
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)

print(macdonald.get_info())
print("___________________")
print(macdonald.get_animal_types())
print("___________________")
print(macdonald.get_short_info())
