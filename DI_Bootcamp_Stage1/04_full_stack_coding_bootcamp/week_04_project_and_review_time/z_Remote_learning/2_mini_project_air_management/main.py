# main.py

"""
Fichier principal pour tester l'ensemble du système de gestion du trafic aérien.
Il importe les classes créées dans les différents modules et exécute un petit scénario.
"""

from datetime import date, timedelta
from airline import Airline
from airplane import Airplane
from airport import Airport

if __name__ == "__main__":
    # 1. Création des aéroports
    paris = Airport("PAR")
    new_york = Airport("NYC")

    # 2. Création d'une compagnie : Air Spirit (code SP)
    air_spirit = Airline("SP", "Air Spirit")

    # 3. Création de deux avions pour Air Spirit
    #    - Avion 1 : stationné à Paris
    #    - Avion 2 : stationné à New York
    plane1 = Airplane(1, paris, air_spirit)
    plane2 = Airplane(2, new_york, air_spirit)

    # Vérification des localisations initiales
    print(f"✈️ Avion {plane1.id} est à {plane1.current_location.city} (devrait être PAR).")
    print(f"✈️ Avion {plane2.id} est à {plane2.current_location.city} (devrait être NYC).")

    # 4. Planification de deux vols :
    tomorrow = date.today() + timedelta(days=1)
    day_after = date.today() + timedelta(days=2)

    #    - Vol PAR → NYC demain (devrait prendre plane1)
    flight1 = paris.schedule_flight(new_york, tomorrow)
    #    - Vol NYC → PAR après-demain (devrait prendre plane2)
    flight2 = new_york.schedule_flight(paris, day_after)

    # 5. Afficher les vols prévus au départ de PAR pour les trois prochains jours
    in_three_days = date.today() + timedelta(days=3)
    paris.info(date.today(), in_three_days)

    # 6. Simulations pour demain
    print("\n=== Simulations pour demain ===")
    # On appelle fly() sur plane1 vers NYC
    success_fly1 = plane1.fly(new_york)
    if success_fly1:
        print(f"📍 Avion {plane1.id} est désormais à {plane1.current_location.city} (NYC).")
    else:
        print("Le vol n'a pas pu être exécuté.")

    # Vérifier que plane1 n'a plus de vols demain
    print("Prochains vols de l'avion 1 :", plane1.next_flights)

    # Essayer de replanifier PAR → NYC demain (aucun avion disponible à PAR demain)
    failed_flight = paris.schedule_flight(new_york, tomorrow)

    # Essayer de planifier NYC → PAR demain (plane1 est à NYC, mais il a déjà volé demain)
    failed_flight2 = new_york.schedule_flight(paris, tomorrow)

    # 7. Simulations pour après-demain
    print("\n=== Simulations pour après-demain ===")
    success_fly2 = plane2.fly(paris)
    if success_fly2:
        print(f"📍 Avion {plane2.id} est désormais à {plane2.current_location.city} (PAR).")
    else:
        print("Le vol n'a pas pu être exécuté.")

    # 8. Affichage final des localisations
    print("\n=== Localisations finales ===")
    for pl in air_spirit.planes:
        print(f" • Avion {pl.id} est à {pl.current_location.city}.")
