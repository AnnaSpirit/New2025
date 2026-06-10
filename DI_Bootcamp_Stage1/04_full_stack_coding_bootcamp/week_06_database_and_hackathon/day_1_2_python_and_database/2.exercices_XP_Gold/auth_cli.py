import hashlib
#hashlib: c’est un outil qui transforme ton mot de passe en “empreinte digitale”
def hash_password(password):
    return hashlib.sha256(password.encode()).hexdigest()

#Explication: __.encode() → transforme texte en bytes __sha256 → algorithme sécurisé __ .hexdigest() → version lisible du hash

from db_connection import get_connection

conn = get_connection()
cur = conn.cursor()

# Dictionary containing usernames and passwords
# users = {
#     "anna": "password123",
#     "mike": "dragon321",
#     "john": "secret456",
#     "emma": "qwerty789",
#     "sarah": "sunshine987"
# }


# Stores the username of the logged-in user
logged_in = None

#Crée une boucle infinie qui continuera tant qu'on ne la quitte pas avec break
while True:
    command = input("Enter a command (login/exit): ").lower()

    if command == "exit":
        print("Goodbye! 👋")
        break

    if command == "login":
        username = input("Enter your username: ").strip()
        password = input("Enter your password: ").strip()

        cur.execute(
            "SELECT password FROM users WHERE username = %s",
            (username,)
        )
        # %s = placeholder (emplacement vide), On ne met PAS la valeur directement dans la requête.

        result = cur.fetchone()
        # cur = cursor + fetchone() = récupère la réponse

        if result and result[0] == hash_password(password):
            logged_in = username
            print(f"You are now logged in as {username} 🎉")
        else:
            print("Invalid username or password ❌")

        if not result:
            choice = input("Would you like to sign up? (yes/no): ").lower().strip()

            if choice == "no":
                print("Back to main menu 🔁")

            elif choice == "yes":
                new_username = input("Choose a username: ").strip()

                cur.execute(
                    "SELECT username FROM users WHERE username = %s",
                    (new_username,)
                )

                existing_user = cur.fetchone()

                while existing_user:
                    print("Username already exists ❌")
                    new_username = input("Choose another username: ").strip()

                    cur.execute(
                        "SELECT username FROM users WHERE username = %s",
                        (new_username,)
                    )

                    existing_user = cur.fetchone()

                new_password = hash_password(input("Choose a password: ").strip())

                cur.execute(
                    "INSERT INTO users (username, password) VALUES (%s, %s)",
                    (new_username, new_password)
                )

                conn.commit()

                print(f"Account created successfully 🎉 Welcome {new_username}")

        # un tuple = liste immuable (non modifiable), résultat SQL (indexé, pas clé/valeur (comme dictionnaire))