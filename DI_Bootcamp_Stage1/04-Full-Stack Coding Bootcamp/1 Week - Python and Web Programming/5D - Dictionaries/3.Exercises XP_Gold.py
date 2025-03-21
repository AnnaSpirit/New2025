#EXERCICE: 1: Birthday Look-up--Instructions-- 1. Create a variable called birthdays. Its value should be a dictionary. 2. Initialize this variable with birthdays of 5 people of your choice. For each entry in the dictionary, the key should be the person’s name, and the value should be their birthday. Tip : Use the format “YYYY/MM/DD”. 3. Print a welcome message for the user. Then tell them: “You can look up the birthdays of the people in the list!”“ 3a.Ask the user to give you a person’s name and store the answer in a variable. 3b.Get the birthday of the name provided by the user. 3c. Print out the birthday with a nicely-formatted message.

birthdays = {
"Me": "1987/03/06",
"John":"1990/01/01",
"Kane":"1992/02/02",
"Hock":"1993/03/03",
"Lily":"1994/03/19",
"Marry":"1995/05/05"
}
# print("Welcome to the birthday Look-up! You can look up the birthdays of the people in the list!")

# while True:
#     name = input("Who's birthday do you want to look up? (or type 'exit' to quit): ").strip()

#     if name.lower() == "exit":
#         print("Goodbye!")
#         break

#     if name in birthdays:
#         print(f"{name}'s birthday is {birthdays[name]}")
#         break
#     else:
#         print(f"Sorry, we don't have birthday information for {name}.")
#         print("Here is the list of available names:")
#         print(", ".join(birthdays))

#EXERCICE: 2: Birthdays Advanced --Instructions-- 1. Before asking the user to input a person’s name print out all of the names in the dictionary. 2. If the person that the user types is not found in the dictionary, print an error message (“Sorry, we don’t have the birthday information for <person’s name>”)

# print("🎉 Welcome to the Advanced Birthday Look-up! 🎂")
# NOTE: 2. Afficher les noms disponibles avant de demander à l'utilisateur d'entrer un nom
# while True:
#     print("\n📜 Here are the names you can look up:")
#     print(", ".join(birthdays))

#     name = input("\nEnter a name to look up their birthday (or type 'exit' to quit): ").strip()

#     if name.lower() == "exit":
#         print("👋 Goodbye! Have a great day!")
#         break

#     if name in birthdays:
#         print(f"🎊 {name}'s birthday is on {birthdays[name]}! 🎂")
#         break 
#     else:
#         print(f"❌ Sorry, we don’t have the birthday information for {name}.")

#EXERCICE: 3: Add Your Own Birthday --Instructions-- 1.Add this new code: before asking the user to input a person’s name to look up, ask the user to add a new birthday: Ask the user for a person’s name – store it in a variable. 1a.Ask the user for this person’s birthday (in the format “YYYY/MM/DD”) - store it in a variable. 1b.Now add this new data into your dictionary. 2. Make sure that if the user types any name that exists in the dictionary – including the name that he entered himself – the corresponding birthday is found and displayed.

# print("🎉 Welcome to the Advanced Birthday Look-up! 🎂")

# # 3. Demander à l'utilisateur d'ajouter un nouvel anniversaire
# new_name = input("\nWould you like to add a new birthday to the list? Enter the person's name (or press Enter to skip): ").strip()

# if new_name:
#     if new_name in birthdays:
#         print(f"⚠️ {new_name} is already in the list with birthday: {birthdays[new_name]}")
#     else:
#         new_birthday = input(f"Enter {new_name}'s birthday (format YYYY/MM/DD): ").strip()
#         birthdays[new_name] = new_birthday
#         print(f"✅ {new_name}'s birthday has been added successfully!")

# while True:
#     print("\n📜 Here are the names you can look up:")
#     print(", ".join(birthdays))

#     name = input("\nEnter a name to look up their birthday (or type 'exit' to quit): ").strip()

#     if name.lower() == "exit":
#         print("👋 Goodbye! Have a great day! 🎈")
#         break

#     if name in birthdays:
#         print(f"🎊 {name}'s birthday is on {birthdays[name]}! 🎂")
#         break 
#     else:
#         print(f"❌ Sorry, we don’t have the birthday information for {name}.")

# #IDEA: Look up with today's date to check if no one have his/her birthday today?

# from datetime import datetime

# # 3. Vérifier si c'est l'anniversaire de quelqu'un aujourd'hui
# today = datetime.today().strftime("%m/%d")  # On ne prend que MM/DD pour ignorer l'année
# birthdays_today = [name for name, date in birthdays.items() if date[5:] == today]

# if birthdays_today:
# 	print(f"🎈🎈🎈 Today is a special day!\nIt's the birthday of {', '.join(birthdays_today)} 🎈🎈🎈")
# else:
#     print("\n🙅 No birthdays today. Maybe next time! 😊")
    
    #IDEA: Add the cake from
# <https://github.com/AnnaSpirit/2025_/blob/main/DI_Bootcamp_Stage1/04-Full-Stack%20Coding%20Bootcamp/1%20Week%20-%20Python%20and%20Web%20Programming/3+4D%20-%20List,%20iterating%20and%20formatting%20data/Daily%20challengeGOLD-%20Happy%20Birthday%20(GPT).py> to the output

#EXERCICE: 4: Fruit Shop -- Instructions-- Using the dictionary above, each key-value pair represents an item and its price - print all the items and their prices in a sentence. Using the dictionary below, each value are dictionaries containing both the price and the amount of items in stock - write some code to calculate how much it would cost to buy everything in stock.

items_prices = {  #NOTE:dictionary with items and their individual prices.
    "banana": 4,
    "apple": 2,
    "orange": 1.5,
    "pear": 3
}
#NOTE: Let's print out each item and its price in a friendly sentence.
price_label = [f"The price of one {item} is {price}." for item, price in items_prices.items()]
print(" ".join(price_label))

#RESULT: The price of banana is 4. The price of apple is 2. The price of orange is 1.5. The price of pear is 3.

items_stock = {
    "banana": {"price": 4 , "stock":10},
    "apple": {"price": 2, "stock":5},
    "orange": {"price": 1.5 , "stock":24},
    "pear": {"price": 3 , "stock":1}
}

#NOTE: Calculate the total cost: for each item, multiply its price by the number of units in stock.
total_cost = sum(details["price"] * details["stock"] for details in items_stock.values())
print(f"\nThe total cost to buy everything in stock is: {total_cost}")