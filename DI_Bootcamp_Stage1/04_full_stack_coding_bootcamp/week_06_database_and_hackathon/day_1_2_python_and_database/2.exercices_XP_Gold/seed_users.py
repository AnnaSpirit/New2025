from db_connection import get_connection

users = {
    "anna": "password123",
    "john": "secret456",
    "emma": "qwerty789",
    "mike": "dragon321",
    "sarah": "sunshine987"
}

conn = get_connection()
cur = conn.cursor()

for username, password in users.items():
    try:
        cur.execute(
            "INSERT INTO users (username, password) VALUES (%s, %s)",
            (username, password)
        )
    except Exception as error:
        print(f"Error inserting {username}: {error}")

conn.commit()
cur.close()
conn.close()

print("Users successfully inserted 🎉")