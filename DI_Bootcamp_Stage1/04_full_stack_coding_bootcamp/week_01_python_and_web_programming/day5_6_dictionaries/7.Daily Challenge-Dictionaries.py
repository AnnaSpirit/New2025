#EXERCICE: Challenge 1 -- Ask a user for a word -- Write a program that creates a dictionary. This dictionary stores the indexes of each letter in a list. 1. Make sure the letters are the keys. 2. Make sure the letters are strings. 3. Make sure the indexes are stored in a list and those lists are values.

					# Examples
					# "dodo" ➞ { "d": [0, 2], "o": [1, 3] }
					# "froggy" ➞ { "f":  [0], "r": [1], "o": [2], "g": [3, 4], "y": [5] }
					# "grapes" ➞ { "g": [0], "r": [1], "a": [2], "p": [3]}

# word = input("Enter a word: ")

# dict = {}
# for i in range(len(word)):
# 	if word[i] in dict:
# 		dict[word[i]].append(i)
# 	else:
# 		dict[word[i]] = [i]

# print(dict)

#RESULT: Enter a word: salutation {'s': [0], 'a': [1, 5], 'l': [2], 'u': [3], 't': [4, 6], 'i': [7], 'o': [8], 'n': [9]}


#EXERCICE: Challenge 2 -- 1. Create a program that prints a list of the items you can afford in the store with the money you have in your wallet. 2. Sort the list in alphabetical order. 3. Return “Nothing” if you can’t afford anything from the store. Hint : make sure to convert the amount from dollars to numbers. Create a program that deletes the $ sign, and the comma (for thousands)

					# Examples
					# The key is the product, the value is the price
					# items_purchase = {
					#   "Water": "$1",
					#   "Bread": "$3",
					#   "TV": "$1,000",
					#   "Fertilizer": "$20"
					# }
					# wallet = "$300"
					# ➞ ["Bread", "Fertilizer", "Water"]
					# items_purchase = {
					#   "Apple": "$4",
					#   "Honey": "$3",
					#   "Fan": "$14",
					#   "Bananas": "$4",
					#   "Pan": "$100",
					#   "Spoon": "$2"
					# }
					# wallet = "$100" 
					# ➞ ["Apple", "Bananas", "Fan", "Honey", "Spoon"]

					# # In fact the prices of Apple + Honey + Fan + Bananas + Pan is more that $100, so you cannot by the Pan, 
					# # instead you can by the Spoon that is $2

					# items_purchase = {
					#   "Phone": "$999",
					#   "Speakers": "$300",
					#   "Laptop": "$5,000",
					#   "PC": "$1200"
					# }
					# wallet = "$1" 
					# ➞ "Nothing"


items_in_store = {
	"Water": "$1",
	"Bread": "$5",
	"Screen": "$1,250",
	"Cat Food": "$129",
	"Bananas":"$4",
	"Plant": "$125",
	"Spoon": "$2"
}

# wallet = "$300"
# wallet_amount = int(wallet.replace("$", "").replace(",", ""))

# cheap_items = []
# for key, value in items_in_store.items():
# 	price_amount = int(value.replace("$", "").replace(",", ""))
# 	if wallet_amount >= price_amount:
# 		cheap_items.append(key)
# 		wallet_amount -= price_amount

# 	if cheap_items:
# 		cheap_items.sort()
# 		print(cheap_items)
# 		print("Money remaining in the wallet :", wallet_amount)

# else:
#     print("Nothing")

#------------------------------------------------------------

wallet_user = input("How many do you have in your wallet? ")

wallet_amount = int(wallet_user.replace("$", "").replace(",", ""))

# Listes pour stocker les articles achetés et le ticket de caisse.
purchased_items = []
receipt = []


for key, value in items_in_store.items():
    price_amount = int(value.replace("$", "").replace(",", ""))

    if wallet_amount >= price_amount:
        purchased_items.append(key)
        receipt.append((key, value))
        wallet_amount -= price_amount

if receipt:
    print("\nCheckout :")
    for item, price in receipt:
        formatted_price = "$" + "__________" + price.lstrip("$")
        print(f"{item}: {formatted_price}")
else:
    print("Nothing")

if purchased_items:
    purchased_items.sort()
    print("\nList of items purchased (sorted):", purchased_items)
    print("Money remaining in the wallet :", wallet_amount)
else:
    print("Nothing")

