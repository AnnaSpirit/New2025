#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Saint-Valentin : gestion de menu + vérifications regex + cœur ASCII.
Le fichier menu.json est toujours créé à côté de ce script.
"""

from __future__ import annotations

import json
import re
from pathlib import Path

# ------------------- Répertoire de travail verrouillé -------------------
BASE_DIR = Path(__file__).resolve().parent
MENU_FILE = BASE_DIR / "menu.json"

# ------------------- Constantes & regex -------------------
CONNECTION_WORDS = {"of", "and", "à", "de", "du", "des"}

NAME_REGEX = re.compile(
    r"""^V              # Doit commencer par 'V'
        [A-Z][a-z]+     # Première majuscule + minuscules
        (?:\s(?:        # Au moins un autre mot :
            [A-Z][a-z]+ #   Mot capitalisé
          | of|and|à|de|du|des  #   Mot de liaison en minuscules
        ))+              # Répéter
        $""",
    re.VERBOSE,
)

PRICE_REGEX = re.compile(r"^\d{2},14$")  # Exemple : 29,14


# ------------------- Fonctions utilitaires -------------------
def count_e(text: str) -> int:
    """Compte les 'e' (minuscules ou majuscules)."""
    return text.lower().count("e")


def valid_name(name: str) -> bool:
    """Valide le nom d’un plat selon toutes les règles."""
    return (
        NAME_REGEX.match(name)
        and count_e(name) >= 2
        and not any(char.isdigit() for char in name)
    )


def valid_price(price: str) -> bool:
    """Valide le prix (format XX,14)."""
    return bool(PRICE_REGEX.match(price))


def load_menu() -> dict:
    """Charge le menu ou crée l’ossature si besoin."""
    if not MENU_FILE.exists():
        MENU_FILE.write_text(
            json.dumps({"regular_items": [], "valentine_items": []}, indent=2)
        )
    return json.loads(MENU_FILE.read_text(encoding="utf-8"))


def save_menu(menu: dict) -> None:
    """Sauvegarde le menu dans le JSON."""
    MENU_FILE.write_text(json.dumps(menu, indent=2, ensure_ascii=False))


def draw_heart() -> None:
    """Affiche un cœur ASCII (★)."""
    heart = [
        "  ***     ***  ",
        " *****   ***** ",
        "******* *******",
        " ************* ",
        "  ***********  ",
        "   *********   ",
        "    *******    ",
        "     *****     ",
        "      ***      ",
        "       *       ",
    ]
    for line in heart:
        print(line.replace("*", "★"))


# ------------------- Actions -------------------
def add_valentine_item() -> None:
    """Ajoute un plat Saint-Valentin si nom + prix valides."""
    menu = load_menu()

    print("💘  Nouveau plat Saint-Valentin")
    name = input("Nom du plat : ").strip()
    if not valid_name(name):
        print("❌  Nom invalide (vérifie la casse, >1 « e », pas de chiffres…).")
        return

    price = input("Prix (XX,14) : ").strip()
    if not valid_price(price):
        print("❌  Prix invalide (format XX,14).")
        return

    menu["valentine_items"].append({"name": name, "price": price})
    save_menu(menu)
    print("✅  Plat ajouté avec succès !")


def show_menu() -> None:
    """Affiche les menus et le cœur."""
    menu = load_menu()
    draw_heart()
    print("\n— SAINT-VALENTIN —")
    for item in menu["valentine_items"]:
        print(f"💝 {item['name']}  …  {item['price']} €")
    print("\n— MENU CLASSIQUE —")
    for item in menu["regular_items"]:
        print(f"• {item['name']}  …  {item['price']} €")


# ------------------- Main loop -------------------
if __name__ == "__main__":
    while True:
        print("\n1) Ajouter un plat St-Valentin\n2) Afficher le menu\n3) Quitter")
        choice = input("👉 Ton choix : ").strip()
        if choice == "1":
            add_valentine_item()
        elif choice == "2":
            show_menu()
        elif choice == "3":
            break
        else:
            print("❓ Choix invalide.")
