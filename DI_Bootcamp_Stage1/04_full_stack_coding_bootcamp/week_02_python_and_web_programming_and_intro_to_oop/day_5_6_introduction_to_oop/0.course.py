# class Dogs:
#     pass
# def __init__(self):  #Object method
#     print ("The dog has been initialized")

# my_dog = Dogs()

#RESULT: The dog has been initialized
#NOTE: Lorsque vous créez une nouvelle instance d'une classe en Python, la méthode spéciale init est automatiquement exécutée pour configurer les attributs et réaliser toute opération d'initialisation nécessaire, même si elle n'est pas explicitement définie.
# NOTE: The Class par convention est en Capitalized
 
# my_dog = Dogs("Mizette")


#EXERCICE:  1. Analyse the code below. What will be the ouput ? 2. Explain the goal of the __init__() method.

# class Point():
#     def __init__(self, x, y):
#         self.x = x
#         self.y = y

# ## create an instance of the class
# p = Point(3,4)

# ## access the attributes
# print("p.x is:", p.x)
# print("p.y is:", p.y)

#RESULT: 1. The output will be p.x is: 3, p.y is: 4. 2. The goal of the __init__() method is to initialize the attributes of the class. In this case, the __init__() method initializes the x and y attributes of the Point class.

#COURSE: Instance methods



# Exercise

#     1. Analyse the code below. What will be the output ?
#     2. Explain the goal of the methods
#     3. Create a method that modifies the name of the person

# class Person():
#   def __init__(self, name, age):
#     self.name = name
#     self.age = age

#   def show_details(self):
#     print("Hello my name is " + self.name)

# first_person = Person("John", 36)
# first_person.show_details()

#RESULT: 1. The output will be Hello my name is John. 2. The goal of the show_details() method is to print the name of the person. 3. The method that modifies the name of the person is shown below:

# def rename(self, new_name):
#         self.name = new_name

# print(first_person.name)
# first_person.rename("Jack")
# print(first_person.name)
# first_person.show_details()



#COURSE: Class Objects

class BankAccount:

    def __init__(self, account_number, balance=0):
        self.account_number = account_number
        self.balance = balance
        self.transactions = []

    def view_balance(self):
        self.transactions.append("View Balance")
        print(f"Balance for account {self.account_number}: {self.balance}")

    def deposit(self, amount):
        if amount <= 0:
            print("Invalid amount")
        elif amount < 100:
            print("Minimum deposit is 100")
        else:
            self.balance += amount
            self.transactions.append(f"Deposit: {amount}")
            print("Deposit Succcessful")

    def withdraw(self, amount):
        if amount > self.balance:
            print("Insufficient Funds")
        else:
            self.balance -= amount
            self.transactions.append(f"Withdraw: {amount}")
            print("Withdraw Approved")
            return amount

    def view_transactions(self):
        print("Transactions:")
        print("-------------")
        for transaction in self.transactions:
            print(transaction)
            
            
AaronAccount = BankAccount(12345, 200)
MarkusAccount = BankAccount(67890, 500)

AaronAccount.withdraw(350)
MarkusAccount.withdraw(100)

AaronAccount.deposit(500)
MarkusAccount.deposit(5)

AaronAccount.view_transactions()
MarkusAccount.view_transactions()

#RESULT: Withdraw Approved, Insufficient Funds, Deposit Succcessful, Minimum deposit is 100, Transactions: Deposit: 500, Withdraw: 350, Transactions: Withdraw: 100, Deposit: 5