# Exercise 1 : Lists
#     Write Python code to complete the following tasks.

#         Given a list [1, 2, 3, 4], print out all the values in the list one by one.

#         Given a list [1, 2, 3, 4], print out all the values in the list multiplied by 20.

#         Given a list ["Elie", "Tim", "Matt"], return a new list with only the first letter of each name: ["E", "T", "M"].

#         Given a list [1, 2, 3, 4, 5, 6], return a new list with all the even values: [2, 4, 6].

#         Given two lists [1, 2, 3, 4] and [3, 4, 5, 6], return a new list that contains only the values present in both lists: [3, 4].

#         Given a list of words ["Elie", "Tim", "Matt"], return a new list with each word reversed and in lowercase: ["eile", "mit", "ttam"].

#         Given two strings "first" and "third", return a new list of the letters that are present in both strings: ["i", "r", "t"].

#         For all numbers between 1 and 100, return a list of the numbers that are divisible by 12: [12, 24, 36, 48, 60, 72, 84, 96].

#         Given the string "amazing", return a list with all the vowels removed: ["m", "z", "n", "g"].

#         Generate a list with the following value: [[0, 1, 2], [0, 1, 2], [0, 1, 2]].

#         Generate a list with the following structure:
# [
#   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
#   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
#   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
#   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
#   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
#   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
#   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
#   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
#   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
#   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
# ]

# Given a list [1, 2, 3, 4], print out all the values in the list one by one.
lst = [1, 2, 3, 4]
for value in lst:
    print(value)

# Given a list [1, 2, 3, 4], print out all the values in the list multiplied by 20.
for value in lst:
    print(value * 20)

    # Given a list ["Elie", "Tim", "Matt"], return a new list with only the first letter of each name: ["E", "T", "M"].
    names = ["Elie", "Tim", "Matt"]
    first_letters = [name[0] for name in names]
    print(first_letters)

    # Given a list [1, 2, 3, 4, 5, 6], return a new list with all the even values: [2, 4, 6].
    numbers = [1, 2, 3, 4, 5, 6]
    evens = [num for num in numbers if num % 2 == 0]
    print(evens)

    # Given two lists [1, 2, 3, 4] and [3, 4, 5, 6], return a new list that contains only the values present in both lists: [3, 4].
    list1 = [1, 2, 3, 4]
    list2 = [3, 4, 5, 6]
    common = [num for num in list1 if num in list2]
    print(common)

    # Given a list of words ["Elie", "Tim", "Matt"], return a new list with each word reversed and in lowercase: ["eile", "mit", "ttam"].
    words = ["Elie", "Tim", "Matt"]
    reversed_lower = [word[::-1].lower() for word in words]
    print(reversed_lower)

    # Given two strings "first" and "third", return a new list of the letters that are present in both strings: ["i", "r", "t"].
    str1 = "first"
    str2 = "third"
    common_letters = [char for char in str1 if char in str2]
    # To remove duplicates and keep order
    common_letters = []
    for char in str1:
        if char in str2 and char not in common_letters:
            common_letters.append(char)
    print(common_letters)

    # For all numbers between 1 and 100, return a list of the numbers that are divisible by 12: [12, 24, 36, 48, 60, 72, 84, 96].
    div_by_12 = [num for num in range(1, 101) if num % 12 == 0]
    print(div_by_12)

    # Given the string "amazing", return a list with all the vowels removed: ["m", "z", "n", "g"].
    string = "amazing"
    vowels = "aeiou"
    no_vowels = [char for char in string if char not in vowels]
    print(no_vowels)

    # Generate a list with the following value: [[0, 1, 2], [0, 1, 2], [0, 1, 2]].
    nested_list = [[i for i in range(3)] for _ in range(3)]
    print(nested_list)

    # Generate a list with the following structure:
    # [
    #   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    #   ...
    #   (10 lists total)
    # ]
    big_nested_list = [[i for i in range(10)] for _ in range(10)]
    print(big_nested_list)

