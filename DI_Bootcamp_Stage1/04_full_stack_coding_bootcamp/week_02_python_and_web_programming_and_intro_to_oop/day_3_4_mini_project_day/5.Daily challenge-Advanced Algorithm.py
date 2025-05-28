import random
from collections import Counter

# --- Génération de la liste fournie ---
list_of_numbers = [random.randint(0, 10_000) for _ in range(20_000)]
target_number   = 3_728

# --- Étape 1 : compter les occurrences ---
# (utile pour savoir s'il y a au moins deux fois le même nombre)
counts = Counter(list_of_numbers)

# --- Étape 2 : trouver les paires ---
pairs = []

for num in counts:
    complement = target_number - num

    # 1) Le complément existe-t-il dans la liste ?
    if complement not in counts:
        continue

    # 2) Éviter les doublons : on n'ajoute qu'une fois (num, complement)
    if num < complement:            # ex : 1000 + 2728
        pairs.append((num, complement))

    elif num == complement and counts[num] > 1:  # ex : 1864 + 1864
        pairs.append((num, complement))

# --- Étape 3 : affichage ---
print(f"Nombre de paires trouvées : {len(pairs)}\n")
for a, b in pairs[:20]:  # on montre juste les 20 premières pour ne pas noyer la console
    print(f"{a} + {b} = {target_number}")
