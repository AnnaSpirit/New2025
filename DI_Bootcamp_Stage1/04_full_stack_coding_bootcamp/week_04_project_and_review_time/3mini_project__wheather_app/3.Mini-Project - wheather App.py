# Mini Project: Weather App
# Building a Weather App

# The current weather data can be retrieved from OpenWeatherMap using the Observation module in PyOWM (Python OpenWeatherMap).
# Use this documentation for this Mini Project.

#     Get the current weather in Tel Aviv.
#     Get current wind info of Tel Aviv.
#     Get today’s sunrise and sunset times of Tel Aviv.
#     Display all these information in a user friendly way.

#     Recreate these steps, but this time, ask the user for a location (display the information in a user friendly way).
#         Instead of working with the name of the city, retrieve the id of the city.
#         Check out the documentation section : “Identifying cities and places via city IDs”.

#     Retrieve weather forecasts : The OpenWeatherMap free tier gives you access to 5 day forecasts. The forecasts contain the weather data in three-hour intervals.
#         The methods for retrieving the forecast are:
#             forecast_at_place('Los Angeles, US', '3h')
#             forecast_at_id(5391959, '3h')
#             forecast_at_coords(lat=37.774929, lon=-122.419418, interval='3h')
#             Forecasts are useful if you want to know what the weather conditions will be throughout the day/week.

#     Use this API to retrieve the Air Pollution in a specific city.

#NOTE: Install pip install pyowm

from pyowm import OWM

API_KEY = '3ef28362429bd53d82881e010defa7d0'
owm = OWM(API_KEY)
mgr = owm.weather_manager()

# Récupération de la météo actuelle pour Tel Aviv
observation = mgr.weather_at_place('Tel Aviv,IL')
weather = observation.weather

# Récupération des informations
temperature = weather.temperature('celsius')
wind = weather.wind()  # Exemple : {'speed': 3.1, 'deg': 230}
sunrise_time = weather.sunrise_time('iso')
sunset_time = weather.sunset_time('iso')

print ("Current weather in Tel Aviv:")
print ("Temperature:", temperature)
print ("Wind:", wind)
print ("Sunrise:", sunrise_time)
print ("Sunset:", sunset_time)


import json

# Chargement du fichier JSON contenant les IDs des villes
with open('city_ids.json', 'r') as f:
    city_ids = json.load(f)

# Demande à l'utilisateur
ville = input("Enter a city : ")
if ville in city_ids:
    ville_id = city_ids[ville]
    observation = mgr.weather_at_id(ville_id)
    weather = observation.weather
    # Affichage des informations comme précédemment
    print(f"Météo actuelle à {ville}:")
    print("Température :", weather.temperature('celsius'))
    print("Vent :", weather.wind())
    print("Lever du soleil :", weather.sunrise_time('iso'))
    print("Coucher du soleil :", weather.sunset_time('iso'))
else:
    print("Ville non trouvée dans la base de données.")
