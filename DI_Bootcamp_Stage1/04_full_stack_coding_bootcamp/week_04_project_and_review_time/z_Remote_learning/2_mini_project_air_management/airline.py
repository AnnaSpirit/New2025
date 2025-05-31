# airline.py

class Airline:
    """
    Classe représentant une compagnie aérienne.
    Attributs :
        id       (str)  : code à deux lettres de la compagnie.
        name     (str)  : nom complet de la compagnie.
        planes  (list) : liste des objets Airplane appartenant à cette compagnie.
    Pas de méthodes particulières dans cette version.
    """

    def __init__(self, id: str, name: str):
        # On stocke l'identifiant (deux lettres) et le nom.
        self.id = id
        self.name = name
        # Initialement, la compagnie n'a aucun avion inscrit.
        self.planes = []
