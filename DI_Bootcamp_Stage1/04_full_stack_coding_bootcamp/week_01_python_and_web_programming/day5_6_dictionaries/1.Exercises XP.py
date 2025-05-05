#EXERCICE: 1 : Convert lists into dictionaries -- Instructions -- Convert the two following lists, into dictionaries. Hint: Use the zip method
# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]
# dictionary1 = dict(zip(keys, values))
# print(dictionary1)

#RESULT: {'Ten': 10, 'Twenty': 20, 'Thirty': 30}

# EXERCICE: 2 : Cinemax #2 --Instructions--A movie theater charges different ticket prices depending on a person’s age.
				# if a person is under the age of 3, the ticket is free.
				# if they are between 3 and 12, the ticket is $10.
				# if they are over the age of 12, the ticket is $15.
				# 1. How much does each family member have to pay ?
				# 2. Print out the family’s total cost for the movies.
				# Bonus: Ask the user to input the names and ages instead of using the provided family variable (Hint: ask the user for names and ages and add them into a family dictionary that is initially empty).

# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

# total_cost = 0
# for age in family.values():
# 	if age < 3:
# 		total_cost += 0
# 	elif age < 12:
# 		total_cost += 10
# 	else:
# 		total_cost += 15
# print(total_cost)

#RESULT: 50

# input_family = {}
# input_total_cost = 0
# family_members = int(input("How many family members are there? "))
# for i in range(family_members):
# 	name = input("Enter the name of the family member: ")
# 	age = int(input("Enter the age of the family member: "))
# 	input_family[name] = age
# 	if age < 3:
# 		input_total_cost += 0
# 	elif age < 12:
# 		input_total_cost += 10
# 	else:
# 		input_total_cost += 15
# print(f"The entry price for your family is {input_total_cost}.")

#RESULT: How many family members are there? 5
# Enter the name of the family member: annie
# Enter the age of the family member: 3
# Enter the name of the family member: samia
# Enter the age of the family member: 10
# Enter the name of the family member: fanny
# Enter the age of the family member: 10
# Enter the name of the family member: thomas
# Enter the age of the family member: 24
# Enter the name of the family member: yves
# Enter the age of the family member: 62
# The entry price for your family is 50.

#EXERCICE: 3: Zara --Instructions-- Here is some information about a brand.
				# name: Zara 
				# creation_date: 1975 
				# creator_name: Amancio Ortega Gaona 
				# type_of_clothes: men, women, children, home 
				# international_competitors: Gap, H&M, Benetton 
				# number_stores: 7000 
				# major_color: 
				# 	France: blue, 
				# 	Spain: red, 
				# 	US: pink, green
    
# 2. Create a dictionary called brand which value is the information from part one (turn the info into keys and values).
# The values type_of_clothes and international_competitors should be a list. The value of major_color should be a dictionary.

brand = {
	"name": "Zara",
	"creation_date": 1975,
	"creator_name": "Amancio Ortega Gaona",
	"type_of_clothes": ["men, women, children, home"],
	"international_competitors": ["Gap", "H&M", "Benetton"],
	"number_stores": 7000,
	"major_color": {
		"France": "blue",
		"Spain": "red",
		"US": "pink, green"
	}
}
# 3. Change the number of stores to 2.
brand["number_stores"] = 2
# 4. Use the key [type_of_clothes] to print a sentence that explains who Zaras clients are.
Zara_clients = brand["type_of_clothes"]
print(f"Zara's clients are {Zara_clients}.")
# 5. Add a key called country_creation with a value of Spain.
brand["country_creation"] = "Spain"
# 6. Check if the key international_competitors is in the dictionary. If it is, add the store Desigual.
brand.keys()
if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")

#QUESTION: How to print only the international competitor?
print(brand["international_competitors"])
#RESULT: ['Gap', 'H&M', 'Benetton', 'Desigual']

# 7. Delete the information about the date of creation.
del brand["creation_date"]
# 8. Print the last international competitor.
print(brand["international_competitors"][-1])
# 9. Print the major clothes colors in the US.
print(brand["major_color"]["US"])
# 10. Print the amount of key value pairs (ie. length of the dictionary).
print(len(brand))
# 11. Print the keys of the dictionary.
print(brand.keys())
# 12. Create another dictionary called more_on_zara with the following details:
					# creation_date: 1975 
					# number_stores: 10 000
more_on_zara = {
	"creation_date": 1975,
	"number_stores": 10000
}
# 13. Use a method to add the information from the dictionary more_on_zara to the dictionary brand.
brand.update(more_on_zara)

# 14. Print the value of the key number_stores. What just happened ?
print(brand["number_stores"])
# RESULT: 10000 -- The value of the key number_stores was updated to 10000. History: The value of the key number_stores was initially 7000 it was updated at 2. In the end, the value of the key number_stores was updated to 10000.

# EXERCICE: 4 : Disney characters -- Instructions--  Use this list users

users = ["Mickey","Minnie","Donald","Ariel","Pluto"]

#1/Use a for loop to recreate the 1st result. Tip : don’t hardcode the numbers.
disney_users_1 = {users[i]: i for i in range(len(users))}

print(disney_users_1)
#RESULT:Expected: {"Mickey": 0, "Minnie": 1, "Donald": 2, "Ariel": 3, "Pluto": 4}

#2/Use a for loop to recreate the 2nd result. Tip : don’t hardcode the numbers.

disney_users_2 = {i: users[i] for i in range(len(users))}
print(disney_users_2)
#RESULT:Expected: {0: "Mickey",1: "Minnie", 2: "Donald", 3: "Ariel", 4: "Pluto"}

#3/Use a method to recreate the 3rd result. Hint: The 3rd result is sorted alphabetically. :

disney_users_3 = {users[i]: i for i in range(len(users))}
disney_users_3 = dict(sorted(disney_users_3.items()))
print(disney_users_3)

# RESULT: {'Ariel': 3, 'Donald': 2, 'Mickey': 0, 'Minnie': 1, 'Pluto': 4}
# QUESTION: Why is the result in alphabetical order but lose their initial len? Ariel should be 0.

#RESULT:Expected: {"Ariel": 0, "Donald": 1, "Mickey": 2, "Minnie": 3, "Pluto": 4}
#4/ Only recreate the 1st result for: a. The characters, which names contain the letter “i”. b. The characters, which names start with the letter “m” or “p”.

disney_users_4a = {users[i]: i for i in range(len(users))}
disney_users_4a = {key: value for key, value in disney_users_4a.items()
    if "i" in key}
print(disney_users_4a)
#RESULT: {'Minnie': 1, 'Ariel': 3}

disney_users_4b = {users[i]: i for i in range(len(users))}
disney_users_4b = {key: value for key, value in disney_users_4b.items()
    if key.startswith("m") or key.startswith("p")}
print(disney_users_4b)

#RESULT: {} 
# QUESTION:Why is the result empty?


#RESULT:Expected: {'Mickey': 0, 'Minnie': 1, 'Pluto': 4}
