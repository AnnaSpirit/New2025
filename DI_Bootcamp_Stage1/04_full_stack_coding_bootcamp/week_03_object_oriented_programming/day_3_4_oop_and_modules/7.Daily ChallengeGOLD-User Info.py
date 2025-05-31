# Harder Daily Challenge – Sort tuples with a lambda
# --------------------------------------------------
# Demande 5 fois (Name, Age, Score), crée une liste de tuples,
# puis la trie par Name > Age > Score.

def collect_inputs(n: int = 5) -> list[tuple[str, str, str]]:
    """Demande n entrées utilisateur et retourne une liste de tuples (name, age, score)."""
    data = []
    for i in range(1, n + 1):
        # 🗣️ Invite l’utilisateur à saisir : Tom,19,80
        raw = input(f"Entry {i}/{n} (format Name,Age,Score): ").strip()
        name, age, score = map(str.strip, raw.split(","))
        data.append((name, age, score))  # On conserve les nombres en chaînes pour coller à l’exemple
    return data


def sort_tuples(records: list[tuple[str, str, str]]) -> list[tuple[str, str, str]]:
    """
    Trie les tuples selon la priorité Name > Age > Score,
    en convertissant Age et Score en int pour un tri numérique.
    """
    return sorted(
        records,
        key=lambda t: (t[0], int(t[1]), int(t[2]))  # ⚡ Lambda = cœur du tri
    )


if __name__ == "__main__":
    tuples_list = collect_inputs()
    sorted_list = sort_tuples(tuples_list)
    print("\nSorted result ➜", sorted_list)


# [('John', '20', '90'), ('Jony', '17', '91'), ('Jony', '17', '93'),
#  ('Json', '21', '85'), ('Tom', '19', '80')]
