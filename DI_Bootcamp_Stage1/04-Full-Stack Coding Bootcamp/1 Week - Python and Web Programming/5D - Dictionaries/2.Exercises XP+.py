# EXERCICE: 1 : Student Grade Summary-- You are given a dictionary containing student names as keys and lists of their grades as values. Your task is to create a summary report that calculates the average grade for each student, assigns a letter grade, and determines the class average.--

student_grades = {
    "Alice": [88, 92, 100],
    "Bob": [75, 78, 80],
    "Charlie": [92, 90, 85],
    "Dana": [83, 88, 92],
    "Eli": [78, 80, 72]
}
# 1. Calculate the average grade for each student and store the results in a new dictionary called student_averages.
    
student_averages = {student: sum(grades) / len(grades) for student, grades in student_grades.items()}

student_averages_round = {student: round(sum(grades) / len(grades), 3) for student, grades in student_grades.items()}

# OU=def calculate_average(grades):
#     return round(
#         sum(grades) / len(grades), 
#         3
#     )""
#HACK: round() function to round the average to 3 decimal places. print(round(NUM, 4))
# 2.Assign each student a letter grade (A, B, C, D, F) based on their average grade according to the following scale, and store the results in a dictionary called student_letter_grades:
#         A: 90 and above
#         B: 80 to 89
#         C: 70 to 79
#         D: 60 to 69
#         F: Below 60

student_letter_grades = {}    
student_letter_grades = {student: "A" 
    if average >= 90 else "B"
    if average >= 80 else "C"
    if average >= 70 else "D"
    if average >= 60 else "F"
    for student, average in student_averages.items()}
    
# 3.Calculate the class average (the average of all students’ averages) and print it.
    
class_average = {}
class_average = sum(student_averages.values()) / len(student_averages)
print(class_average)

# OU_: for student, aver in student_averages.items():
#     letter_grade = student_letter_grades[student]
#     print(
#         f"{student}: Moyenne = {avg}, Note = {letter_grade}"
#     )

# 4. Print the name of each student, their average grade, and their letter grade.

for student in student_grades:
	# print(f"{student}: {student_averages[student]} ({student_letter_grades[student]})")
	print(f"{student}: {student_averages_round[student]} ({student_letter_grades[student]})")

#COURSE: Correction: 
# student_grades = {
#      "Alice": [88, 92, 100],
#      "Bob": [75, 78, 80],
#      "Charlie": [92, 90, 85],
#      "Dana": [83, 88, 92],
#      "Eli": [78, 80, 72]
#     }

# # Calculate the average grade for each student

# student_averages = {}
# for name, grades in student_grades.items():
#      average = sum(grades) / len(grades)
#      student_averages[name] = average

# # Assign each student a letter grade based on their average grade
# student_letter_grades = {}
# for name, avg in student_averages.items():
#     if avg >= 90:
#          grade = 'A'
#     elif avg >= 80:
#         grade = 'B'
#     elif avg >= 70:
#         grade = 'C'
#     elif avg >= 60:
#         grade = 'D'
#     else:
#         grade = 'F'
#     student_letter_grades[name] = grade

# # Calculate the class average
# total_average = sum(student_averages.values())
# class_size = len(student_averages)
# class_average = total_average / class_size

# print(student_averages)
# print(student_letter_grades)
# print(class_average)

# max_name_length = max(len(name) for name in student_grades.keys())

# for name in student_grades.keys():
#     spaces = ' ' * (max_name_length - len(name))
#     print(f"{name}:{spaces} Average Grade = {student_averages[name]:.2f}, Letter Grade = {student_letter_grades[name]}")

#EXERCICE: 2 : Advanced Data Manipulation and Analysis
# In this exercise, you will analyze data from a hypothetical online retail company to gain insights into sales trends and customer behavior. The data is represented as a list of dictionaries, where each dictionary contains information about a single purchase.

sales_data = [
    {"customer_id": 1, "product": "Smartphone", "price": 600, "quantity": 1, "date": "2023-04-03"},
    {"customer_id": 2, "product": "Laptop", "price": 1200, "quantity": 1, "date": "2023-04-04"},
    {"customer_id": 1, "product": "Laptop", "price": 1000, "quantity": 1, "date": "2023-04-05"},
    {"customer_id": 2, "product": "Smartphone", "price": 500, "quantity": 2, "date": "2023-04-06"},
    {"customer_id": 3, "product": "Headphones", "price": 150, "quantity": 4, "date": "2023-04-07"},
    {"customer_id": 3, "product": "Smartphone", "price": 550, "quantity": 1, "date": "2023-04-08"},
    {"customer_id": 1, "product": "Headphones", "price": 100, "quantity": 2, "date": "2023-04-09"},
]
#EXERCICE: 1. Total Sales Calculation: Calculate the total sales for each product category (i.e., the total revenue generated from each type of product). Use a loop to iterate through the data and a dictionary to store the total sales for each product.

total_sales = {}
for sale in sales_data:
	product = sale["product"]
	price = sale["price"]
	quantity = sale["quantity"]
	total_sales[product] = total_sales.get(product, 0) + price * quantity

print(total_sales)
#RESULT: {'Smartphone': 2700, 'Laptop': 2200, 'Headphones': 500}

#EXERCICE: 2. Customer Spending Profile: Determine the total amount spent by each customer. Use a dictionary to maintain the sum of amounts each customer has spent.

customer_spending = {}
for sale in sales_data:
	customer_id = sale["customer_id"]
	price = sale["price"]
	quantity = sale["quantity"]
	customer_spending[customer_id] = customer_spending.get(customer_id, 0) + price * quantity
print(customer_spending)
#RESULT: {1: 1700, 2: 2700, 3: 950}

# EXERCICE:3. Sales Data Enhancement: Add a new field to each transaction called “total_price” that represents the total price for that transaction (quantity * price). Use a loop to modify the sales_data list with this new information.

for sale in sales_data:
	sale["total_price"] = sale["price"] * sale["quantity"]
print(sales_data)
#RESULT: [{'customer_id': 1, 'product': 'Smartphone', 'price': 600, 'quantity': 1, 'date': '2023-04-03', 'total_price': 600}, {'customer_id': 2, 'product': 'Laptop', 'price': 1200, 'quantity': 1, 'date': '2023-04-04', 'total_price': 1200}, {'customer_id': 1, 'product': 'Laptop', 'price': 1000, 'quantity': 1, 'date': '2023-04-05', 'total_price': 1000}, {'customer_id': 2, 'product': 'Smartphone', 'price': 500, 'quantity': 2, 'date': '2023-04-06', 'total_price': 1000}, {'customer_id': 3, 'product': 'Headphones', 'price': 150, 'quantity': 4, 'date': '2023-04-07', 'total_price': 600}, {'customer_id': 3, 'product': 'Smartphone', 'price': 550, 'quantity': 1, 'date': '2023-04-08', 'total_price': 550}, {'customer_id': 1, 'product': 'Headphones', 'price': 100, 'quantity': 2, 'date': '2023-04-09', 'total_price': 200}]

# EXERCICE:4.High-Value Transactions: Using list comprehension, create a list of all transactions where the total price is greater than $500. Sort this list by the total price in descending order.

high_value_transactions = [sale for sale in sales_data if sale["total_price"] > 500]
high_value_transactions = sorted(high_value_transactions, key=lambda x: x["total_price"], reverse=True)
print(high_value_transactions)

#RESULT: [{'customer_id': 2, 'product': 'Laptop', 'price': 1200, 'quantity': 1, 'date': '2023-04-04', 'total_price': 1200}, {'customer_id': 2, 'product': 'Smartphone', 'price': 500, 'quantity': 2, 'date': '2023-04-06', 'total_price': 1000}, {'customer_id': 1, 'product': 'Laptop', 'price': 1000, 'quantity': 1, 'date': '2023-04-05', 'total_price': 1000}]

# EXERCICE:5. Customer Loyalty Identification: Identify any customer who has made more than one purchase, suggesting potential loyalty. Use a dictionary to count purchases per customer, then use a loop or comprehension to identify customers meeting the loyalty criterion.

customer_purchases = {}
for sale in sales_data:
	customer_id = sale["customer_id"]
	customer_purchases[customer_id] = customer_purchases.get(customer_id, 0) + 1
loyal_customers = [customer_id for customer_id, purchases in customer_purchases.items() if purchases > 1]
print(loyal_customers)

#RESULT: [1, 2, 3]

# EXERCICE:Bonus: Insights and Analysis: Calculate the average transaction value for each product category. Identify the most popular product based on the quantity sold. Provide insights into how these analyses could inform the company’s marketing strategies.

average_transaction_value = {}
total_quantity_sold = {}
for sale in sales_data:
	product = sale["product"]
	price = sale["price"]
	quantity = sale["quantity"]
	average_transaction_value[product] = average_transaction_value.get(product, 0) + price
	total_quantity_sold[product] = total_quantity_sold.get(product, 0) + quantity
average_transaction_value = {product: value / total_quantity_sold[product] for product, value in average_transaction_value.items()}
most_popular_product = max(total_quantity_sold, key=total_quantity_sold.get)
print(average_transaction_value)
print(most_popular_product)

#RESULT: {'Smartphone': 550.0, 'Laptop': 1050.0, 'Headphones': 125.0}
#RESULT: Laptop





#COURSE: Correction: 
# 1. Total Sales Calculation
total_sales = {}
for transaction in sales_data:
    product = transaction["product"]
    total_price = transaction["price"] * transaction["quantity"]
    if product in total_sales:
        total_sales[product] += total_price
    else:
        total_sales[product] = total_price

# 2. Customer Spending Profile
customer_spending = {}
for transaction in sales_data:
    customer_id = transaction["customer_id"]
    total_price = transaction["price"] * transaction["quantity"]
    if customer_id in customer_spending:
        customer_spending[customer_id] += total_price
    else:
        customer_spending[customer_id] = total_price

# 3. Sales Data Enhancement
for transaction in sales_data:
    transaction["total_price"] = transaction["price"] * transaction["quantity"]

# 4. High-Value Transactions
high_value_transactions = [transaction for transaction in sales_data if transaction["total_price"] > 500]
# Sorting without lambda
high_value_transactions.sort(key=lambda x: x["total_price"], reverse=True)

# 5. Customer Loyalty Identification
purchase_counts = {}
for transaction in sales_data:
    customer_id = transaction["customer_id"]
    if customer_id in purchase_counts:
        purchase_counts[customer_id] += 1
    else:
        purchase_counts[customer_id] = 1
loyal_customers = [customer_id for customer_id, count in purchase_counts.items() if count > 2]

print("Total Sales:", total_sales)
print("Customer Spending:", customer_spending)
print("First Two Sales Data Entries:", sales_data[:2])
print("Loyal Customers:", loyal_customers)

# Bonus: Insights and Analysis

# Calculating the average transaction value for each product category
average_transaction_value = {}
for product in total_sales.keys():
    total_quantity = sum(transaction["quantity"] for transaction in sales_data if transaction["product"] == product)
    average_transaction_value[product] = total_sales[product] / total_quantity

# Identifying the most popular product based on the quantity sold
product_quantities = {product: sum(transaction["quantity"] for transaction in sales_data if transaction["product"] == product) for product in set(transaction["product"] for transaction in sales_data)}
most_popular_product = max(product_quantities, key=product_quantities.get)

# Insights into how these analyses could inform the company's marketing strategies
"""
Insights:
1. Products with higher average transaction values might indicate premium pricing or higher-end products. Marketing strategies could focus on highlighting the quality and features of these products to attract customers willing to pay more.

2. The most popular product, based on quantity sold, indicates consumer preference and demand. Marketing strategies could include promoting this product more aggressively, bundling it with other products, or exploring ways to upsell customers to higher-value items related to the most popular product.

3. Understanding both the average transaction value and the most popular products can help in inventory management, targeting advertising campaigns, and developing promotions that drive sales in specific product categories.
"""

print("Average Transaction Value:", average_transaction_value)
print("Most Popular Product:", most_popular_product)







