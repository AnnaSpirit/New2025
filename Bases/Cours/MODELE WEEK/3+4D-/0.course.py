#NOTE: Define a dictionary
# rick_dict = {
#     'first_name':'Rick',
#     'last_name':'Sanchez'
# }
# rick_dict['first_name']
#RESULT: 'Rick'

# my_dog = {
# 	'name': 'Rufus',
# 	'age': 4,
# 	'good_dog': True
# }
# my_dog['good_dog']
#RESULT: True

# my_friend = {'name': 'Dujka 'DI_Employee': True}
# my_friend['DI_Employee']
#RESULT: True

# my_friend['name']
#RESULT: 'Dujka'

# my_friend['name'] = 'Ilan
# my_friend{'name': 'Ilan', 'DI_Employee': False}
# my_friend['hair_color'] = 'black'
# my_friend{'name': 'Ilan', 'DI_Employee': False, 'hair_color': 'black'}
#RESULT: {'name': 'Ilan', 'DI_Employee': False, 'hair_color': 'black'}

#NOTE: Accessing data: we use the name of its key.
# print(my_dog['name'])
#RESULT: Rufus

# print("The last name of rick is:", rick_dict['last_name'])
#RESULT: The last name of rick is: Sanchez

# a_dict = {'color': 'blue', 'fruit': 'apple', 'pet': 'dog'}

# print(a_dict.items())
#RESULT: dict_items([('color', 'blue'), ('fruit', 'apple'), ('pet', 'dog')])

#NOTE: The items() method returns a view object that displays a list of dictionary's (key, value) tuple pairs.

# for key, value in a_dict.items():
#     print(key, '->', value)
#RESULT: color -> blue, fruit -> apple, pet -> dog

#NOTE: Data types
# my_dog = {
# 	'name': 'Rufus',
# 	'age': 4,
# 	'best_friend': {
#     	'name': 'Felix',
#     	'age': 4.5
# },
# 	'favorite_foods': ['steaks', 'sausages', 'shawarma']
# }
#NOTE: Dictionaries and lists

# shirts = [
# {
#     'name': 'Awesome T-shirt 3000',
#     'size': 'S',
#     'price': 20
# },
# {
#     'name': 'Awesome T-shirt 3000',
#     'size': 'M',
#     'price': 25
# },
# {
#     'name': 'Awesome T-shirt 3000',
#     'size': 'L',
#     'price': 30
# },
# ]
# print(shirts)
#RESULT: [{'name': 'Awesome T-shirt 3000', 'size': 'S', 'price': 20}, {'name': 'Awesome T-shirt 3000', 'size': 'M', 'price': 25}, {'name': 'Awesome T-shirt 3000', 'size': 'L', 'price': 30}]

#EXERCICE: Access the value of key history

# sample_dict = { 
# 	"class":{ 
# 		"student":{ 
# 			"name":"Mike",
# 			"marks":{ 
#             	"physics":70,
#             	"history":80
#         	}
#     	}
# 	}
# }
# print(sample_dict['class']['student']['marks']['history'])

#RESULT: 80

#NOTE: 4. Modify an entry in a dictionary

# rick_dict['last_name'] = 'SANCHEZ'
#RESULT: {'first_name': 'Rick', 'last_name': 'SANCHEZ'}

#NOTE: 5. Adding an entry to an existing dictionary

# rick_dict['hair_color'] = 'white'
#RESULT: {'first_name': 'Rick', 'last_name': 'SANCHEZ', 'hair_color': 'white'}

#NOTE: 6. Delete an entry in a dictionary

# del rick_dict['hair_color']
#RESULT: {'first_name': 'Rick', 'last_name': 'SANCHEZ'}

#NOTE: The **in** keyword

# for shirt in shirts:
# 	print(shirt['size'])
#RESULT: S, M, L

#NOTE: Built-in methods
#EXERCICE: Delete set of keys from Python Dictionary

# sample_dict = {
# 	"name": "Kelly",
# 	"age":25,
# 	"salary": 8000,
# 	"city": "New york"
# }
# print(sample_dict)
#RESULT: {'name': 'Kelly', 'age': 25, 'salary': 8000, 'city': 'New york'}

#HACK: Delete Manuel
# keys_to_remove = ["name", "salary"]
# del sample_dict["name"]
# del sample_dict["salary"]

# print(sample_dict)

#RESULT: {'age': 25, 'city': 'New york'}

#HACK: Delete Auto

# for key in keys_to_remove:
# 	del sample_dict[key]

# print(sample_dict)




# -------------------------------------
#NOTE: Advanced List, Dictionaries and Loops

#NOTE: 1. For Loops and dictionariesList Comprehensions

# my_books = {
# 	"title": "Harry Potter",
# 	"author": "JK Rowling",
# }
# for x, y in my_books.items():
#     print("the" + x + "is" + y)
#RESULT: the title is Harry Potter, the author is JK Rowling

#NOTE: 2. Loops Operator
# print(list(range(0, 10)))
#RESULT: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
# print(list(range(1, 11)))
#RESULT: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# print(list(range(1, 10, 2)))
#RESULT: [1, 3, 5, 7, 9]

#NOTE: enumerate(iterable) : enumerate each item in the iterable
enumerate("Hello kitty")
