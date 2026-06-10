import requests
import random
import psycopg2

# Connexion DB
conn = psycopg2.connect(
    dbname="api_to_db",
    user="postgres",
    password="your_password",
    host="localhost",
    port="5432"
)

cursor = conn.cursor()

# 1. Appel API
response = requests.get("https://restcountries.com/v3.1/all")
countries = response.json()

# 2. Mélanger et prendre 10 pays
random_countries = random.sample(countries, 10)

# 3. Boucle d'insertion
for country in random_countries:
    name = country.get("name", {}).get("common", "Unknown")
    
    capital = country.get("capital")
    if isinstance(capital, list):
        capital = capital[0]
    else:
        capital = capital or "Unknown"

    flag = country.get("flags", {}).get("png", "")
    subregion = country.get("subregion", "Unknown")
    population = country.get("population", 0)

    cursor.execute("""
        INSERT INTO countries (name, capital, flag, subregion, population)
        VALUES (%s, %s, %s, %s, %s)
    """, (name, capital, flag, subregion, population))

# 4. Commit et fermeture
conn.commit()
cursor.close()
conn.close()

print("🎉 10 countries inserted successfully!")