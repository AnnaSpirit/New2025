#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Générateur rapide de personnages Dungeons & Dragons.
Crée `characters.txt` et/ou `characters.json` dans le même dossier que ce script.
"""

from __future__ import annotations

import json
import random
from dataclasses import asdict, dataclass, field
from pathlib import Path
from typing import ClassVar, Dict, List

# ------------------- Répertoire de sortie verrouillé -------------------
BASE_DIR = Path(__file__).resolve().parent


# =================== Classe Character ===================
@dataclass
class Character:
    """Un personnage avec génération automatique de stats."""

    name: str
    age: int
    stats: Dict[str, int] = field(init=False)

    ATTRIBUTES: ClassVar[List[str]] = [
        "Strength",
        "Dexterity",
        "Constitution",
        "Intelligence",
        "Wisdom",
        "Charisma",
    ]

    # ---------- Génération des stats ----------
    def __post_init__(self) -> None:
        self.stats = {attr: self._roll_stat() for attr in self.ATTRIBUTES}

    @staticmethod
    def _roll_four_d6() -> List[int]:
        """Lance 4d6 et renvoie la liste des résultats."""
        return [random.randint(1, 6) for _ in range(4)]

    def _roll_stat(self) -> int:
        """Somme des 3 meilleurs dés sur 4."""
        dice = self._roll_four_d6()
        dice.remove(min(dice))
        return sum(dice)

    # ---------- Export ----------
    def to_json_dict(self) -> Dict:
        return asdict(self)

    def to_txt_block(self) -> str:
        lines = [
            f"Name      : {self.name}",
            f"Age       : {self.age}",
            "Attributes:",
            *(f"  - {attr:<12}: {val}" for attr, val in self.stats.items()),
            "-" * 28,
        ]
        return "\n".join(lines)


# =================== Classe Game ===================
class Game:
    """Gère un groupe de joueurs et l’export de leurs personnages."""

    def __init__(self, players_count: int) -> None:
        self.players_count = players_count
        self.characters: list[Character] = []

    # ---------- Création ----------
    def create_characters(self) -> None:
        for idx in range(1, self.players_count + 1):
            print(f"\n🎲  Joueur {idx} — création du personnage")
            name = input("Nom : ").strip() or f"Hero{idx}"
            age = int(input("Âge : ").strip() or "18")
            self.characters.append(Character(name=name, age=age))

    # ---------- Export ----------
    def export_txt(self, path: Path = BASE_DIR / "characters.txt") -> None:
        blocks = "\n\n".join(c.to_txt_block() for c in self.characters)
        path.write_text(blocks, encoding="utf-8")
        print(f"💾  TXT exporté → {path.name}")

    def export_json(self, path: Path = BASE_DIR / "characters.json") -> None:
        data = [c.to_json_dict() for c in self.characters]
        path.write_text(json.dumps(data, indent=2), encoding="utf-8")
        print(f"💾  JSON exporté → {path.name}")


# =================== Point d’entrée ===================
if __name__ == "__main__":
    n_players = int(input("Combien de joueurs ? ").strip() or "1")
    game = Game(players_count=n_players)
    game.create_characters()

    print("\n1) Export TXT\n2) Export JSON\n3) Les deux")
    choice = input("👉 Ton choix : ").strip()

    if choice in {"1", "3"}:
        game.export_txt()
    if choice in {"2", "3"}:
        game.export_json()

    print("✅  Personnages prêts — bonne aventure ! 🧙‍♀️")
