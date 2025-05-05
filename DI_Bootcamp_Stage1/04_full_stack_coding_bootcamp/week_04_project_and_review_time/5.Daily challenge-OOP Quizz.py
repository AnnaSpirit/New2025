# Daily challenge: OOP Quizz
# Part 1 : Quizz
print("Answer the following questions :") 
print(" What is a class?")
#RESULT: A class is a blueprint for creating objects in object-oriented programming (OOP). It defines a set of attributes and methods that the created objects will have. Classes encapsulate data for the object and define behaviors through methods.
print(" What is an instance?")
#RESULT:  An instance is a specific object created from a class. It has its own unique state and behavior, defined by the class blueprint.
print(" What is encapsulation?")
#RESULT: Encapsulation is the bundling of data and methods that operate on that data within a single unit, or class. It restricts direct access to some components and can prevent the accidental modification of data.
print(" What is abstraction?")
#RESULT: Abstraction is the concept of hiding the complex implementation details and showing only the essential features of the object. It helps in reducing complexity and increasing efficiency.
print(" What is inheritance?")
#RESULT: An inheritance is a mechanism in OOP that allows a new class to inherit properties and behavior (methods) from an existing class. The new class is called the derived or child class, and the existing class is called the base or parent class.
print(" What is multiple inheritance?")
#RESULT: Multiple inheritance is a feature of OOP where a class can inherit attributes and methods from more than one parent class. This allows for a more flexible and reusable code structure, but it can also lead to complexity and ambiguity if not managed properly.
print(" What is polymorphism?")
#RESULT:  Polymorphism is the ability of different classes to be treated as instances of the same class through a common interface. It allows methods to do different things based on the object it is acting upon, even if they share the same name.
print(" What is method resolution order or MRO?")
#RESULT: A method resolution order (MRO) is the order in which base classes are searched when executing a method. In Python, the MRO is determined using the C3 linearization algorithm, which ensures a consistent and predictable order of method resolution in the presence of multiple inheritance.


# INFO: En francais

print("Qu'est-ce qu'une classe ?")
# RÉSULTAT : Une classe est un plan pour créer des objets dans la programmation orientée objet (POO). Elle définit un ensemble d'attributs et de méthodes que les objets créés posséderont. Les classes encapsulent les données de l'objet et définissent ses comportements à l'aide de méthodes.

print("Qu'est-ce qu'une instance ?")
# RÉSULTAT : Une instance est un objet spécifique créé à partir d'une classe. Elle possède son propre état unique et son comportement, définis par le plan de la classe.

print("Qu'est-ce que l'encapsulation ?")
# RÉSULTAT : L'encapsulation consiste à regrouper des données et les méthodes qui opèrent sur ces données au sein d'une même entité, ou classe. Cela limite l'accès direct à certains composants et peut empêcher la modification accidentelle des données.

print("Qu'est-ce que l'abstraction ?")
# RÉSULTAT : L'abstraction est le concept qui consiste à masquer les détails complexes de l'implémentation et à n'exposer que les fonctionnalités essentielles de l'objet. Cela permet de réduire la complexité et d'accroître l'efficacité.

print("Qu'est-ce que l'héritage ?")
# RÉSULTAT : L'héritage est un mécanisme de la POO qui permet à une nouvelle classe d'hériter des propriétés et des comportements (méthodes) d'une classe existante. La nouvelle classe est appelée classe dérivée ou enfant, et la classe existante est appelée classe de base ou parent.

print("Qu'est-ce que l'héritage multiple ?")
# RÉSULTAT : L'héritage multiple est une fonctionnalité de la POO où une classe peut hériter d'attributs et de méthodes de plusieurs classes parentes. Cela permet une structure de code plus flexible et réutilisable, mais peut également mener à de la complexité et à de l'ambiguïté si ce n'est pas géré correctement.

print("Qu'est-ce que le polymorphisme ?")
# RÉSULTAT : Le polymorphisme est la capacité de différentes classes à être traitées comme des instances d'une même classe via une interface commune. Cela permet aux méthodes d'agir de manière différente selon l'objet sur lequel elles opèrent, même si elles portent le même nom.

print("Qu'est-ce que l'ordre de résolution des méthodes (MRO) ?")
# RÉSULTAT : L'ordre de résolution des méthodes (MRO) est l'ordre dans lequel les classes de base sont recherchées lors de l'exécution d'une méthode. En Python, le MRO est déterminé à l'aide de l'algorithme de linéarisation C3, qui garantit un ordre de résolution cohérent et prévisible en cas d'héritage multiple.


# Part 2: Create a deck of cards class.

# The Deck of cards class should NOT inherit from a Card class.
# The requirements are as follows:
#     The Card class should have a color (Hearts, Diamonds, Clubs, Spades) and a value (A,2,3,4,5,6,7,8,9,10,J,Q,K)
#     The Deck class :
#         should have a shuffle method which makes sure the deck of cards has all 52 cards and then rearranges them randomly.
#         should have a method called deal which deals a single card from the deck. After a card is dealt, it should be removed from the deck.

import random  # On importe le module 'random' pour utiliser la fonction de mélange (shuffle)

# Définition de la classe Card qui représente une carte individuelle
class Card:
    def __init__(self, color, value):
        self.color = color  # Affecte la couleur (color) à la carte (ex : 'Hearts', 'Diamonds', etc.)
        self.value = value  # Affecte la valeur à la carte (ex : 'A', '2', ..., '10', 'J', 'Q', 'K')
        
    def __repr__(self):
        # Retourne une représentation textuelle de la carte pour faciliter son affichage
        return f"{self.value} of {self.color}"

# Définition de la classe Deck qui représente un jeu complet de cartes
class Deck:
    def __init__(self):
        self.cards = []  # Initialise une liste vide qui contiendra les cartes du jeu
        self.build_deck()  # Construit le jeu complet de 52 cartes dès la création de l'instance
    
    def build_deck(self):
        """Reconstruit un jeu complet de 52 cartes."""
        # Liste des quatre couleurs disponibles dans un jeu de cartes
        suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
        # Liste des 13 valeurs pour chaque couleur
        values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
        # Création d'une carte pour chaque combinaison de couleur et de valeur grâce à une compréhension de liste
        self.cards = [Card(color, value) for color in suits for value in values]
    
    def shuffle(self):
        """
        Mélange le jeu de cartes.
        Avant de mélanger, reconstruit le jeu pour s'assurer qu'il contient bien toutes les 52 cartes.
        """
        self.build_deck()  # Reconstruit le jeu complet afin d'être sûr qu'aucune carte n'a été perdue
        random.shuffle(self.cards)  # Mélange aléatoirement la liste des cartes
    
    def deal(self):
        """
        Distribue une seule carte du jeu.
        Si des cartes sont disponibles, renvoie la dernière carte de la liste et la retire du jeu.
        Sinon, renvoie None.
        """
        if self.cards:  # Vérifie s'il reste des cartes dans la liste
            return self.cards.pop()  # Retire et renvoie la dernière carte de la liste (simulant une distribution)
        return None  # Si aucune carte n'est disponible, renvoie None

# Exemple d'utilisation du code ci-dessus
if __name__ == "__main__":
    deck = Deck()  # Crée une instance de la classe Deck (un jeu de cartes complet)
    deck.shuffle()  # Mélange le jeu pour obtenir un ordre aléatoire des cartes
    print("Dealing 5 cards:")  # Affiche un message indiquant que 5 cartes vont être distribuées
    for _ in range(5):
        card = deck.deal()  # Distribue une carte du jeu
        print(card)  # Affiche la carte distribuée grâce à la méthode __repr__ de la classe Card
