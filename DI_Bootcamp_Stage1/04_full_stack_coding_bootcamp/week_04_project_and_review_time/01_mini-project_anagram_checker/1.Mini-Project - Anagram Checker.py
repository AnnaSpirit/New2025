import os
from collections import Counter

class AnagramChecker:
    def __init__(self) -> None:
        # Load the word list from the file
        with open(r'E:\New2025\DI_Bootcamp_Stage1\04_full_stack_coding_bootcamp\week_04_project_and_review_time\01_mini-project_anagram_checker\words_list.txt', encoding='utf-8') as f:
            word_list = f.read().splitlines()
        
        # Create a dictionary with uppercase words as keys and their letter frequencies as values
        self.word_dict = {word.upper(): Counter(word.upper()) for word in word_list}
    
    def is_valid_word(self, word: str) -> bool:
        # Check if the word is valid (single word and starts with a letter)
        if len(word.split()) > 1 or not word[0].isalpha():
            raise ValueError("Invalid word. Please enter a single word containing only letters.")
        return True
        
    def get_anagrams(self, word: str):
        # Convert the word to uppercase for uniform comparison
        word = word.upper()
        
        # Validate the word
        self.is_valid_word(word)
        
        # Use Counter to count the frequency of letters in the word
        word_counter = Counter(word)
        
        # Find anagrams by comparing letter frequencies
        anagrams = [dico for dico in self.word_dict if self.word_dict[dico] == word_counter]
        
        return anagrams
        
    def is_anagram(self, word1: str, word2: str) -> bool:
        # Check if word2 is an anagram of word1
        return word2.upper() in self.get_anagrams(word1.upper())

# Create an instance of AnagramChecker
anagram_checker = AnagramChecker()

# Prompt the user to enter a word
asked_word = input("Enter a word to find its anagrams: ").strip()

try:
    # Get the list of anagrams for the entered word
    anagrams = anagram_checker.get_anagrams(asked_word)
    
    # Display the result
    if anagrams:
        print(f"The anagrams of '{asked_word}' are: {', '.join(anagrams)}")
    else:
        print(f"No anagrams found for '{asked_word}'.")
except ValueError as e:
    print(e)