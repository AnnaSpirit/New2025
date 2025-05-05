#EXERCICE: Cars
# 1. Copy the following string into your code: "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet".
# 2. Convert it into a list using Python (don’t do it by hand!).
# 3. Print out a message saying how many manufacturers/companies are in the list.
# 4. Print the list of manufacturers in reverse/descending order (Z-A).
# 5. Using loops or list comprehension:
# 5a. Find out how many manufacturers’ names have the letter ‘o’ in them.
# 5b. Find out how many manufacturers’ names do not have the letter ‘i’ in them.
# 6. Bonus1: There are a few duplicates in this list:["Honda","Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]
# 6a. Remove these programmatically. (Hint: you can use set to help you).
# 6b. Print out the companies without duplicates, in a comma-separated string with no line-breaks (eg. “Acura, Alfa Romeo, Aston Martin, …”), also print out a message saying how many companies are now in the list.
# 7. Bonus2: Print out the list of manufacturers in ascending order (A-Z), but reverse the letters of each manufacturer’s name.

# 1.
"Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"
# 2.
cars = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"
# 3.
cars_list = cars.split(", ")
print(f"There are {len(cars_list)} manufacturers in the list.")
#RESULT: There are 5 manufacturers in the list.
#4.
print(", ".join(sorted(cars.split(", "), reverse=True)))
#RESULT: Volkswagen, Toyota, Honda, Ford Motor, Chevrolet
#5a.
print(f"There are {len([car for car in cars_list if 'o' in car])} names with the letter 'o'.")
#RESULT: There are 5 names with the letter 'o'.
#5b.
print(f"There are {len([car for car in cars_list if 'i' not in car])} names without the letter 'i'.")
#RESULT: There are 5 names without the letter 'i'.
#6.
cars_list = cars.split(", ")
cars_list.extend(["Honda","Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota", "Cupra", "Mercedes", "Aston"])
print(cars_list)
#RESULT: ['Volkswagen', 'Toyota', 'Ford Motor', 'Honda', 'Chevrolet', 'Honda', 'Volkswagen', 'Toyota', 'Ford Motor', 'Honda', 'Chevrolet', 'Toyota', 'Cupra', 'Mercedes', 'Aston']
# 6a.
cars_unique = list(set(cars_list))
print(cars_unique)
#RESULT: ['Aston', 'Mercedes', 'Chevrolet', 'Honda', 'Toyota', 'Volkswagen', 'Cupra', 'Ford Motor']
# 6b.
print(", ".join(cars_unique))
print(f"New! There are now {len(cars_unique)} companies in the list.")
#RESULT: Aston, Mercedes, Chevrolet, Honda, Toyota, Volkswagen, Cupra, Ford Motor
#RESULT: New! There are now 8 companies in the list.
# 7.
print(", ".join(sorted(cars_unique)))
#RESULT: Aston, Chevrolet, Cupra, Ford Motor, Honda, Mercedes, Toyota, Volkswagen

Shuffle_cars = [name[::-1] for name in sorted(cars_unique)]
print(", ".join(Shuffle_cars))
#RESULT: notsA, telorvehC, arpuC, rotoM droF, adnoH, sedecreM, atoyoT, negawskloV

