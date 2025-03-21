#COURSE: Define a dictionary
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

#COURSE: Accessing data: we use the name of its key.
# print(my_dog['name'])
#RESULT: Rufus

# print("The last name of rick is:", rick_dict['last_name'])
#RESULT: The last name of rick is: Sanchez

# a_dict = {'color': 'blue', 'fruit': 'apple', 'pet': 'dog'}

# print(a_dict.items())
#RESULT: dict_items([('color', 'blue'), ('fruit', 'apple'), ('pet', 'dog')])

#HACK: The items() method returns a view object that displays a list of dictionary's (key, value) tuple pairs.

# for key, value in a_dict.items():
#     print(key, '->', value)
#RESULT: color -> blue, fruit -> apple, pet -> dog

#COURSE: Data types
# my_dog = {
# 	'name': 'Rufus',
# 	'age': 4,
# 	'best_friend': {
#     	'name': 'Felix',
#     	'age': 4.5
# },
# 	'favorite_foods': ['steaks', 'sausages', 'shawarma']
# }
#COURSE: Dictionaries and lists

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

#COURSE: 4. Modify an entry in a dictionary

# rick_dict['last_name'] = 'SANCHEZ'
#RESULT: {'first_name': 'Rick', 'last_name': 'SANCHEZ'}

#COURSE: 5. Adding an entry to an existing dictionary

# rick_dict['hair_color'] = 'white'
#RESULT: {'first_name': 'Rick', 'last_name': 'SANCHEZ', 'hair_color': 'white'}

#COURSE: 6. Delete an entry in a dictionary

# del rick_dict['hair_color']
#RESULT: {'first_name': 'Rick', 'last_name': 'SANCHEZ'}

#COURSE: The **in** keyword

# for shirt in shirts:
# 	print(shirt['size'])
#RESULT: S, M, L

#COURSE: Built-in methods
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
#COURSE: Advanced List, Dictionaries and Loops

#COURSE: 1. For Loops and dictionariesList Comprehensions

# my_books = {
# 	"title": "Harry Potter",
# 	"author": "JK Rowling",
# }
# for x, y in my_books.items():
#     print("the" + x + "is" + y)
#RESULT: the title is Harry Potter, the author is JK Rowling

#COURSE: 2. Loops Operator
# print(list(range(0, 10)))
#RESULT: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
# print(list(range(1, 11)))
#RESULT: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# print(list(range(1, 10, 2)))
#RESULT: [1, 3, 5, 7, 9]

#COURSE: enumerate(iterable) : enumerate each item in the iterable
# enumerate("Hello kitty") 
#RESULT: <enumerate object at 0x7f8b1c3b3f00>
# list(enumerate("Hello kitty"))
#RESULT: [(0, 'H'), (1, 'e'), (2, 'l'), (3, 'l'), (4, 'o'), (5, ' '), (6, 'k'), (7, 'i'), (8, 't'), (9, 't'), (10, 'y')]

#QUESTION: 
# for index, letter in enumerate("Hello kitty"):
#     print(index, letter)
#RESULT: 0 H, 1 e, 2 l, 3 l, 4 o, 5  , 6 k, 7 i, 8 t, 9 t, 10 y

# list(range("abcd"))
# RESULT: str object cannot be interpreted as an integer
for (index_count, letter) in enumerate("abcd"):
	print(f"At index {index_count}, the letter is {letter}.".format(index_count, letter))
#RESULT: At index 0, the letter is a, At index 1, the letter is b, At index 2, the letter is c, At index 3, the letter is d
#COURSE: format method est utilisé pour formater une chaîne de caractères 

#COURSE: zip(iterable,..) : concat [iterables, …] in a tuple.
list1 = [1,2,3]
list2 = ['a','b','c']
list3 = [1.1, 2.2, 3.3, 4.4, 5.5]

for item in zip(list1, list2, list3):
    print(item)
#RESULT: (1, 'a', 1.1), (2, 'b', 2.2), (3, 'c', 3.3)

# COURSE: For else
# for i in range(1, 3):
#     print(i)
# else:
#     print('The for loop is over')
#RESULT: 1, 2, The for loop is over

# COURSE: While Else - The else block will be executed if the while loop was not interrupted by a break statement.
# while some_condition:
#     # do something
# else:
#     # do another thing
x = 0
while x < 2:
    print(f'x is {x}')
    x += 1
else:
    print('x is bigger than 2')
#RESULT: x is 0, x is 1, x is bigger than 2

#COURSE: Break, Continue, Pass
for letter in 'Leonardo':
    if letter == 'a':
        break
    print(letter, end='') # end='' renders each letter next to the other
#RESULT: Leon

for letter in 'Leonardo':
    if letter == 'o':
        continue
    print(letter, end='') # dont execute for 'o' letter
# RESULT: Lenard

for item in [1,2,3]:
    # comment
    pass # to avoid the error

print('Finish the script')
#RESULT: Finish the script
# HACK: Permet de creer un bloc de code vide car on a pas toutes les info, ou cela creer des erreurs.

# COURSE: A- The basic way of appending an element into a list

my_number = '1234'
my_list = []

for num in my_number:
    my_list.append(num)
print(my_list)

#RESULT: ['1', '2', '3', '4']

# COURSE:B- The list comprehension way
my_number = '1234'
my_list = []

my_list = [num for num in my_number]
print(my_list)
#RESULT: ['1', '2', '3', '4']
# COURSE:C- The basic way of appending an element into a list with Nested Loop
my_list = []

for i in [2, 3, 4]:
    for j in [100, 200, 300]:
        my_list.append(i*j)

#HACK: append(i*j) is the same as append(i*j) for i in [2, 3, 4] for j in [100, 200, 300]
print(my_list)
#RESULT: [200, 400, 600, 300, 600, 900, 400, 800, 1200]

#OR:
my_number = '1234'
my_list = [int(num) *2 for num in my_number]
print(my_list)
#RESULT: [2, 4, 6, 8]

#OR:
my_list = []

for num in my_number:
	my_list.append(int(num)*2)
print(my_list)
#RESULT: [2, 4, 6, 8]

#QUESTION: How to print my_list ordered?

print(sorted(my_list))

#RESULT: [200, 300, 400, 400, 600, 600, 800, 900, 1200]

#COURSE:D- The list comprehension way

my_list = []
my_list = [(i*j) for i in [2, 3, 4] for j in [100, 200, 300]]
print(my_list)

#RESULT: [200, 400, 600, 300, 600, 900, 400, 800, 1200]

#COURSE: E- Dictionary comprehension
#HACK: dictionary = {key: value for var in iterable}
family_age = {'Lea': 12, 'Mark': 25, 'George': 50}
new_year = 1
new_family_age = {name: age+new_year for (name, age) in family_age.items()}
print(new_family_age)

#RESULT: {'Lea': 13, 'Mark': 26, 'George