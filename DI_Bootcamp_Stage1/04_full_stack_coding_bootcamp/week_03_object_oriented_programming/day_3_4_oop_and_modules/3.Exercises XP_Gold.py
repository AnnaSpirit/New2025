pip install holidays

# ========== Exercice 1 : Upcoming Holiday ===============================
import datetime as dt
import holidays

def next_public_holiday(country: str = "IL") -> tuple[str, dt.timedelta]:
    """
    Retourne (nom_du_jour_férié, delta_de_temps) à partir d’aujourd’hui.
    `country` suit les codes ISO du package « holidays » (IL = Israël).
    """
    today = dt.date.today()
    # Ensemble des jours fériés pour l’année en cours + l’an prochain
    hols = holidays.country_holidays(country, years=[today.year, today.year + 1])
    # Recherche du prochain jour férié strictement futur
    upcoming = min(date for date in hols if date > today)
    holiday_name = hols.get(upcoming)
    return holiday_name, upcoming - today

def display_today_and_next_holiday() -> None:
    """Affiche la date du jour puis le prochain jour férié."""
    today = dt.date.today()
    name, delta = next_public_holiday()
    print(f"Today is {today:%A %d %b %Y}")
    print(f"The next holiday is {name} in {delta.days} day(s). 🎉")

# ========== Exercice 2 : How Old Are You On Jupiter? ====================
PLANET_ORBITAL_RATIO = {
    # Basé sur l’orbite terrestre = 1 année
    "Mercury": 0.2408467,
    "Venus":   0.61519726,
    "Earth":   1.0,
    "Mars":    1.8808158,
    "Jupiter": 11.862615,
    "Saturn":  29.447498,
    "Uranus":  84.016846,
    "Neptune": 164.79132,
}

EARTH_YEAR_SECONDS = 31557600  # 365.25 jours

def age_in_planet_years(age_seconds: int) -> dict[str, float]:
    """
    Convertit une durée en secondes → âge sur chaque planète.
    Retourne un dict {planet: age_years}.
    """
    earth_years = age_seconds / EARTH_YEAR_SECONDS
    return {planet: round(earth_years / ratio, 2)
            for planet, ratio in PLANET_ORBITAL_RATIO.items()}

# ========== Exercice 3 : RegExp #1 – Extraire les chiffres ===============
import re

def return_numbers(s: str) -> str:
    """
    Extrait et concatène tous les chiffres présents dans la chaîne `s`.
    """
    return "".join(re.findall(r"\d", s))

# ========== Exercice 4 : RegExp #2 – Validation du nom ==================
def is_valid_full_name(full_name: str) -> bool:
    """
    Vérifie que le nom contient uniquement des lettres,
    exactement un espace, et que chaque mot commence par une majuscule.
    """
    pattern = r"^[A-Z][a-z]+ [A-Z][a-z]+$"
    return bool(re.fullmatch(pattern, full_name))

# ========== Exercice 5 : Password Generator =============================
import string
import secrets
import random

DIGITS    = string.digits
LOWERS    = string.ascii_lowercase
UPPERS    = string.ascii_uppercase
SPECIALS  = "!@#$%^&*_"
POOL_ALL  = DIGITS + LOWERS + UPPERS + SPECIALS

def generate_password(length: int) -> str:
    """
    Génère un mot de passe robuste de longueur `length`
    (entre 6 et 30) contenant au moins un caractère
    de chaque catégorie.
    """
    if not 6 <= length <= 30:
        raise ValueError("length must be between 6 and 30")

    # 1 caractère garanti de chaque type
    chars = [
        secrets.choice(DIGITS),
        secrets.choice(LOWERS),
        secrets.choice(UPPERS),
        secrets.choice(SPECIALS),
    ]
    # Compléter avec du random
    chars += [secrets.choice(POOL_ALL) for _ in range(length - 4)]
    secrets.SystemRandom().shuffle(chars)
    return "".join(chars)

def password_is_valid(pw: str) -> bool:
    """Teste la robustesse du mot de passe."""
    return (
        6 <= len(pw) <= 30
        and any(c in DIGITS for c in pw)
        and any(c in LOWERS for c in pw)
        and any(c in UPPERS for c in pw)
        and any(c in SPECIALS for c in pw)
    )

def self_test_password_generator(rounds: int = 100) -> None:
    """
    Lance `rounds` tests de génération/validation aléatoires.
    Soulève AssertionError si problème.
    """
    for _ in range(rounds):
        length = random.randint(6, 30)
        pw = generate_password(length)
        assert len(pw) == length
        assert password_is_valid(pw)
    print(f"✅ Password generator passed {rounds} random tests.")

# ====================== DÉMO RAPIDE =====================================
if __name__ == "__main__":
    print("=== Exo 1 : Holiday ===")
    display_today_and_next_holiday()
    print("\n=== Exo 2 : Age on planets ===")
    seconds_example = 1_000_000_000
    print(f"Base: {seconds_example:,} s")
    for planet, age in age_in_planet_years(seconds_example).items():
        print(f"- {planet:<8}: {age:>6} years")

    print("\n=== Exo 3 : Extract digits ===")
    test_str = "k5k3q2g5z6x9bn"
    print(f"String : {test_str} → {return_numbers(test_str)}")

    print("\n=== Exo 4 : Validate full name ===")
    for name in ["John Doe", "john doe", "John  Doe", "John-Doe"]:
        print(f"{name!r:12} → {is_valid_full_name(name)}")

    print("\n=== Exo 5 : Password generator ===")
    pw_len = 12
    pw = generate_password(pw_len)
    print(f"Generated ({pw_len}) → {pw}")
    print("Valid ? →", password_is_valid(pw))
    self_test_password_generator()
