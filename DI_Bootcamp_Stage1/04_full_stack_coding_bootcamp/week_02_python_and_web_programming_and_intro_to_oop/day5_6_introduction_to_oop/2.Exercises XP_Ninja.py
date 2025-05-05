# EXERCICE: 1 : Call History
# Instructions

#     Create a class called Phone. This class takes a parameter called phone_number. When instantiating an object create an attribute called call_history which value is an empty list.

#     Add a method called call that takes both self and other_phone (i.e another Phone object) as parameters. The method should print a string stating who called who, and add this string to the phone’s call_history.

#     Add a method called show_call_history. This method should print the call_history.

#     Add another attribute called messages to your __init__() method which value is an empty list.

#     Create a method called send_message which is similar to the call method. Each message should be saved as a dictionary with the following keys:
#         to : the number of another Phone object
#         from : your phone number (also a Phone object)
#         content

#     Create the following methods: show_outgoing_messages(self), show_incoming_messages(self), show_messages_from(self)

#     Test your code !!!

class Phone:
    def __init__(self, phone_number):
        self.number = phone_number
        self.call_history = []
        self.inbox = []
        self.outbox = []

    def call(self, other_phone):
        history = f'{self.number} called {other_phone.number}'
        print(history)
        self.call_history.append(history)
        other_phone.call_history.append(history)  # Optionnel

    def show_call_history(self):
        print("Call history:")
        for call in self.call_history:
            print(f"- {call}")

    def send_a_message(self, other_phone, content):
        message = {'to': other_phone.number, 'from': self.number, 'content': content}
        self.outbox.append(message)
        other_phone.inbox.append(message)

    def show_outgoing_messages(self):
        print("outgoing messages:")
        for message in self.outbox:
            print(f"To: {message['to']}: {message['content']}")

    def show_incoming_messages(self):
        print("incoming messages:")
        for message in self.inbox:
            print(f"From: {message['from']}: {message['content']}")

def show_all_messages(self):
    print("📥 Incoming messages:")
    if self.inbox:
        for message in self.inbox:
            print(f"From: {message['from']}: {message['content']}")
    else:
        print("Any received messages.")

    print("\n📤 Outgoing messages:")
    if self.outbox:
        for message in self.outbox:
            print(f"To: {message['to']}: {message['content']}")
    else:
        print("Any send messages.")

    print()


my_phone = Phone("0504438408")
friend = Phone("0581272695")

my_phone.send_a_message(friend, "salut, tu as pense à prendre le vin ?")
friend.send_a_message(my_phone, "Oui, j'en ai même pris 2 bouteilles")
my_phone.send_a_message(friend, "Les 2 mêmes ?")
friend.send_a_message(my_phone, "Non, du blanc 🍾 et du rouge 🍷")
my_phone.send_a_message(friend, "Parfait!! 🤩")

friend.show_incoming_messages()
my_phone.show_outgoing_messages()