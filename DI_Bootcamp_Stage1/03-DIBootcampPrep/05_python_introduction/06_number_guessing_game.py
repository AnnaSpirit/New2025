import random  # Commentaire (FR) : on importe le module pour générer des nombres aléatoires.

def number_guessing_game():
    # Commentaire (FR) : Génère un nombre mystère entre 1 et 100.
    random_number = random.randint(1, 100)
    
    # Commentaire (FR) : Définit le nombre maximum d'essais autorisés.
    max_attempts = 7

    print("🎲 Bienvenue dans le Number Guessing Game !")
    print(f"🔢 Devine un nombre entre 1 et 100 en {max_attempts} essais ou moins. Let's go !\n")

    # Commentaire (FR) : Boucle pour chaque essai du joueur.
    for attempt in range(1, max_attempts + 1):
        # Commentaire (FR) : On demande au joueur de saisir un nombre, puis on convertit en entier.
        guess = int(input(f"Essai {attempt}/{max_attempts} : Entre un nombre entre 1 et 100 : "))

        # Commentaire (FR) : On compare la proposition au nombre mystère.
        if guess < random_number:
            print("Trop petit ! 🚀\n")
        elif guess > random_number:
            print("Trop grand ! 🌔\n")
        else:
            # Commentaire (FR) : Le joueur a trouvé avant la fin des essais.
            print(f"🎉 Félicitations ! Tu as deviné en {attempt} essais ! Le nombre était bien {random_number}.\n")
            break
    else:
        # Commentaire (FR) : Ce bloc s'exécute si le joueur n'a jamais trouvé (pas de break).
        print(f"😢 Bouhou, tu n’as pas trouvé cette fois. Le nombre était {random_number}. Retente ta chance la prochaine fois !\n")

if __name__ == "__main__":
    number_guessing_game()
