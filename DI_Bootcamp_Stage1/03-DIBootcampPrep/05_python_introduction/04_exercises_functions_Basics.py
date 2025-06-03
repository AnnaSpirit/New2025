# Exercise 1 : Add Two Numbers
# 

#     Write a function add_two_numbers that takes two numbers as parameters and returns their sum.

#     
def add_two_numbers(num1, num2):
    return num1 + num2

# Example usage
print(add_two_numbers(3, 5))  # Output: 8
print(add_two_numbers(10, 20))  # Output: 30

# Exercise 2 : Print a Greeting
# 
#     Write a function greet that takes one parameter, a person’s name, and prints a greeting message like “Hello, [name]!”.

#     
def greet(name):
    print(f"Hello, {name}!")
    
# Example usage
greet("Alice")  # Output: "Hello, Alice!"
greet("Bob")    # Output: "Hello, Bob!"

# Exercise 3 : Check if Number is Even or Odd
# 
#     Write a function check_even_odd that takes one number and prints “Even” if the number is even, and “Odd” if the number is odd.
    
def check_even_odd(number):
    if number % 2 == 0:
        print("Even (pair)")
    else:
        print("Odd (impair)")

# Example usage
check_even_odd(4)  # Output: "Even (pair)"
check_even_odd(7)  # Output: "Odd (impair)"
check_even_odd(0) # Output: "Even (pair)"


# Exercise 4 : Sum of Numbers in a List

#     Write a function sum_list that takes a list of numbers as a parameter and returns the sum of all numbers in the list.

def sum_list(numbers):
    return sum(numbers)

# Example usage
print(sum_list([1, 2, 3, 4, 5]))  # Output: 15
print(sum_list([-1, 0, 1]))        # Output: 0

# Exercise 5 : Print Days of the Week

#     Write a function print_days that prints the days of the week (Sunday, Monday, Tuesday, etc.) using a loop.

def print_days():
    days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    for day in days:
        print(day)

# Example usage
print_days()

# Exercise 6 : Check if Number is Positive, Negative, or Zero

#     Write a function check_sign that takes a number and prints whether the number is positive, negative, or zero.
    
def check_sign(number):
    if number > 0:
        print("Positive")
    elif number < 0:
        print("Negative")
    else:
        print("Zero")
        
# Exercise 7 : Repeat a Word

#     Write a function repeat_word that takes a word and a number as parameters and prints the word that many times.

def repeat_word(word, times):
    for _ in range(times):
        print(word)

# Example usage
repeat_word("Hello", 3)  # Output: Hello (three times)

