#TODO: Challenge 1 -- Instructions -- 1. Ask the user for a number and a length. 2. Create a program that prints a list of multiples of the number until the list length reaches length.
#Examples: number: 7 - length 5 ➞ [7, 14, 21, 28, 35] number: 12 - length 10 ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120] number: 17 - length 6 ➞ [17, 34, 51, 68, 85, 102]

Num_len_ = input("Enter a number and a length separated by a space: ").split()
Num_len_ = [int(i) for i in Num_len_]
Num_len = Num_len_[0]
Len = Num_len_[1]
Multi = [Num_len * i for i in range(1, Len+1)]
print(Multi)
#HACK: Multi représente la table de multiplication de Num_len jusqu'à la longueur spécifiée par Len.

#TODO: Challenge 2 -- Instructions -- 1. Write a program that asks a string to the user, and display a new string with any duplicate consecutive letters removed.
#Examples: user's word : "ppoeemm" ➞ "poem" user's word : "wiiiinnnnd" ➞ "wind" user's word : "ttiiitllleeee" ➞ "title" user's word : "cccccaaarrrbbonnnnn" ➞ "carbon"

#HACK: Final strings won’t include words with double letters (e.g. “passing”, “lottery”).

User_woorrrd = input("Enter a word with duplicate consecutive letters (ie: poooeemms): ")
New_word = User_woorrrd[0]
for i in range(1, len(User_woorrrd)):
	if User_woorrrd[i] != User_woorrrd[i-1]:
		New_word += User_woorrrd[i]
print(New_word)