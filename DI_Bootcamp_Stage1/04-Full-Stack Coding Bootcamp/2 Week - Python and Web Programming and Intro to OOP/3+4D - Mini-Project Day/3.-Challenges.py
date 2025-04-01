# EXERCICE: 1 : Write a script that inserts an item at a defined index in a list.

def insert_item_at_index(first, index, item):
    first.insert(index, item)
    return first

print(insert_item_at_index([1, 2, 3, 4], 2, 5))

#RESULT: [1, 2, 5, 3, 4]

# EXERCICE: 2 :Write a script that counts the number of spaces in a string.

def count_spaces(string):
    return string.count(' ')

print(count_spaces('Hello there the World!'))
#RESULT: 3

# EXERCICE: 3 :Write a script that calculates the number of upper case letters and lower case letters in a string.

def count_upper_lower(string):
    upper = 0
    lower = 0
    for letter in string:
        if letter.isupper():
            upper += 1
        elif letter.islower():
            lower += 1
    return upper, lower

print(count_upper_lower('Hello there the World!'))
#RESULT: (2, 17)

# EXERCICE: 4 :Write a function to find the sum of an array without using the built in function:

def sum_array(arr):
    total = 0
    for num in arr:
        total += num
    return total

print(sum_array([1, 2, 3, 4, 5]))
#RESULT: 15

# EXERCICE: 5 :Write a function to find the max number in a list

def max_num(arr):
    max = arr[0]
    for num in arr:
        if num > max:
            max = num
    return max

print(max_num([1, 2, 3, 4, 5]))
#RESULT: 5

# EXERCICE: 6 : Write a function that returns factorial of a number

def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)
    
print(factorial(5))
#RESULT: 120

# EXERCICE: 7: Write a function that counts an element in a list (without using the count method):



# EXERCICE: 8: Write a function that returns the L2-norm (square root of the sum of squares) of the sum of a list:


# EXERCICE: 9: Write a function to find if an array is monotonic (sorted either ascending of descending)


# EXERCICE: 10 :Write a function that prints the longest word in a list.


# EXERCICE: 11: Given a list of integers and strings, put all the integers in one list, and all the strings in another one.


# EXERCICE: 12: Write a function to check if a string is a palindrome:


# EXERCICE: 13: Write a function that returns the amount of words in a sentence with length > k:


# EXERCICE: 14 :Write a function that returns the average value in a dictionary (assume the values are numeric):


# EXERCICE: 15: Write a function that returns common divisors of 2 numbers:


# EXERCICE: 16: Write a function that test if a number is prime:


# EXERCICE: 17: Write a function that prints elements of a list if the index and the value are even:


# EXERCICE: 18: Write a function that accepts an undefined number of keyword-ed arguments and return the count of different types:


# EXERCICE: 19: Write a function that mimics the builtin .split() method for strings. By default the function uses whitespace but it should be able to take an argument for any character and split with that argument.


# EXERCICE: 20: Convert a string into password format.

