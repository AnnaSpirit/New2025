#!/usr/bin/env python3
from __future__ import annotations

import json
from pathlib import Path

from character import Character


class Game:
    """Gère un groupe de joueurs et exporte leurs personnages."""

    def __init__(self, players_count: int) -> None:
        self.characters: list[Character] = []
        self.players_count = players_count

    def create_characters(self) -> None:
        """Boucle d’input pour créer chaque personnage."""
        for idx in range(1, self.players_count + 1):
            print(f"\n🎲  Joueur {idx} – création du personnage")
            name = input("Nom du personnage : ").strip()
            age = int(input("Âge du personnage : ").strip() or "18")
            self.characters.append(Character(name=name, age=age))

    # ---------- Exports ----------
    def export_json(self, path: Path = Path("characters.json")) -> None:
        path.write_text(
            json.dumps([char.to_json_dict() for char in self.characters], indent=2)
        )
        print(f"💾  JSON exporté ➜ {path.resolve()}")

    def export_txt(self, path: Path = Path("characters.txt")) -> None:
        blocks = "\n\n".join(char.to_txt_block() for char in self.characters)
        path.write_text(blocks)
        print(f"💾  Texte exporté ➜ {path.resolve()}")
