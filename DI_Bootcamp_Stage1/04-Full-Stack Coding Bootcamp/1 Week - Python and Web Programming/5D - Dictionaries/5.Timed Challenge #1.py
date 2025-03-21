#EXERCICE: Write a program to reverse the sentence wordwise. ´Input: You have entered a wrong domain´ -- ´Output: domain wrong a entered have You´

REverseinp= input("Enter a sentence: ")

sentence = REverseinp.split(" ")

sentence.reverse()

reversed_sentence = " ".join(sentence)

print(reversed_sentence)

#RESULT: domain wrong a entered have You

#NOTE: Finish : time left 9:42




#IDEA: Reverse the input sentence even letters (readable from right to left!).

phrase = input("Enter a sentence: ")
esrhp = phrase[::-1]
print(esrhp)

#RESULT: niamod gnorw a deretne evah uoY