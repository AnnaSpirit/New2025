from utils import unzip_with_7z

zip_file_path = 'congrats.7z' # keep as is
dest_path = '.' # keep as is

find_me = '' # 2 letters are missing!
secret_password = find_me + 'bcmpda' 

# WRITE YOUR CODE BELOW
# ----------------------------------------

import string         # Commentaire (FR) : pour accéder à toutes les lettres minuscules 'a' à 'z'
import sys            # Commentaire (FR) : pour quitter proprement dès qu’on trouve le mot de passe
from utils import unzip_with_7z  # Commentaire (FR) : import de la fonction magique fournie, ne rien modifier dans utils.py

# Chemins immuables
zip_file_path = 'congrats.7z'  # Commentaire (FR) : le fichier 7z à décrypter
dest_path = '.'                # Commentaire (FR) : dest_path '.' signifie le dossier courant

# Les 6 dernières lettres sont connues, mais il manque 2 lettres minuscules devant
find_me = ''                   # Commentaire (FR) : on construira secret_password = find_me + 'bcmpda'
suffix = 'bcmpda'              # Commentaire (FR) : la seconde partie fixe du mot de passe

def number_password_cracker():
    """
    Fonction principale qui effectue un brute-force sur toutes les combinaisons
    de deux lettres minuscules pour trouver le mot de passe complet et dézipper.
    """
    # Commentaire (FR) : on parcourt toutes les lettres minuscules pour la première lettre
    for letter1 in string.ascii_lowercase:  # 'a', 'b', 'c', ..., 'z'
        # Commentaire (FR) : on parcourt toutes les lettres minuscules pour la deuxième lettre
        for letter2 in string.ascii_lowercase:
            # On forme la partie manquante
            find_me = letter1 + letter2
            # On compose le mot de passe testé
            secret_password = find_me + suffix

            # Commentaire (FR) : on tente de dézipper avec ce mot de passe
            print(f"🔍 Essai avec le mot de passe '{secret_password}'... ", end='')

            success = unzip_with_7z(zip_file_path, dest_path, secret_password)

            if success:
                # Commentaire (FR) : si unzip_with_7z renvoie True, c’est gagné
                print("✅ Succès ! Mot de passe trouvé.")
                print(f"🎉 Mot de passe complet : '{secret_password}'")
                # On s’arrête là, on a décompressé le fichier
                sys.exit(0)  # quitte le script avec le code 0 (succès)
            else:
                # Commentaire (FR) : mot de passe incorrect, on continue
                print("❌ Échec.")

    # Si on sort des boucles sans avoir trouvé, c’est qu’il y a un problème
    print("🚨 Aucune des combinaisons n’a fonctionné… Vérifie que 'congrats.7z' est bien dans le dossier, ou que utils.py est correct.")
    sys.exit(1)  # quitte avec code erreur

if __name__ == "__main__":
    # Lancement de la fonction de brute-force
    number_password_cracker()