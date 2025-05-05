#Daily Challenge - Circle
# Instructions :

# The goal is to create a class that represents a simple circle.
# A Circle can be defined by either specifying the radius or the diameter.
# The user can query the circle for either its radius or diameter.

# Other abilities of a Circle instance:

#     Compute the circle’s area
#     Print the attributes of the circle - use a dunder method
#     Be able to add two circles together, and return a new circle with the new radius - use a dunder method
#     Be able to compare two circles to see which is bigger, and return a Boolean - use a dunder method
#     Be able to compare two circles and see if there are equal, and return a Boolean- use a dunder method
#     Be able to put them in a list and sort them
#     Bonus (not mandatory) : Install the Turtle module, and draw the sorted circles

import math
import turtle

class Circle:
    all_circle = []
    
    def __init__(self, diameter=None, radius=None):
        self.diameter = diameter
        self.radius = radius
        if diameter is None:
            self.diameter = radius * 2
        elif radius is None:
            self.radius = diameter / 2
        
    def Calcul_Area(self):
        return math.pi * self.radius ** 2
    
    def __str__(self):
        return f"The circle diameter is {self.diameter} and the circle radius is {self.radius}"
        
    def __add__(self, other):
        new_radius = self.radius + other.radius
        self.all_circle.append(other)
        return Circle(radius=new_radius)
    
    def __gt__(self, other):
        return self.radius > other.radius
    
    def __eq__(self, other):
        return self.radius == other.radius

# Création des cercles
circle1 = Circle(diameter=4)
circle2 = Circle(radius=6)
circle3 = circle1 + circle2

def draw_circle(radius, position):
    turtle.penup()
    turtle.goto(position)
    turtle.pendown()
    turtle.circle(radius)

# Liste des positions pour décaler les cercles
positions = [(-100, -50), (-10, -10), (100, 50)]
circles = [circle1, circle2, circle3]

# Dessin des cercles décalés
for circle, pos in zip(circles, positions):
    draw_circle(circle.radius, pos)

# Changer la forme du curseur en "turtle"
turtle.shape("turtle")
# Modifier la taille du trait à 5 pixels
turtle.pensize(3)
# Changer la couleur du trait en rouge
turtle.pencolor("blue")

# Dessin du cercle de rayon 80 à une position différente
turtle.penup()
turtle.goto(20, 20)
turtle.pendown()
turtle.circle(80)

turtle.done()

