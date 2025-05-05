# #Start by using the print function to display a message. Inside the print function's parentheses, insert a string like "Let's play rock, paper, or scissors".

# print("Let's play rock, paper, or scissors!")

# #Declare a variable player_choice to capture the player's input and save it in the variable. Within parentheses of the input function, include an appropriate prompt on choosing rock, paper, or scissors.

# player_choice = input("Choose rock, paper, or scissors: ").lower()

# # At the very top of the file, add import random to allow us to use a special Python function.
# # Declare a variable choices and assign it a list containing ["rock", "paper", "scissors"]. We'll learn soon more about lists. For now, just know that it's a collection of values.
# # Declare a variable computer_choice. Assign the newly created variable the result of random.choice(choices), which picks a random option from the list:

# import random
# choices = ["rock", "paper", "scissors"]

# computer_choice = random.choice(choices)

# # Use the print function to display an f-string to print "Computer chose: " and then the value of computer_choice.

# print(f"Computer chose: {computer_choice}")

# # Write an if statement that checks if the player's choice beats the computer's choice:
#     # if (player_choice == "rock" and computer_choice == "scissors") or (player_choice == "scissors" and computer_choice == "paper") or (player_choice == "paper" and computer_choice == "rock"):
# # Use elif to check for the case of a tie when the player's choice equals the computer's choice.
# # Finally, add an else statement.
# # In each case, set a variable winner to the string "Player", "Tie", or "Computer".
    
# if (player_choice == "rock" and computer_choice == "scissors") or (player_choice == "scissors" and computer_choice == "paper") or (player_choice == "paper" and computer_choice == "rock"):
#     winner = "Player"
# elif player_choice == computer_choice:
#     winner = "Tie"
# else:
#     winner = "Computer"

# # Write an if statement that checks if winner equals "Player".
# # If true, print "You won".
# # Write an elif statement that checks if winner equals "Computer".
# # If true, print "Computer won".
# # Write an else clause that prints "It's a tie"

# if winner == "Player":
#     print("You won!")
# elif winner == "Computer":
#     print("Computer won!")
# else:
#     print("It's a tie!")


## Version 2:
#At the start of the program, create two new variables, player_wins and computer_wins, and set both of their values to 0. These variables will keep track of the number of games the player and the computer wins, respectively.
import random
player_wins = 0
computer_wins = 0

print("Let's play rock 🪨, paper 📰, or scissors ✂️ !")

# Move all of your existing code, except the import statement and the variables player_wins and computer_wins, into a new while loop. The loop's condition should be whether player_wins is still less than two and computer_wins is also less than 2.

#IDEA: Choisir le nombre de tours à jouer avant de commencer le jeu. demander à l'utilisateur combien de tours il veut jouer.

while player_wins < 2 and computer_wins < 2:
    player_choice = input("Choose rock, paper, or scissors: ").lower()
    choices = ["rock", "paper", "scissors"]
    computer_choice = random.choice(choices)
    print(f"Computer chose: {computer_choice}")
    if (player_choice == "rock" and computer_choice == "scissors") or (player_choice == "scissors" and computer_choice == "paper") or (player_choice == "paper" and computer_choice == "rock"):
        winner = "Player"
        player_wins += 1
    elif player_choice == computer_choice:
        winner = "Tie"
    else:
        winner = "Computer"
        computer_wins += 1
        

# Add code to increment the player_wins variable in the if-statements if winner == "Player".

if winner == "Player":
    print("You won!")
elif winner == "Computer":
    print("Computer won!")
else:
    print("It's a tie!")

# Add a print statement at the end but still inside the while loop to output the current score to the console after every round. The statement should print: Current Score - Player: {player_wins}, Computer: {computer_wins}

print(f"Current Score - Player: {player_wins}, Computer: {computer_wins}")

# If player_wins > computer_wins, print Congratulations! You won..
# If not, print Computer won!.

if player_wins > computer_wins:
    print("Congratulations! You won!")
else:
    print("Computer won!")
