#EXERCICE: A perfect number is a positive integer that is equal to the sum of its divisors. However, the number itself is not included in the sum. -- Ask the user for a number and print whether or not it is a perfect number. If yes, print True else False.Hint: Google perfect numbers
#INFO: En arithmétique, un nombre parfait est un entier naturel égal à la somme de ses diviseurs sauf lui-même (diviseurs stricts). Ainsi, 6 est un nombre parfait car 6 = 1 + 2 + 3. Les 4 premiers nombres parfaits sont 6, 28, 496 et 8128.

number = int(input('Enter a positive Number:')) 

sum_divisors = 0

for i in range(1, number):
    if number % i == 0:
        sum_divisors += i

#NOTE: Check if the sum of the divisors equals the original number
if sum_divisors == number:
    print("True")
else:
    print("False")

#NOTE: Finish : time left 1:38  -- I hate math! 😡

#-------------------------------------------------------------

# HACK:Here's a Python program to check if a number is a perfect number:

# Function
def is_perfect_number(n):
    if n <= 0:
        return False
#NOTE: divisors excluding the number itself
    divisors_sum = sum(i for i in range(1, n) if n % i == 0)
#NOTE: Check if the sum of divisors equals the number
    return divisors_sum == n

num = int(input("Enter a number: "))

# print(f"{num} is a perfect number: {is_perfect_number(num)}")

if is_perfect_number(num):
    print(f"{num} is a perfect number 🥇")
else:
    print(f"{num} is not a perfect number 👎")