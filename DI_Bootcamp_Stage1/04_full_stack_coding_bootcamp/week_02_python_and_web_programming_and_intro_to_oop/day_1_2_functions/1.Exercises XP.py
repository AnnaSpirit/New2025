# EXERCICE: 1 : What are you learning ? -- Instructions -- 1. Write a function called display_message() that prints one sentence telling everyone what you are learning in this course. 2. Call the function, and make sure the message displays correctly.
display_message = "I am learning Python"
print(display_message)

#RESULT: I am learning Python

# EXERCICE: 2: What’s your favorite book ? -- Instructions-- 1. Write a function called favorite_book() that accepts one parameter called title. 2. The function should print a message, such as "One of my favorite books is <title>". 3. For example: “One of my favorite books is Alice in Wonderland” 4. Call the function, make sure to include a book title as an argument when calling the function.

def favorite_book(title):
    print("One of my favorite books is", title)
print(favorite_book("Alice in Wonderland"))

# RESULT: One of my favorite books is Alice in Wonderland

# EXERCICE: 3 : Some Geography -- Instructions -- 1. Write a function called describe_city() that accepts the name of a city and its country as parameters. 2. The function should print a simple sentence, such as "<city> is in <country>". ===For example “Reykjavik is in Iceland”=== 3. Give the country parameter a default value. 4. Call your function.

def describe_city(city, country="Iceland"):
    print(city, "is in", country)
print(describe_city("Reykjavik"))

# RESULT: Reykjavik is in Iceland

# EXERCICE: 4 : Random -- Instructions -- 1. Create a function that accepts a number between 1 and 100 and generates another number randomly between 1 and 100. Use the random module. 2. Compare the two numbers, if it’s the same number, display a success message, otherwise show a fail message and display both numbers.

import random

def random_number():
    number_a = random.randint(1, 100)
    number_b = random.randint(1, 100)
    
    result = "Success" if number_a == number_b else "Fail"
    
    print(f"The first number is {number_a}, and the second is: {number_b} so the result is: {result}")

random_number()

#RESULT: The first number is 10, and the second is: 10 so the result is: Success
#RESULT: The first number is 10, and the second is: 20 so the result is: Fail


# EXERCICE: 5 : Let’s create some personalized shirts ! --Instructions-- 1. Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. 2. The function should print a sentence summarizing the size of the shirt and the message printed on it, such as "The size of the shirt is <size> and the text is <text>" 3. Call the function make_shirt(). 4. Modify the make_shirt() function so that shirts are large by default with a message that reads “I love Python” by default. 5. Call the function, in order to make a large shirt with the default message 6. Make medium shirt with the default message 7. Make a shirt of any size with a different message. 8. Bonus: Call the function make_shirt() using keyword arguments. 

def make_shirt(size, text):
    print(f"The size of the shirt is {size} and the text is {text}")
    
# make_shirt("large", "I love Python")
# make_shirt("medium", "I love Python")

def make_shirt_default(size="large", text="I love Python"):
    print(f"The size of the shirt is {size} and the text is {text}")

make_shirt_default()
make_shirt_default("medium")
make_shirt_default("X-small", "I love JavaScript")

make_shirt_default(size="X-large", text="I love HTML")

# QUESTION: I think I do not understand well the instructions.


# EXERCICE: 6 : Magicians … -- Instructions -- Using this list of magician’s names {{'Harry Houdini', 'David Blaine', 'Criss Angel'}} 1. Create a function called show_magicians(), which prints the name of each magician in the list. 2. Write a function called make_great() that modifies the original list of magicians by adding the phrase "the Great" to each magician’s name. 3. Call the function make_great(). 4. Call the function show_magicians() to see that the list has actually been modified.

magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

def show_magicians():
    for magician in magician_names:
        print(magician)

def make_great():
    for i in range(len(magician_names)):
        magician_names[i] = "The Great " + magician_names[i]
make_great()
show_magicians()

#RESULT: The Great Harry Houdini, The Great David Blaine, The Great Criss Angel

# EXERCICE: 7 : Temperature Advice -- Instructions --1. Create a function called get_random_temp(). 1a. This function should return an integer between -10 and 40 degrees (Celsius), selected at random. 1b. Test your function to make sure it generates expected results. 2. Create a function called main(). 2a.Inside this function, call get_random_temp() to get a temperature, and store its value in a variable. 2b. #         Inform the user of the temperature in a friendly message, eg. “The temperature right now is 32 degrees Celsius.” 3. Let’s add more functionality to the main() function. 3a. Write some friendly advice relating to the temperature: 3b. below zero (eg. “Brrr, that’s freezing! Wear some extra layers today”) 3c. between zero and 16 (eg. “Quite chilly! Don’t forget your coat”) 3d. between 16 and 23 3e. between 24 and 32 3f. between 32 and 40 4. Change the get_random_temp() function: 4a. Add a parameter to the function, named ‘season’. 4b. Inside the function, instead of simply generating a random number between -10 and 40, set lower and upper limits based on the season, eg. if season is ‘winter’, temperatures should only fall between -10 and 16. 4c. Now that we’ve changed get_random_temp(), let’s change the main() function: 4d. Before calling get_random_temp(), we will need to decide on a season, so that we can call the function correctly. Ask the user to type in a season - ‘summer’, ‘autumn’ (you can use ‘fall’ if you prefer), ‘winter’, or ‘spring’. 4e. Use the season as an argument when calling get_random_temp(). 5. Bonus: Give the temperature as a floating-point number instead of an integer. 6. Bonus: Instead of asking for the season, ask the user for the number of the month (1 = January, 12 = December). Determine the season according to the month.

import random

#FIXIT: Francais

def get_random_temp(season):

    season = season.lower()
    if season == 'winter':
        lower, upper = -10, 16
    elif season == 'spring':
        lower, upper = 16, 23
    elif season == 'summer':
        lower, upper = 24, 32
    elif season in ['autumn', 'fall']:
        lower, upper = 16, 23
    else:
        raise ValueError("Season invalid. Choose: winter, spring, summer, or autumn.")
    return random.randint(lower, upper)

def main():
    season = input("Please entera season (winter, spring, summer, autumn): ").lower()
    temperature = get_random_temp(season)
    
    print(f"The temperature right now is {temperature} degrees Celsius.")

    if temperature < 0:
        print("Brrr, thats freezing! Wear some extra layers today")
    elif 0 <= temperature < 16:
        print("Quite chilly! Don´t forget your coat")
    elif 16 <= temperature < 23:
        print("The day is soft. A small jacket or a sweater will suffice.")
    elif 23 <= temperature < 32:
        print("The weather is nice, perfect for a t-shirt!")
    else:  # temperature >= 32
        print("It's hot! Stay cool and hydrate yourself well.")

if __name__ == '__main__':
    main()

# OTHER: Bonus

def get_season_from_month(month):

    if month in [12, 1, 2]:
        return 'winter'
    elif month in [3, 4, 5]:
        return 'spring'
    elif month in [6, 7, 8]:
        return 'summer'
    elif month in [9, 10, 11]:
        return 'autumn'
    else:
        raise ValueError("Invalid month. Enter a number between 1 and 12.")

def main():
    try:
        month = int(input("Please enter the month number (1-12): "))
        season = get_season_from_month(month)
    except ValueError as e:
        print(e)
        return

    temperature = get_random_temp(season)
    print(f"for the month {month} (which corresponds to {season}), the temperature is of {temperature} degrees Celsius.")

    if temperature < 0:
        print("Brrr, thats freezing! Wear some extra layers today")
    elif 0 <= temperature < 16:
        print("Quite chilly! Don’t forget your coat")
    elif 16 <= temperature < 23:
        print("The day is soft. A small jacket or a sweater will suffice.")
    elif 23 <= temperature < 32:
        print("The weather is nice, perfect for a t-shirt!")
    else:  # temperature >= 32
        print("It's hot! Stay cool and hydrate yourself well.")

if __name__ == '__main__':
    main()


# EXERCICE: 8 : Star Wars Quiz -- Instructions -- This project allows users to take a quiz to test their Star Wars knowledge. The number of correct/incorrect answers are tracked and the user receives different messages depending on how well they did on the quiz. Here is an array of dictionaries, containing those questions and answers

data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]
# 1. Create a function that asks the questions to the user, and check his answers. Track the number of correct, incorrect answers. Create a list of wrong_answers 2. Create a function that informs the user of his number of correct/incorrect answers.

user_answers = []
correct_answers = 0
wrong_answers = []

for question in data:
    answer = input(question["question"] + " ")
    user_answers.append(answer)
    if answer == question["answer"]:
        correct_answers += 1
    else:
        wrong_answers.append(question["question"])
        
print(f"The game is finished. You have {correct_answers} correct answers and {len(wrong_answers)} wrong answers.")


# 3. Bonus : display to the user the questions he answered wrong, his answer, and the correct answer.

for question in wrong_answers:
    print(f"Question: {question}")
    print(f"Your answer: {user_answers[wrong_answers.index(question)]}")
    print(f"Correct answer: {data[wrong_answers.index(question)]['answer']}")
    print()
# 4. If he had more then 3 wrong answers, ask him to play again.

if len(wrong_questions) > 3:
        play_again = input("You had more than 3 wrong answers. Do you want to restart the game? (yes/no) ")
        if play_again.lower() == "yes":
            print("\nRestarting the game...\n")
            quiz_game()  # On relance la fonction quiz_game()

quiz_game()


#RESULT: What is Baby Yoda's real name? Grogu
# Where did Obi-Wan take Luke after his birth? Tatooine
# What year did the first Star Wars movie come out? 1977
# Who built C-3PO? Anakin Skywalker
# Anakin Skywalker grew up to be who? f
# What species is Chewbacca? f
# The game is finished. You have 4 correct answers and 2 wrong answers.
 #QUESTION: It is not working properly. I do not know why.
# Question: Anakin Skywalker grew up to be who? 
# Your answer: Grogu
# Correct answer: Grogu

# Question: What species is Chewbacca?
# Your answer: Tatooine
# Correct answer: Tatooine

