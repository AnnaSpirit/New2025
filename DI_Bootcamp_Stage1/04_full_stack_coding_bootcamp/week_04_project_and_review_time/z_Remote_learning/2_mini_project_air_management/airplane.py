# airplane.py

from datetime import date


class Airplane:
    """
    Classe représentant un avion.
    Attributs :
        id               (int)     : numéro unique de l'avion.
        current_location (Airport) : aéroport où l'avion est actuellement.
        company          (Airline) : compagnie aérienne propriétaire.
        next_flights     (list)    : liste triée de tuples (date, Flight) pour les vols futurs.
    Méthodes :
        fly(self, destination) : effectue le vol prévu vers destination si c'est la date du vol.
        location_on_date(self, date_query) :
            Renvoie l'aéroport où l'avion sera à la date date_query.
        available_on_date(self, date_query, location_query) :
            Retourne True si l'avion est à location_query le date_query et n'a pas déjà de vol ce jour-là.
    """

    def __init__(self, id: int, current_location, company):
        self.id = id
        self.current_location = current_location
        self.company = company
        # On stocke des tuples (flight.date, flight)
        self.next_flights = []

        # Ajout automatique de cet avion à sa compagnie et à l'aéroport de départ.
        company.planes.append(self)
        current_location.planes.append(self)

    def fly(self, destination):
        """
        Cherche dans self.next_flights un vol dont la date est aujourd'hui ET la même destination.
        Si trouvé, appelle take_off() puis land(), et supprime le vol de next_flights.
        """
        today = date.today()
        for flight_date, flight in list(self.next_flights):
            if flight_date == today and flight.destination == destination:
                flight.take_off()
                flight.land()
                # Retire le vol exécuté de la liste des prochains vols
                self.next_flights.remove((flight_date, flight))
                return True

        print(f"⚠️ Aucun vol prévu pour l'avion {self.id} vers {destination.city} le {today}.")
        return False

    def location_on_date(self, date_query: date):
        """
        Renvoie l'aéroport où l'avion se trouve à la date date_query.
        - Si date_query < premier vol, renvoie current_location initial.
        - Sinon, parcourt self.next_flights triée et actualise la localisation
          pour chaque vol dont la date <= date_query.
        """
        loc = self.current_location
        for flight_date, flight in self.next_flights:
            if flight_date <= date_query:
                loc = flight.destination
            else:
                break
        return loc

    def available_on_date(self, date_query: date, location_query):
        """
        Retourne True si :
         1. L'avion sera à location_query à la date date_query.
         2. Aucun vol n'est déjà programmé ce même jour.
        """
        # Vérifie la localisation à date_query
        if self.location_on_date(date_query) != location_query:
            return False

        # Vérifie qu'aucun vol dans next_flights ne soit déjà à date_query
        for flight_date, _ in self.next_flights:
            if flight_date == date_query:
                return False

        return True
