# Exercise 1 : Return the Largest Number

#     Write a function find_largest that takes a list of numbers and returns the largest number in the list.
    
def find_largest(numbers):
    if not numbers:
        return None
    largest = numbers[0]
    for num in numbers:
        if num > largest:
            largest = num
    return largest

# Example usage
print(find_largest([1, 2, 3, 4, 5]))  # Output: 5

# Exercise 2 : Check for Letter in Word

#     Write a function check_letter that takes a word and a letter as parameters and checks if the letter is in the word. It should return True if the letter is found and False if not.

def check_letter(word, letter):
    return letter in word

# Example usage
print(check_letter("hello", "e"))  # Output: True
print(check_letter("hello", "a"))  # Output: False

Exercise 3 : Count to a Number

    Write a function count_to_number that takes a number as a parameter and prints all numbers from 1 to that number.

def count_to_number(n):
    for i in range(1, n + 1):
        print(i)
        
# Example usage
count_to_number(5)  # Output: 1 2 3 4 5
