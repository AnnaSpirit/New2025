# Given a list [1, 2, 3, 4], print out all the values in the list one by one.
lst = [1, 2, 3, 4]
[print(value) for value in lst]

# Given a list [1, 2, 3, 4], print out all the values in the list multiplied by 20.
[print(value * 20) for value in lst]

# Given a list ["Elie", "Tim", "Matt"], return a new list with only the first letter of each name
names = ["Elie", "Tim", "Matt"]
first_letters = [name[0] for name in names]
print(first_letters)

# Given a list [1, 2, 3, 4, 5, 6], return a new list with all the even values
numbers = [1, 2, 3, 4, 5, 6]
evens = [num for num in numbers if num % 2 == 0]
print(evens)

# Given two lists [1, 2, 3, 4] and [3, 4, 5, 6], return values present in both lists
list1 = [1, 2, 3, 4]
list2 = [3, 4, 5, 6]
common = [num for num in list1 if num in list2]
print(common)

# Given a list of words, return each word reversed and in lowercase
words = ["Elie", "Tim", "Matt"]
reversed_lower = [word[::-1].lower() for word in words]
print(reversed_lower)

# Given two strings "first" and "third", return letters present in both strings
str1 = "first"
str2 = "third"
common_letters = [char for index, char in enumerate(str1) if char in str2 and char not in str1[:index]]
print(common_letters)

# Numbers between 1 and 100 divisible by 12
div_by_12 = [num for num in range(1, 101) if num % 12 == 0]
print(div_by_12)

# Remove vowels from "amazing"
string = "amazing"
vowels = "aeiou"
no_vowels = [char for char in string if char not in vowels]
print(no_vowels)

# Generate [[0, 1, 2], [0, 1, 2], [0, 1, 2]]
nested_list = [[i for i in range(3)] for _ in range(3)]
print(nested_list)

# Generate 10 lists from 0 to 9
big_nested_list = [[i for i in range(10)] for _ in range(10)]
print(big_nested_list)
