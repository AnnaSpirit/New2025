def find_meal(name, menu):
    return name if name in menu else None

def select_meal(name):
    return find_meal(name, italian_food)

italian_food = ["Pasta Bolognese", "Pepperoni pizza", "Margherita pizza", "Lasagna"]
print(find_meal("Margherita pizza", italian_food))
print(find_meal("Tiramisu", italian_food))



Define a function named display_available_meals.

def display_available_meals():


Within the function, use a print function to print Available Italian Meals:.

print("Available Italian Meals:")

Use a loop to iterate through the italian_food list and print each meal.

for meal in italian_food:
    print(meal)