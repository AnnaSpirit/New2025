from collections import Counter

class AnagramChecker:

```
def __init__(self):
    """
    Load all words from the dictionary file.
    """

    with open("words_list.txt", "r", encoding="utf-8") as file:
        self.word_list = [
            word.strip().upper()
            for word in file.readlines()
        ]

def is_valid_word(self, word):
    """
    Check if the word exists in the dictionary.
    """

    return word.upper() in self.word_list

def is_anagram(self, word1, word2):
    """
    Compare two words and return True if they are anagrams.
    """

    return (
        Counter(word1.upper())
        == Counter(word2.upper())
    )

def get_anagrams(self, word):
    """
    Return all anagrams of the given word.
    """

    word = word.upper()

    anagrams = []

    for current_word in self.word_list:

        if (
            current_word != word
            and self.is_anagram(word, current_word)
        ):
            anagrams.append(current_word)

    return anagrams
```
