from __future__ import annotations
import time
from enum import Enum
from copy import deepcopy
from typing import List, Tuple


class CellState(Enum):
    """État possible d'une cellule (vivante ou morte)."""
    ALIVE = True
    DEAD  = False


class GameOfLife:
    """
    Implémentation basique du Jeu de la vie avec bordures fixes.
    Un `True` dans la grille signifie cellule vivante, `False` = morte.
    """

    def __init__(self, initial_grid: List[List[bool]]) -> None:
        # Clonage pour ne jamais modifier la grille passée en paramètre
        self.grid: List[List[bool]] = deepcopy(initial_grid)
        self.rows: int = len(initial_grid)
        self.cols: int = len(initial_grid[0]) if self.rows else 0
        self.generation: int = 0

    # ---------- Boucle principale ----------
    def run(self, max_generations: int = 50, delay: float = 0.2) -> None:
        """Fait tourner le jeu un certain nombre de générations."""
        for _ in range(max_generations):
            self.display()
            self.step()
            time.sleep(delay)

    # ---------- Affichage ----------
    def display(self) -> None:
        """Affiche la grille courante dans la console."""
        print(f"\nGeneration {self.generation}")
        horizontal_border = "+" + "-" * self.cols + "+"
        print(horizontal_border)
        for row in self.grid:
            line = "".join("█" if cell else "·" for cell in row)
            print(f"|{line}|")
        print(horizontal_border)

    # ---------- Calcul de la prochaine génération ----------
    def step(self) -> None:
        """Calcule la génération suivante selon les règles de Conway."""
        new_grid = [[False] * self.cols for _ in range(self.rows)]

        for r in range(self.rows):
            for c in range(self.cols):
                alive_neighbors = self.count_neighbors(r, c)
                cell_alive = self.grid[r][c]

                # Application des 4 règles
                if cell_alive and alive_neighbors in (2, 3):
                    new_grid[r][c] = True
                elif not cell_alive and alive_neighbors == 3:
                    new_grid[r][c] = True
                # Sinon la cellule reste / devient morte (valeur False déjà mise)

        self.grid = new_grid
        self.generation += 1

    # ---------- Outil interne ----------
    def count_neighbors(self, r: int, c: int) -> int:
        """Compte le nombre de voisins vivants autour de (r, c)."""
        count = 0
        for dr in (-1, 0, 1):
            for dc in (-1, 0, 1):
                if dr == 0 and dc == 0:
                    continue  # on saute la cellule elle-même
                nr, nc = r + dr, c + dc
                if 0 <= nr < self.rows and 0 <= nc < self.cols:
                    count += self.grid[nr][nc]
        return count


# ------------------------------------------------------------------
# 🎲 États de départ classiques (à toi d’en inventer d’autres !)
# ------------------------------------------------------------------
def make_empty(rows: int, cols: int) -> List[List[bool]]:
    return [[False] * cols for _ in range(rows)]


def preset_blinker(rows: int = 15, cols: int = 15) -> List[List[bool]]:
    """Oscillateur période 2."""
    grid = make_empty(rows, cols)
    mid_r, mid_c = rows // 2, cols // 2
    for dc in (-1, 0, 1):
        grid[mid_r][mid_c + dc] = True
    return grid


def preset_glider(rows: int = 20, cols: int = 20) -> List[List[bool]]:
    """Petit planeur qui se déplace en diagonale."""
    grid = make_empty(rows, cols)
    pattern = [(0, 1), (1, 2), (2, 0), (2, 1), (2, 2)]
    for dr, dc in pattern:
        grid[1 + dr][1 + dc] = True
    return grid


def preset_block(rows: int = 10, cols: int = 10) -> List[List[bool]]:
    """Structure stable (ne bouge jamais)."""
    grid = make_empty(rows, cols)
    pattern = [(0, 0), (0, 1), (1, 0), (1, 1)]
    for dr, dc in pattern:
        grid[4 + dr][4 + dc] = True
    return grid


# ------------------------------------------------------------------
# 🏁 Exécution rapide – choisis ton preset
# ------------------------------------------------------------------
if __name__ == "__main__":
    initial = preset_glider()      # change ici : blinker(), block(), glider()
    game = GameOfLife(initial)
    game.run(max_generations=60, delay=0.1)
