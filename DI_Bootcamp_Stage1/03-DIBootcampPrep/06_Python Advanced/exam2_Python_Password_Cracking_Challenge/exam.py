from utils import unzip_with_7z

zip_file_path = 'congrats.7z' # keep as is
dest_path = '.' # keep as is

find_me = '' # 2 letters are missing!
secret_password = find_me + 'bcmpda' 

# WRITE YOUR CODE BELOW
    # You’re looking for two missing lowercase letters that complete the password.
    # Write your code in the exam.py file, in the space provided under “WRITE YOUR CODE BELOW”.

# Parameters:
#     zip_file_path: The path to the 7z archive.
#     dest_path: Where the contents will be extracted.
#     password: The password you think will crack the 7z file.

# Return Value:

#     The function will return True if the archive was successfully unzipped.
#     It will return False if the unzipping failed.

# HINT: Repeatedly call this function with different passwords until you find the one that returns True.

# ----------------------------------------

# REFLEXION: 
# le mot de passe se termine par "bcmpda"
# 2 lettres minuscules manquent au début ces lettres sont entre a et z
# la fonction unzip_with_7z(...) te dit True ou False
# le hint te dit : répète la fonction jusqu’à trouver True

# ➡️ tester toutes les combinaisons possibles de 2 lettres (aa, ab, ac, …, zz).

import string

for first_letter in string.ascii_lowercase:
    for second_letter in string.ascii_lowercase:
        find_me = first_letter + second_letter
        secret_password = find_me + 'bcmpda'

        if unzip_with_7z(zip_file_path, dest_path, secret_password):
            print("✅ Password found:", secret_password)
            exit()
