#  Exercise 1 : Dictionary

#     1. Given a list: [("name", "Elie"), ("job", "Instructor")], create a dictionary that looks like this: {'job': 'Instructor', 'name': 'Elie'} (Note: The order does not matter).

lst = [("name", "Elie"), ("job", "Instructor")]
my_dict = dict(lst)
print(my_dict)

#     2. Given two lists: ["CA", "NJ", "RI"] and ["California", "New Jersey", "Rhode Island"], return a dictionary that looks like this: {'CA': 'California', 'NJ': 'New Jersey', 'RI': 'Rhode Island'}.

letters_2 = ["CA", "NJ", "RI"]
states_2 = ["California", "New Jersey", "Rhode Island"]
my_dict_2 = {letter: state for letter, state in zip(letters_2, states_2)}
print(my_dict_2)

#     3. Create a dictionary where the keys are vowels in the alphabet and the values are 0. Your dictionary should look like this: {'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u': 0}. (Do not use the fromkeys method).

vowels = "aeiou"
my_dict_3 = {}
for vowel in vowels:
    my_dict_3[vowel] = 0
print(my_dict_3)

#     4. Create a dictionary where the key is the position of the letter in the alphabet, and the value is the letter itself. You should return something like this:

#     {1: 'A',
#      2: 'B',
#      3: 'C',
#      4: 'D',
#      5: 'E',
#      6: 'F',
#      7: 'G',
#      8: 'H',
#      9: 'I',
#      10: 'J',
#      11: 'K',
#      12: 'L',
#      13: 'M',
#      14: 'N',
#      15: 'O',
#      16: 'P',
#      17: 'Q',
#      18: 'R',
#      19: 'S',
#      20: 'T',
#      21: 'U',
#      22: 'V',
#      23: 'W',
#      24: 'X',
#      25: 'Y',
#      26: 'Z'}


import string
alphabet = string.ascii_uppercase
my_dict_4 = {i + 1: letter for i, letter in enumerate(alphabet)}
print(my_dict_4)

#     Super Bonus:

#     Given the string "awesome sauce", return a dictionary where the keys are vowels, and the values are the count of each vowel in the string. Your dictionary should look like this: {'a': 2, 'e': 3, 'i': 0, 'o': 1, 'u': 1}.

string = "awesome sauce"
vowels = "aeiou"
vowel_count = {vowel: 0 for vowel in vowels}
for char in string:
    if char in vowel_count:
        vowel_count[char] += 1
print(vowel_count)
