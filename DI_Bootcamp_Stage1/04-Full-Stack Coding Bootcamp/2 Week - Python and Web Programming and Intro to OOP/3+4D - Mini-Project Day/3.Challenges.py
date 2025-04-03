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

def count_element(my_list, target):
    count = 0
    for item in my_list:
        if item == target:
            count += 1
    return count

# Test the function
my_list = ['apple', 'banana', 'apple', 'cherry', 'apple']
result = count_element(my_list, 'apple')
print(result)
#RESULT: 3

#OTHER: 
def count_element(my_list, target):
    return sum(1 for item in my_list if item == target)


# EXERCICE: 8: Write a function that returns the L2-norm (square root of the sum of squares) of the sum of a list:

import math

def norm_of_sum_typeL2(number_list):
    total = sum(number_list)
    l2_norm = math.sqrt(total ** 2)
    return l2_norm

#Test the function
values = [3, -4, 5]
print(norm_of_sum_typeL2(values))  # Résultat : 4.0
#RESULT: 4.0

# EXERCICE: 9: Write a function to find if an array is monotonic (sorted either ascending of descending)
#INFO: Un tableau est monotone si : Chaque élément suivant est plus grand ou égal (croissant) ou Chaque élément suivant est plus petit ou égal (décroissant)

def is_monotonic(number_list):
    is_increasing = True
    is_decreasing = True

    for i in range(1, len(number_list)):
        if number_list[i] > number_list[i - 1]:
            is_decreasing = False
        if number_list[i] < number_list[i - 1]:
            is_increasing = False

    return is_increasing or is_decreasing

#test the function
print(is_monotonic([1, 2, 2, 3]))      # True (croissant)
print(is_monotonic([5, 4, 4, 2, 1]))   # True (décroissant)
print(is_monotonic([1, 3, 2]))         # False

#RESULT: True, True, False

#OTHER: + OOP

#Définir la structure de base
class MonotonicChecker:
    def __init__(self, number_list):
        self.number_list = number_list

#Ajouter la méthode de vérification
    def is_monotonic(self):
        increasing = True
        decreasing = True

        for index in range(1, len(self.number_list)):
            current = self.number_list[index]
            previous = self.number_list[index - 1]

            if current > previous:
                decreasing = False
            if current < previous:
                increasing = False

        return increasing or decreasing

#test the OOP
my_checker = MonotonicChecker([1, 2, 2, 3])
print(my_checker.is_monotonic())
#RESULT: True

other_checker = MonotonicChecker([5, 4, 2, 1])
print(other_checker.is_monotonic())
#RESULT: True

chaotic = MonotonicChecker([1, 3, 2])
print(chaotic.is_monotonic())
#RESULT: False


# EXERCICE: 10 :Write a function that prints the longest word in a list.

def print_longest_word(word_list):
    if not word_list:
        print("La liste est vide.")
        return

    longest_word = word_list[0]

    for word in word_list:
        if len(word) > len(longest_word):
            longest_word = word

    print("The longest word is :", longest_word)

#test the function
words = ["cat", "hippopotamus", "dog", "elephant"]
print_longest_word(words)
#RESULT: The longest word is : hippopotamus

#OTHER: all longest words

def print_longest_words(word_list):
    if not word_list:
        print("La liste est vide.")
        return

    max_length = max(len(word) for word in word_list)
    longest_words = [word for word in word_list if len(word) == max_length]

    print("Word (s) Longer (s) :", ", ".join(longest_words))

#Test the function
words = ["chat", "singe", "chien", "zèbre", "chien"]
print_longest_words(words)
#RESULT: Word (s) Longer (s) : singe, chien, zèbre, chien


# EXERCICE: 11: Given a list of integers and strings, put all the integers in one list, and all the strings in another one.

def separate_by_type(mixed_list):
    integer_list = []
    string_list = []

    for element in mixed_list:
        if isinstance(element, int):
            integer_list.append(element)
        elif isinstance(element, str):
            string_list.append(element)

    return integer_list, string_list

# Test the function
data = [1, "cat", 42, "dog", 7, "bird", 3]
numbers, words = separate_by_type(data)

print("Integers :", numbers)
#RESULT:[1, 42, 7, 3]
print("Strings :", words)
#RESULT: ["cat", "dog", "bird"]


# EXERCICE: 12: Write a function to check if a string is a palindrome:

def is_palindrome(text):
    # Mettre tout en minuscules et supprimer les espaces
    cleaned_text = text.lower().replace(" ", "")
    
    # Vérifier si le texte nettoyé est égal à son inverse
    return cleaned_text == cleaned_text[::-1]

# Test the function
print(is_palindrome("radar"))
#RESULT: True
print(is_palindrome("Race car"))
#RESULT: True (car espace ignoré)
print(is_palindrome("Bonjour"))
#RESULT: False


# EXERCICE: 13: Write a function that returns the amount of words in a sentence with length > k:

def count_and_list_words_longer_than_k(sentence, k):
    # Séparer la phrase en mots
    word_list = sentence.split()

    # Filtrer les mots dont la longueur est strictement supérieure à k
    long_words = [word for word in word_list if len(word) > k]

    # OTHER: Trier les mots filtrés par longueur décroissante et les mettre en majuscules
    formatted_words = sorted([word.upper() for word in long_words], key=len, reverse=True)

    #OTHER: Retourner le nombre et la liste formatée
    return len(long_words), formatted_words


# Test the function
sentence = "The hippopotamus swims in the muddy river"
count, words = count_and_list_words_longer_than_k(sentence, 4)

print("Count:", count)
#RESULT: Count: 3
print("Words:", words)
#RESULT: Words: ['HIPPOPOTAMUS', 'SWIMS', 'MUDDY']


# EXERCICE: 14 :Write a function that returns the average value in a dictionary (assume the values are numeric):

def average_value_in_dictionary(data_dictionary):
    # Vérifier si le dictionnaire est vide
    if not data_dictionary:
        return 0  # Ou None, selon l’usage voulu
    
    # Extraire les valeurs du dictionnaire
    values = data_dictionary.values()

    # Calculer la moyenne
    average = sum(values) / len(values)

    return average

#Test the function
sample_data = {"math": 15, "science": 18, "history": 12}
print(average_value_in_dictionary(sample_data))
#RESULT: 15.0

# EXERCICE: 15: Write a function that returns common divisors of 2 numbers:

def common_divisors(number_one, number_two):
    # Trouver le plus petit des deux nombres
    minimum = min(number_one, number_two)

    # Créer une liste pour stocker les diviseurs communs
    divisors = []

    # Parcourir tous les entiers de 1 jusqu'au minimum inclus
    for i in range(1, minimum + 1):
        # Vérifier si i divise les deux nombres sans reste
        if number_one % i == 0 and number_two % i == 0:
            divisors.append(i)

    # Retourner la liste des diviseurs communs
    return divisors

#Test the function
print(common_divisors(18, 34))
#RESULT: [1, 2]

print(common_divisors(120, 45))
#RESULT: [1, 3, 5, 15]

#OTHER: with GCD = Greatest Common Divisor.

import math

def common_divisors_fast(number_one, number_two):
    # Calculer le plus grand diviseur commun
    greatest_common = math.gcd(number_one, number_two)

    # Trouver tous les diviseurs de ce PGCD
    common_divisors = [i for i in range(1, greatest_common + 1) if greatest_common % i == 0]

    # Retourner la liste des diviseurs communs
    return common_divisors

#Test the function
print("Test 1:", common_divisors_fast(12, 18))
#RESULT: [1, 2, 3, 6]
print("Test 2:", common_divisors_fast(100, 25))
#RESULT: [1, 5, 25]
print("Test 3:", common_divisors_fast(17, 31))
#RESULT: [1]   (Parce que ce sont des nombres premiers entre eux)

# EXERCICE: 16: Write a function that test if a number is prime (Nombre premier):

def is_prime(number):
    # Tous les nombres ≤ 1 ne sont pas premiers
    if number <= 1:
        return False

    # 2 est le seul nombre pair premier
    if number == 2:
        return True

    # Éliminer les nombres pairs plus grands que 2
    if number % 2 == 0:
        return False

    # Tester les diviseurs impairs jusqu'à la racine carrée du nombre
    for possible_divisor in range(3, int(number ** 0.5) + 1, 2):
        if number % possible_divisor == 0:
            return False

    return True

#Test the function
test_numbers = [7, 11, 12, 29, 37, 49, 53, 77, 97]

for value in test_numbers:
    result = is_prime(value)
    print(f"{value} is prime? {result}")

#RESULT: 7 is prime? True
#RESULT: 11 is prime? True
#RESULT: 12 is prime? False
#RESULT: 29 is prime? True
#RESULT: 37 is prime? True
#RESULT: 49 is prime? False
#RESULT: 53 is prime? True
#RESULT: 77 is prime? False
#RESULT: 97 is prime? True

# OTHER: 
    
def filter_primes(number_list):
    # Retourner une liste contenant uniquement les nombres premiers
    return [number for number in number_list if is_prime(number)]

#Test the function

test_numbers = [7, 11, 12, 29, 37, 49, 53, 77, 97]
prime_only_list = filter_primes(test_numbers)
print("Prime numbers only:", prime_only_list)

# EXERCICE: 17: Write a function that prints elements of a list if the index and the value are even:

def print_even_index_and_value(number_list):
    # Parcourir la liste avec les index
    for index in range(len(number_list)):
        value = number_list[index]

        # Vérifier si l'index ET la valeur sont pairs
        if index % 2 == 0 and value % 2 == 0:
            print(f"Index: {index}, Value: {value}")

#Test the function
sample_list = [10, 13, 24, 33, 42, 51, 64, 75]
print_even_index_and_value(sample_list)
#RESULT: Index: 0, Value: 10, Index: 2, Value: 24, Index: 4, Value: 42, Index: 6, Value: 64


# EXERCICE: 18: Write a function that accepts an undefined number of keyword-ed arguments and return the count of different types:  **kwaergs

def count_value_types(**keyword_arguments):
    # Créer un dictionnaire pour compter les types
    type_counter = {}

    # Parcourir chaque valeur dans les arguments nommés
    for value in keyword_arguments.values():
        value_type = type(value).__name__  # Obtenir le nom du type (ex: "int", "str", etc.)

        # Incrémenter le compteur pour ce type
        if value_type in type_counter:
            type_counter[value_type] += 1
        else:
            type_counter[value_type] = 1

    # Retourner le dictionnaire des types et de leurs occurrences
    return type_counter

#Test the function
result = count_value_types(name="Anna", age=30, scores=[10, 20], is_valid=True, note=4.5)

print(result)
#RESULT: {'str': 1, 'int': 1, 'list': 1, 'bool': 1, 'float': 1}

#OTHER: Test the function with different types
result = count_value_types(
    name="Anna",
    city="Paris",
    hobby="coding",
    
    age=30,
    year=2025,
    height_cm=165,
    lucky_number=7,
    zip_code=75000,
    
    scores=[10, 20, 30],
    tasks=["code", "sleep"],
    tags=["python", "AI"],
    playlist=["jazz", "lofi", "rock"],
    
    is_active=True,
    
    temperature=36.6,
    gpa=4.0
)

print(result)
#RESULT:{'str': 3, 'int': 5, 'list': 4, 'bool': 1, 'float': 2}

# EXERCICE: 19: Write a function that mimics the builtin .split() method for strings. By default the function uses whitespace but it should be able to take an argument for any character and split with that argument.

def custom_split(text, separator=" "):
    # Initialiser la liste pour stocker les morceaux de texte
    result = []
    current_word = ""

    # Parcourir chaque caractère de la chaîne
    for character in text:
        # Si le caractère est le séparateur, on termine un mot
        if character == separator:
            if current_word != "":
                result.append(current_word)
                current_word = ""
        else:
            # Ajouter le caractère au mot en cours
            current_word += character

    # Ajouter le dernier mot s'il existe
    if current_word != "":
        result.append(current_word)

    # Retourner la liste des morceaux
    return result

#Test the function
print(custom_split("hello world this is Anna"))  
#RESULT: ['hello', 'world', 'this', 'is', 'Anna']

text = "one,,,three,,four,,,five"
result = text.split(",")
print(result)
#RESULT: ['one', '', '', 'three', '', 'four', '', '', 'five']

#OTHER: 
def custom_split(text, separator=" "):
    # Initialiser la liste pour stocker les morceaux
    result = []
    current_piece = ""

    # Parcourir chaque caractère de la chaîne
    for character in text:
        if character == separator:
            # Ajouter le morceau actuel, même s'il est vide
            result.append(current_piece)
            current_piece = ""
        else:
            current_piece += character

    # Ajouter le dernier morceau après la boucle
    result.append(current_piece)

    return result

#Test the function
example_text = "one,,three,four,,five"
print(custom_split(example_text, separator=","))
#RESULT: ['one', '', 'three', 'four', '', 'five']

print(custom_split(",,start,and,end,,", separator=","))
#RESULT: ['', '', 'start', 'and', 'end', '', '']



# EXERCICE: 20: Convert a string into password format.

def mask_password(text):
    # Remplacer chaque caractère par une étoile
    return "*" * len(text)

#Test the function
print(mask_password("mYpAsswORd"))  
#RESULT: **********
