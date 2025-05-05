# from random import randint,choice

# def Prepare(): 
#     # Secret_words=["chocolate", "tentacle", "dictionary", "magnificent", "sausage", "xylophone", "server", "holly", "Keyboard"]
#     # Secret_words=["The", "five", "boxing", "wizards", "jump", "quickly"]
#     # Secret_words=["fox", quiz", "candy", "jumble", "zephyrs", "campfire" ,"windstorm","blacksmith","thunderbolt","housewarming"]
#     Secret_words=["frontend", "backend", "server", "database", "developer", "programming", "python", "javascript", "github", "html"]
#     Select = choice(Secret_words) 
    
#     myst = ""
#     for i in Select:
#         myst += "_"
#     return (Select,myst)

# def checking(letter,word): 
#     if letter in word:
#         return True
#     else:
#         return False

# def full_word(word):
#     if "_" not in word:
#         return True
#     else:
#         return False

# def complete_word(letter,word,myst):
#     for i in range(len(word)):
#         if word[i] == letter:
#             temp = list(myst) 
#             temp[i] = letter 
#             myst = "".join(temp)
#     return myst 

# def drawing_hangman(n):
#     draw = ""
#     if n == 1:
#         draw = "\n" * 7 + " =============="
#     elif n == 2:
#         draw = "\n" + "  ||/\n" + "  ||\n" + "  ||\n" + "  ||\n" + "  ||\n" + " /||\n" + " =============="
#     elif n == 3:
#         draw = "==============\n" + "  ||/\n" + "  ||\n" + "  ||\n" + "  ||\n" + "  ||\n" + " /||\n" + " =============="
#     elif n == 4:
#         draw = "============Δ=\n" + "  ||/        |\n" + "  ||\n" + "  ||\n" + "  ||\n" + "  ||\n" + " /||\n" + " =============="
#     elif n == 5:
#         draw = "============Δ=\n" + "  ||/        |\n" + "  ||         O\n" + "  ||\n" + "  ||\n" + "  ||\n" + " /||\n" + " =============="
#     elif n == 6:
#         draw = "============Δ=\n" + "  ||/        |\n" + "  ||         O\n" + "  ||        /|\ \n" + "  ||\n" + "  ||\n" + " /||\n" + " =============="
#     elif n == 7:
#         draw = "============Δ=\n" + "  ||/        |\n" + "  ||         O\n" + "  ||        /|\ \n" + "  ||         |\n" + "  ||\n" + " /||\n" + " =============="
#     elif n == 8:
#         draw = "============Δ=\n" + "  ||/        |\n" + "  ||        O\n" + "  ||        /|\ \n" + "  ||         |\n" + "  ||        / \ \n" + " /||\n" + " =============="
#     return draw

# def game():
#     tries = 8
#     chosen_word,hidden_word = Prepare()
#     while (tries > 0) and (not full_word(hidden_word)):
#         print("\n Number of remaining tries :\t", tries, "\n")
#         print(" ".join(hidden_word),"\n\n")
#         chosen_letter = input("Choose a letter (in lowercase) :\t")
#         if checking(chosen_letter,chosen_word):
#             hidden_word = complete_word(chosen_letter, chosen_word, hidden_word)
#             print("\nThe letter is well in the word\n")
#         else:
#             tries -= 1
#             print("\nThe letter is not in the word ...\n\n", drawing_hangman(8 - tries),"\n\n")
#     if tries == 0:
#         print(" ".join(hidden_word))
#         print("\n🔴🔴🔴The word was :\n")
#         print(" ".join(chosen_word))

#         print("\nUnfortunately you have failed 😵😵😵 ... \n")
#     if "_" not in hidden_word:
#         print(" ".join(hidden_word),"\n\n")
#         print("\n🟢🟢🟢Well done, you won! 💪🏻👏🏻🥇\n")
#     input("\nPlease type the ´Enter´ key to start again\n\n")
#     menu()    
        
# def menu():
#     print("\n-----------🧩-🪂WELCOME in the HANGMAN GAME🪂-🧩-----------\n")
#     print("-----------------🍀-🤞🏻GOOD LUCK!🤞🏻-🍀---------------------\n\n")
#     print("LET'S GO! ▶️ ▶️ ▶️ \n")
#     game()

# menu()
#___________________________________________________________________________________

#OTHER: Ask if we want to play in english or in french: 

from random import randint, choice

def Prepare(): 
    lang = input("Choose english language (en) / Choisissez la langue française (sans accent) (fr) : ").strip().lower()
    Secret_words_en = ["fox", "quiz", "candy", "jumble", "zephyrs", "campfire", "windstorm", "blacksmith", "thunderbolt", "housewarming"]
    Secret_words_fr = ["renard", "quiz", "bonbon", "melange", "zephyr", "feu de camp", "tempete", "forgeron", "foudroyant", "accueil"]
    
# Sélection de la liste en fonction du choix de langue
    if lang == "fr":
        Secret_words = Secret_words_fr
    else:
        Secret_words = Secret_words_en
    Select = choice(Secret_words) 
    
    myst = ""
    for i in Select:
        myst += "_"
    return (Select, myst)

def checking(letter, word): 
    if letter in word:
        return True
    else:
        return False

def full_word(word):
    if "_" not in word:
        return True
    else:
        return False

def complete_word(letter, word, myst):
    for i in range(len(word)):
        if word[i] == letter:
            temp = list(myst) 
            temp[i] = letter 
            myst = "".join(temp)
    return myst 

def drawing_hangman(n):
    draw = ""
    if n == 1:
        draw = "\n" * 7 + " =============="
    elif n == 2:
        draw = "\n" + "  ||/\n" + "  ||\n" + "  ||\n" + "  ||\n" + "  ||\n" + " /||\n" + " =============="
    elif n == 3:
        draw = "==============\n" + "  ||/\n" + "  ||\n" + "  ||\n" + "  ||\n" + "  ||\n" + " /||\n" + " =============="
    elif n == 4:
        draw = "============Δ=\n" + "  ||/        |\n" + "  ||\n" + "  ||\n" + "  ||\n" + "  ||\n" + " /||\n" + " =============="
    elif n == 5:
        draw = "============Δ=\n" + "  ||/        |\n" + "  ||        😥\n" + "  ||\n" + "  ||\n" + "  ||\n" + " /||\n" + " =============="
    elif n == 6:
        draw = "============Δ=\n" + "  ||/        |\n" + "  ||        😧\n" + "  ||        /|\ \n" + "  ||\n" + "  ||\n" + " /||\n" + " =============="
    elif n == 7:
        draw = "============Δ=\n" + "  ||/        |\n" + "  ||        😨\n" + "  ||        /|\ \n" + "  ||         |\n" + "  ||\n" + " /||\n" + " =============="
    elif n == 8:
        draw = "============Δ=\n" + "  ||/        |\n" + "  ||        😵\n" + "  ||        /|\ \n" + "  ||         |\n" + "  ||        / \ \n" + " /||\n" + " =============="
    return draw

def game():
    tries = 8
    chosen_word, hidden_word = Prepare()
    while (tries > 0) and (not full_word(hidden_word)):
        print("\n Number of remaining tries :\t", tries, "\n")
        print(" ".join(hidden_word), "\n\n")
        chosen_letter = input("Choose a letter (in lowercase) :\t")
        if checking(chosen_letter, chosen_word):
            hidden_word = complete_word(chosen_letter, chosen_word, hidden_word)
            print("\nThe letter is well in the word\n")
        else:
            tries -= 1
            print("\nThe letter is not in the word ...\n\n", drawing_hangman(8 - tries), "\n\n")
    if tries == 0:
        print(" ".join(hidden_word))
        print("\n🔴🔴🔴The word was :\n")
        print(" ".join(chosen_word))
        print("\nUnfortunately you have failed 😵😭😵 ... \n")
    if "_" not in hidden_word:
        print(" ".join(hidden_word), "\n\n")
        print("\n🟢🟢🟢Well done, you won! 💪🏻👏🏻🥇\n")
    input("\nPlease type the ´Enter´ key to start again\n\n")
    menu()    
        
def menu():
    print("-----------🧩-🪂WELCOME in the HANGMAN GAME🪂-🧩-----------")
    print("-----------🧩-🪂BIENVENUE SUR LE JEU DU PENDU🪂-🧩-----------\n")
    print("-----------------🍀-🤞🏻GOOD LUCK!🤞🏻-🍀---------------------")    
    print("-----------------🍀-🤞🏻BONNE CHANCE! 🤞🏻-🍀------------------\n\n")
    print("▶️ ▶️ ▶️ LET'S GO! ▶️ ▶️ ▶️ C'EST PARTI! ▶️ ▶️ ▶️\n")
    print("  \n")
    
    game()

menu()
