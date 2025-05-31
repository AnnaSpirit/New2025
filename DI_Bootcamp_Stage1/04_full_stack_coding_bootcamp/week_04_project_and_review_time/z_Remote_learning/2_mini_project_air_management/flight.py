# flight.py

from datetime import date


class Flight:
    """
    Classe représentant un vol unique (Flight).
    Attributs :
        date        (date)    : date du vol.
        destination (Airport) : aéroport d'arrivée.
        origin      (Airport) : aéroport de départ.
        plane       (Airplane): avion affecté à ce vol.
        id          (str)     : code unique du vol (DEST-COMP-DDMMYYYY).
    Méthodes :
        take_off(self) : retire l'avion de l'aéroport d'origine.
        land(self)     : ajoute l'avion à l'aéroport de destination et met à jour current_location.
    """

    def __init__(self, flight_date: date, destination, origin, plane):
        self.date = flight_date
        self.destination = destination
        self.origin = origin
        self.plane = plane

        # Génération automatique de l'ID : DESTINATION-CODECOMPAGNIE-DDMMYYYY
        date_str = flight_date.strftime("%d%m%Y")
        self.id = f"{destination.city}-{plane.company.id}-{date_str}"

    def take_off(self):
        """
        Simule le décollage : retire l'avion de l'aéroport d'origine.
        """
        if self.plane in self.origin.planes:
            self.origin.planes.remove(self.plane)
            print(f"✈️ Avion {self.plane.id} a décollé de {self.origin.city} le {self.date}.")
        else:
            print(f"⚠️ L'avion {self.plane.id} n'est pas à {self.origin.city} pour le vol {self.id}.")

    def land(self):
        """
        Simule l'atterrissage : ajoute l'avion à l'aéroport de destination
        et met à jour son attribut current_location.
        """
        self.plane.current_location = self.destination
        self.destination.planes.append(self.plane)
        print(f"🏁 Avion {self.plane.id} a atterri à {self.destination.city} le {self.date}.")
