#!/usr/bin/env python3
from __future__ import annotations

import json
import random
from dataclasses import asdict, dataclass, field
from typing import ClassVar, Dict, List


@dataclass
class Character:
    """Représente un personnage D&D avec génération de stats aléatoires."""

    name: str
    age: int
    stats: Dict[str, int] = field(init=False)

    # Attributs (ordre fixe pour reproductibilité)
    ATTRIBUTES: ClassVar[List[str]] = [
        "Strength",
        "Dexterity",
        "Constitution",
        "Intelligence",
        "Wisdom",
        "Charisma",
    ]

    def __post_init__(self) -> None:
        # Génération des caractéristiques dès la création
        self.stats = {attr: self._roll_stat() for attr in self.ATTRIBUTES}

    # ---------- Méthodes privées ----------
    @staticmethod
    def _roll_four_d6() -> List[int]:
        """Lance 4 dés à 6 faces et renvoie la liste des résultats."""
        return [random.randint(1, 6) for _ in range(4)]

    def _roll_stat(self) -> int:
        """Calcule une caractéristique : somme des 3 meilleurs dés sur 4."""
        dice = self._roll_four_d6()
        dice.remove(min(dice))  # Élimine le plus petit
        return sum(dice)

    # ---------- Export ----------
    def to_json_dict(self) -> Dict:
        """Représentation JSON sérialisable."""
        return asdict(self)

    def to_txt_block(self) -> str:
        """Beau bloc texte pour un fichier .txt."""
        lines = [
            f"Name      : {self.name}",
            f"Age       : {self.age}",
            "Attributes:",
            *(f"  - {attr:<12}: {value}" for attr, value in self.stats.items()),
            "-" * 26,
        ]
        return "\n".join(lines)
