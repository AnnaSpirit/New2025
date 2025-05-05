#EXERCICE: Challenge 1 : Sorting
# Instructions
#     Write a program that accepts a comma separated sequence of words as input and prints the words in a comma-separated sequence after sorting them alphabetically.
#     Use List Comprehension

input_words = input("Enter a comma-separated sequence of words: ")
words_list = [word.strip() for word in input_words.split(",")]
sorted_words = sorted(words_list, key=lambda x: x.lower())

capitalized_words = [word.capitalize() for word in sorted_words]
output = ", ".join(capitalized_words)

print("Sorted words:", output)
#RESULT: Sorted words: Bag,Hello,Without,World

#EXERCICE: Challenge 2 : Longest Word
# Instructions
#     Write a function that finds the longest word in a sentence. If two or more words are found, return the first longest word.
#     Characters such as apostrophe, comma, period count as part of the word (e.g. O’Connor is 8 characters long).

# Examples:

# longest_word("Margaret's toy is a pretty doll.") ➞ "Margaret's"
# longest_word("A thing of beauty is a joy forever.") ➞ "forever."
# longest_word("Forgetfulness is by all means powerless!") ➞ "Forgetfulness"

def longest_word(sentence):
    words = sentence.split()
    longest = ""
    max_len = 0

    for word in words:
        if len(word) > max_len:
            longest = word
            max_len = len(word)
    return longest, max_len

user_input = input("Enter a sentence: ")

longest_word_result, length = longest_word(user_input)

print(f"The longest word is '{longest_word_result}' with length {length}.")

#RESULT: The longest word is 'Forgetfulness' with length 15.