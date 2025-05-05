# Daily Challenge : Pagination

# Instructions :

#     Create a class to handle paginated content in a website. A pagination is used to divide long lists of content in a series of pages.
#     The Pagination class will accept 2 parameters:
#         items (default: None): It will contain a list of contents to paginate.
#         pageSize (default: 10): The amount of items to show in each page.

#     So for example we could initialize our pagination like this:
#     alphabetList = list("abcdefghijklmnopqrstuvwxyz")
#     p = Pagination(alphabetList, 4)

#     The Pagination class will have a few methods:
#         getVisibleItems() : returns a list of items visible depending on the pageSize

#     So for example we could use this method like this:

#     p.getVisibleItems() 
#     # ["a", "b", "c", "d"]

#         You will have to implement various methods to go through the pages such as:
#             prevPage()
#             nextPage()
#             firstPage()
#             lastPage()
#             goToPage(pageNum)

# Here’s a continuation of the example above using nextPage and lastPage:
# alphabetList = list("abcdefghijklmnopqrstuvwxyz")
# p = Pagination(alphabetList, 4)
# p.getVisibleItems() 
# # ["a", "b", "c", "d"]
# p.nextPage()
# p.getVisibleItems()
# # ["e", "f", "g", "h"]
# p.lastPage()
# p.getVisibleItems()
# # ["y", "z"]


# Notes
    #     The second argument (pageSize) could be a float, in that case just convert it to an int (this is also the case for the goToPage method)
    #     The methods used to change page should be chainable, so you can call them one after the other like this: p.nextPage().nextPage()
    #     Please set the p.totalPages and p.currentPage attributes to the appropriate number as there cannot be a page 0.
    #     If a page is outside of the totalPages attribute, then the goToPage method should go to the closest page to the number provided (e.g. there are only 5 total pages, but p.goToPage(10) is given: the p.currentPage should be set to 5; if 0 or a negative number is given, p.currentPage should be set to 1).

import math

class Pagination:
    def __init__(self, items=None, pageSize=10):
        # Conversion de pageSize en entier
        self.pageSize = int(pageSize)
        # Stockage de la liste d'items (ou une liste vide si None)
        self.items = items if items is not None else []
        # Calcul du nombre total de pages
        self.totalPages = math.ceil(len(self.items) / self.pageSize) if self.pageSize > 0 else 0
        # Page courante initialisée à 1 (car il n'existe pas de page 0)
        self.currentPage = 1

#Cette méthode calcule les indices de début et de fin pour extraire la tranche de la liste correspondant à la page courante. start = (currentPage - 1) * pageSize  end = currentPage * pageSize

    def getVisibleItems(self):
        start = (self.currentPage - 1) * self.pageSize
        end = self.currentPage * self.pageSize
        return self.items[start:end]

#Navigation entre les pages : 4 méthodes: Première page, dernière page, page suivante et page précédente.+ une méthode pour aller à une page spécifique.

    def firstPage(self):
        self.currentPage = 1
        return self

    def lastPage(self):
        self.currentPage = self.totalPages if self.totalPages > 0 else 1
        return self

    def nextPage(self):
        if self.currentPage < self.totalPages:
            self.currentPage += 1
        return self

    def previousPage(self):
        if self.currentPage > 1:
            self.currentPage -= 1
        return self

    def goToPage(self, pageNum):
        # Conversion en entier
        page = int(pageNum)
        # Vérification des bornes
        if page < 1:
            self.currentPage = 1
        elif page > self.totalPages:
            self.currentPage = self.totalPages
        else:
            self.currentPage = page
        return self

#Test de la classe Pagination

# Liste de desserts pour un test plus gourmand
desserts = [
    "Tiramisu", "Crème brûlée", "Macarons", "Gelato",
    "Pavlova", "Cheesecake", "Brownie", "Cupcake",
    "Mousse", "Strudel", "Soufflé", "Éclair"
]

# Création de l'instance de Pagination avec un pageSize de 3
p = Pagination(desserts, 3)

# Affichage de la première page
print("Page 1:", p.getVisibleItems())  
# Attendu : ["Tiramisu", "Crème brûlée", "Macarons"]

# Chaînage des méthodes pour aller à la page 2 puis 3
print("Page 3:", p.nextPage().nextPage().getVisibleItems())  
# Attendu : ["Pavlova", "Cheesecake", "Brownie"]

# Tentative de navigation vers une page inexistante (page 10)
# La méthode devrait ramener à la dernière page
print("Page (max)):", p.goToPage(10).getVisibleItems())  
# Attendu : les éléments de la dernière page (en fonction du total)

# Revenir d'une page avec previousPage
print("Previous Page:", p.previousPage().getVisibleItems())  
# Affiche les éléments de la page précédente

# Retour à la première page et vérification via le chaînage
print("Return to First Page:", p.firstPage().getVisibleItems())

# Aller à la dernière page directement
print("Last page:", p.lastPage().getVisibleItems())

#RESULT:
# Page 1: ['Tiramisu', 'Crème brûlée', 'Macarons']
# Page 3: ['Brownie', 'Cupcake', 'Mousse']
# Page (max): ['Strudel', 'Soufflé', 'Éclair']
# Previous Page: ['Brownie', 'Cupcake', 'Mousse']
# Return to First Page: ['Tiramisu', 'Crème brûlée', 'Macarons']
# Last page: ['Strudel', 'Soufflé', 'Éclair']
