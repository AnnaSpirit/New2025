#COURSE: Functions
#HACK: DRY = Don't Repeat Yourself -- Functions are a way to group code together and reuse it

def say_hello():
#NOTE: def to inform Python that you’re defining a function with its name
#NOTE: say_hello is the name of the function. the parentheses are used to pass arguments to the function
#NOTE: The colon at the end of the first line is required to start the function body.
    """A function that says hello"""
    print("Hello!") 

say_hello()
#NOTE: This is how you call a function. You write the name of the function followed by parentheses.

def say_hello_to(name):
    print(f"Hello👋🏻, {name}!")

say_hello_to("Sam")
say_hello_to("Markus")
say_hello_to("Mick")
say_hello_to("Ilan")
#NOTE: Sam, Markus, Mick, and Ilan are the arguments passed to the function say_hello_to
#RESULT: Hello👋🏻, Sam!, Hello👋🏻, Markus!, Hello👋🏻, Mick!, Hello👋🏻, Ilan!
#COURSE: function that accept more than one argument

def say_hello(username, language):
    if language == "EN":
        print("Hello "+username)
    elif language == "FR":
        print("Bonjour "+username)
    elif language == "RU":
        print("Привет "+username)
    elif language == "HE":
        print("שלום "+username)
    elif language == "SW":
        print("Hej "+username)
    else:
        print("This language is not supported: " + language)

say_hello("Rick", "EN")
say_hello("Jacques", "FR")
say_hello("Markus", "RU")
say_hello("דוד", "HE")
say_hello("Svea", "SW")

#RESULT: Hello Rick, Bonjour Jacques, Привет Markus, ש,ום דוד, Hej Svea

#COURSE: Local and Global scope
#LOCAL
def number_by_three(name, day):
  sentence = f'Hello {name}! Today is {day}.'
  print(sentence)

print(day)

#RESULT: NameError: name 'day' is not defined (Error in terminal :["\"day\" is not defined"]

}]))
#NOTE: Le jour de la variable est défini à l'intérieur de la fonction Number_BY_THREE et n'est pas accessible en dehors de celui-ci.

#GLOBAL
name = 'Avner'
def say_hi():
  print(name)

say_hi()
#RESULT: Avner
#NOTE: Le nom de variable est défini en dehors de la fonction Say_Hi et est accessible à l'intérieur.

#COURSE: Return Values
def get_formatted_name(first_name, last_name):
    """Return a full name, neatly formatted."""
    full_name = first_name + ' ' + last_name
    return full_name.title()

musician = get_formatted_name('jimi', 'hendrix') 
print(musician)
#RESULT: Jimi Hendrix

def divide_by_three(number):
    return number / 3

first_number = 12
first_number_computed = divide_by_three(first_number)
print(first_number_computed)
#RESULT: 4.0

second_number = 27
second_number_computed = divide_by_three(second_number)
print(second_number_computed)
#RESULT: 9.0

# EXERCICE: Write a function calculation() such that it can accept two variables and calculate the addition and subtraction of it. And also it must return both addition and subtraction in a single return call

def calculation(a, b):
    return a+b, a-b

res = calculation(40, 10)
print(res)
#RESULT: (50, 30)

#COURSE: Functions #2
#Passing list as function arguments

def greet_users(users):   # users should be a list
    for user in users:    # Because it's a list, we can loop through it
        print("Hello " + user.title() + " !")    # For each user, print "hello" and then his name

usernames = ["steve", "stan", "debbie"]
greet_users(usernames)

#RESULT: Hello Steve !, Hello Stan !, Hello Debbie !

#Modifying a list in a function
unprinted_designs = ['iphone case', 'robot pendant', 'dodecahedron'] 
completed_models = []

# Simulate printing each design until none are left. 
# Move each design to completed_models after printing. 

while len(unprinted_designs) != 0:    
    current_design = unprinted_designs.pop() 

    # Simulate creating a 3D print from the design.    
    print("Printing model: " + current_design)    
    completed_models.append(current_design)    

# Display all completed models. 
print("\nThe following models have been printed:") 
for completed_model in completed_models:    
    print(completed_model)
    
#RESULT:Printing model: dodecahedron, Printing model: robot pendant, Printing model: iphone case, The following models have been printed:, dodecahedron, robot pendant, iphone case

#COURSE: Arguments and Keyword Arguments (*args and **kwargs)

#NOTE: Python has a special syntax, * (unpacking operator) and ** (unpacking operator), that lets you pass a variable number of arguments to a function.

def check_arguments(*args):
    print(f"These are the arguments {args}")
check_arguments(1, 2, 'hey')

#RESULT: #These are the arguments (1, 2, 'hey') // You get a tuple

def check_tuple(a,b):
    # Returns the sum of 'a' and 'b'
    return sum((a,b))

print(check_tuple(10,30))

RESULT: 40

#Multiple *args
def check_multiple_arguments(*args):
    return sum(args)

print(check_multiple_arguments(10,20,100,30))

#RESULT: 160  (10+20=30+100=130+30=160)
# NOTE: You can pass as many arguments as you want

# **kwargs
def check_keyword_arguments(**kwargs):
    return kwargs

print(check_keyword_arguments(fruit='apple', ordered=2))

#RESULT: {'fruit': 'apple', 'ordered': 2}
#NOTE: **kwargs allows you to pass keyworded variable length of arguments to a function. You should use **kwargs if you want to handle named arguments in a function.

#COURSE: *args and **kwargs together

def check_arguments_keywordedarguments (required_arg, *args, **kwargs):
    print(required_arg)
    if args:
        print(args)
    if kwargs:
        print(kwargs)

check_arguments_keywordedarguments("required argument")
check_arguments_keywordedarguments("required argument", 1, 2, 'hey')
check_arguments_keywordedarguments("required argument", 1, 2, 'hey', name="Sarah", age=24)

#RESULT: required argument, (1, 2, 'hey'), {'name': 'Sarah', 'age': 24}
#NOTE: You can use all three types of arguments in a function. However, you must use them in the order: required arguments, *args, and **kwargs.You have to preserve the order !

# Passing *args and **kwargs as arguments

def check(a, b, c):
    print(a, b, c)

a = [1,2,3]
check(*a)
#RESULT: 1 2 3

a = {'a':'Sarah', 'b': 24}
check(**a)
#RESULT: TypeError: check() missing 1 required positional argument: 'c'

a = {'a':'Sarah', 'b':24, 'c': 180}
check(**a)
#RESULT: Sarah 24 180


#COURSE: Lambda, Map, Reduce & Filter Functions

#Lambda
#Lambda functions are small anonymous functions that can have any number of arguments, but can only have one expression.
def upper_string(s):
    return s.upper()

fruit = ["Apple", "Banana", "Pear", "Apricot", "Orange"]
map_object = map(upper_string, fruit)

print(list(map_object))

#RESULT: ['APPLE', 'BANANA', 'PEAR', 'APRICOT', 'ORANGE']

#Filter
def starts_with_A(s):
    return s[0] == "A"

fruit = ["Apple", "Banana", "Pear", "Apricot", "Orange"]
filtered_object = filter(starts_with_A, fruit)
#NOTE: Avec un A majuscule.

print(list(filtered_object))
#RESULT: ['Apple', 'Apricot']

#Reduce
from functools import reduce
#NOTE: La fonction Reduce () est définie dans le module Functools. Il applique un calcul roulant à des paires de valeurs séquentielles dans une liste.

def sum_numbers(first, second):
    return first+second

my_list = [1, 3, 5, 7]
reduced_list = reduce(sum_numbers, my_list)
print(reduced_list)

#RESULT: 16 (1+3=4+5=9+7=16) : La somme précédente devient le ´premier´ chiffre

#Lambda [[SYNTAX: lambda arg1, arg2: value_returned]]

# my_function = lambda s: s.upper()
# # This is the same as doing: 
# def my_function(s):
#     return s.upper()

# lambda + map

def upper_string(s):
    return s.upper()

fruit = ["Apple", "Banana", "Pear", "Apricot", "Orange"]
map_object = map(upper_string, fruit)
# OTHER:
# map_object = map(lambda s: s.upper(), fruit)
#NOTE: The lambda function takes a string and returns it in uppercase. The map function applies the lambda function to each element in the fruit list.

print(list(map_object))
#RESULT: ['APPLE', 'BANANA', 'PEAR', 'APRICOT', 'ORANGE']

# lambda + filter

def starts_with_A(s):
    return s[0] == "A"

fruit = ["Apple", "Banana", "Pear", "Apricot", "Orange"]
filtered_object = filter(starts_with_A, fruit)
# OTHER:
# filtered_object = filter(lambda s: s[0] == "A", fruit)

print(list(filtered_object))
# RESULT: ['Apple', 'Apricot']
 
# lambda + reduce
def power_numbers(first, second):
    return first**second

my_list = [1, 3, 5, 7]
reduced_list = reduce(power_numbers, my_list)
print(reduced_list)

