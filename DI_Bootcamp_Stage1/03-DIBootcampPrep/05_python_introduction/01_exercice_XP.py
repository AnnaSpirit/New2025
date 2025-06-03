# EXERCICE 1
    # Complete the exercises below by writing an expression in Python to answer the question:
    #     Declare a variable called first and assign it to the value "Hello World".
    #     Write a comment that says "This is a comment."
    #     Log a message to the terminal that says "I AM A COMPUTER!"
    #     Write an if statement that checks if 1 is less than 2 and if 4 is greater than 2. If it is, show the message "Math is fun."
    #     Assign a variable called nope to an absence of value.
    #     Use the language’s “and” boolean operator to combine the language’s “true” value with its “false” value.
    #     Calculate the length of the string "What's my length?"
    #     Convert the string "i am shouting" to uppercase.
    #     Convert the string "1000"to the number 1000.
    #     Combine the number 4 with the string "real" to produce "4real".
    #     Record the output of the expression 3 * "cool".
    #     Record the output of the expression 1 / 0.
    #     Determine the type of [].
    #     Ask the user for their name, and store it in a variable called name.
    #     Ask the user for a number. If the number is negative, show a message that says "That number is less than 0!" If the number is positive, show a message that says "That number is greater than 0!" Otherwise, show a message that says "You picked 0!.
    #     Find the index of "l" in "apple".
    #     Check whether "y" is in "xylophone".
    #     Check whether a string called my_string is all in lowercase.

    # When you’re ready, move on to List Basics

first = "Hello World"  
# This is a comment.
print("I AM A COMPUTER!")
if 1 < 2 and 4 > 2:
    print("Math is fun.")
nope = None
result = True and False
length = len("What's my length?")
uppercase = "i am shouting".upper()
number = int("1000")
combined = str(4) + "real"
output1 = 3 * "cool"
output2 = 1 / 0
type_of_list = type([])
name = input("What is your name? ")
number = int(input("Pick a number: "))
if number < 0:
    print("That number is less than 0!")
elif number > 0:
    print("That number is greater than 0!")
else:
    print("You picked 0!")
index = "apple".index("l")
contains = "y" in "xylophone"
is_lower = my_string.islower()


# EXERCICE 2
# Write a program that will calculate cat’s and dog’s years based on human years:

# I have a cat and a dog. I got them at the same time as kitten/puppy. That was humanYears years ago. Print their respective ages now as [humanYears,catYears,dogYears]

# NOTES:
# humanYears >= 1 humanYears are whole numbers only
# Cat Years 15 cat years for first year +9 cat years for second year +4 cat years for each year after that
# Dog Years 15 dog years for first year +9 dog years for second year +5 dog years for each year after that

humanYears = int(input("Enter the number of human years: "))
if humanYears < 1:
    print("Human years must be at least 1.")
else:
    catYears = 0
    dogYears = 0
    if humanYears == 1:
        catYears = 15
        dogYears = 15
    elif humanYears == 2:
        catYears = 24
        dogYears = 24
    else:
        catYears = 24 + (humanYears - 2) * 4
        dogYears = 24 + (humanYears - 2) * 5
    print([humanYears, catYears, dogYears])