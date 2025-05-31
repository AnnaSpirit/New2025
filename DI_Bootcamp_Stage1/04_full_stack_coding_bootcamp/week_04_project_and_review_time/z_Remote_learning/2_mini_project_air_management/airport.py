# airport.py

from datetime import date
from bisect import insort
from flight import Flight
from airplane import Airplane


class Airport:
    """
    Classe représentant un aéroport.
    Attributs :
        city                  (str)  : code de la ville (ex : "PAR", "NYC").
        planes                (list) : liste des objets Airplane actuellement stationnés à cet aéroport.
        scheduled_departures  (list) : liste de tuples (date, Flight) pour tous les vols futurs au départ.
        scheduled_arrivals    (list) : liste de tuples (date, Flight) pour tous les vols futurs à l'arrivée.
    Méthodes :
        schedule_flight(self, destination, flight_date) :
            Planifie un vol depuis cet aéroport vers celui en paramètre, à la date spécifiée.
        info(self, start_date, end_date) :
            Affiche tous les vols prévus au départ entre start_date et end_date (inclus).
    """

    def __init__(self, city: str):
        # Code de la ville (ou de l'aéroport).
        self.city = city
        # Liste des avions présents sur place (instances de Airplane).
        self.planes = []
        # Listes triées de vols : utilisant des tuples (flight.date, flight)
        self.scheduled_departures = []
        self.scheduled_arrivals = []

    def schedule_flight(self, destination: 'Airport', flight_date: date):
        """
        Planifie un vol depuis cet aéroport vers destination à la date donnée.
        - Recherche d'abord un avion (Airplane) disponible sur place ce jour-là.
        - Si trouvé, crée un objet Flight, l’ajoute aux prochaines listes de l’avion
          et aux listes triées de départ/arrivée de chaque aéroport.
        - Retourne l’objet Flight si réussi, sinon None.
        """
        # On parcourt la copie de la liste des avions à l'aéroport pour ne pas la modifier en itérant
        for plane in list(self.planes):
            # Vérifie si l'avion est libre ce jour-là et se trouve bien ici
            if plane.available_on_date(flight_date, self):
                # Crée le vol (Flight). L'id est généré automatiquement dans Flight.__init__.
                flight = Flight(flight_date, destination, self, plane)

                # Ajoute ce vol aux prochains vols de l’avion en gardant la liste triée
                insort(plane.next_flights, (flight.date, flight))

                # Ajoute à la liste triée des départs de cet aéroport
                insort(self.scheduled_departures, (flight.date, flight))
                # Ajoute à la liste triée des arrivées de l’aéroport de destination
                insort(destination.scheduled_arrivals, (flight.date, flight))

                # Affichage pour confirmation
                print(f"✅ Vol planifié : {flight.id} le {flight.date} de {self.city} vers {destination.city} !")
                return flight

        # Si aucun avion disponible n'a été trouvé :
        print(f"❌ Aucun avion disponible à {self.city} le {flight_date} pour aller à {destination.city}.")
        return None

    def info(self, start_date: date, end_date: date):
        """
        Affiche tous les vols (depuis cet aéroport) dont la date est entre start_date et end_date (inclus).
        """
        print(f"\n🛫 Vols prévus au départ de {self.city} entre {start_date} et {end_date} :")
        for flight_date, flight in self.scheduled_departures:
            if start_date <= flight_date <= end_date:
                print(f" • {flight.id} → {flight.origin.city} → {flight.destination.city} le {flight_date}")
        print("🚀 Fin de la liste.\n")
