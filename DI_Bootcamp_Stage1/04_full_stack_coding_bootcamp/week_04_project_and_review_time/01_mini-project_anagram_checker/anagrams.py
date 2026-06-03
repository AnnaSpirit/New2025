from anagram_checker import AnagramChecker

checker = AnagramChecker()

while True:

```
print("\n===== ANAGRAM CHECKER =====")
print("1 - Enter a word")
print("2 - Exit")

choice = input("Choose an option: ").strip()

if choice == "2":

    print("Goodbye! 👋")
    break

elif choice == "1":

    user_word = input(
        "Enter a word: "
    ).strip()

    if len(user_word.split()) != 1:

        print(
            "Error: only one word is allowed."
        )
        continue

    if not user_word.isalpha():

        print(
            "Error: only alphabetic characters are allowed."
        )
        continue

    print(
        f"\nYOUR WORD: \"{user_word.upper()}\""
    )

    if checker.is_valid_word(user_word):

        print(
            "This is a valid English word."
        )

        anagrams = checker.get_anagrams(
            user_word
        )

        if anagrams:

            print(
                "Anagrams for your word:",
                ", ".join(anagrams)
            )

        else:

            print(
                "No anagrams found."
            )

    else:

        print(
            "This is not a valid English word."
        )

else:

    print(
        "Invalid option. Please try again."
    )
```
