import json
from pathlib import Path


class MenuManager:
    """Gère la lecture, l’écriture et les modifications du menu."""

    def __init__(self, file_path: str = "restaurant_menu.json") -> None:
        # 📁 On convertit en Path pour plus de confort
        self._file_path = Path(file_path)
        # ⬇️ Lecture du fichier JSON et stockage en mémoire
        try:
            with self._file_path.open(encoding="utf-8") as fp:
                data = json.load(fp)
                self.menu: list[dict[str, object]] = data.get("items", [])
        except FileNotFoundError:
            # Fichier absent ? On part sur un menu vide !
            self.menu = []

    # ---------- Méthodes publiques ---------- #

    def add_item(self, name: str, price: float) -> None:
        """Ajoute un plat (non sauvegardé immédiatement)."""
        self.menu.append({"name": name, "price": float(price)})

    def remove_item(self, name: str) -> bool:
        """Supprime le plat nommé *name*.  
        Retourne True si succès, False sinon.
        """
        for index, item in enumerate(self.menu):
            if item["name"].lower() == name.lower():
                del self.menu[index]
                return True
        return False

    def save_to_file(self) -> None:
        """Sauvegarde le menu courant dans le fichier JSON."""
        with self._file_path.open("w", encoding="utf-8") as fp:
            json.dump({"items": self.menu}, fp, indent=4)
