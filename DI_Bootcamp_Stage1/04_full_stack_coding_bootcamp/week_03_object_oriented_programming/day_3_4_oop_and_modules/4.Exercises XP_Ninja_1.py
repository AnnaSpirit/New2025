from __future__ import annotations
from abc import ABC, abstractmethod

class Temperature(ABC):
    """
    Classe abstraite pour représenter une température dans n'importe quelle unité.
    """

    def __init__(self, value: float) -> None:
        self._value = float(value)  # ° dans l'unité native

    # ----- conversion interne vers °C (pivot commun) -------------------
    @abstractmethod
    def _to_celsius(self) -> float:
        """Convertit la valeur native en degrés Celsius."""
        ...

    @staticmethod
    @abstractmethod
    def _from_celsius(celsius: float) -> float:
        """Convertit de degrés Celsius vers l'unité de la sous-classe."""
        ...

    # ----- API publique -------------------------------------------------
    @property
    def value(self) -> float:
        """Valeur numérique (dans l'unité de l'instance)."""
        return self._value

    def to(self, unit: type[Temperature]) -> float:
        """
        Convertit la température vers l'unité demandée
        (passer la **classe** cible, ex : Kelvin, Fahrenheit…).
        """
        c = self._to_celsius()
        return unit._from_celsius(c)

    # ----- helpers de comfort ------------------------------------------
    def __repr__(self) -> str:
        return f"{self.value:.2f} {self.__class__.__name__}"

# -------------------- Sous-classes concrètes ----------------------------

class Celsius(Temperature):
    def _to_celsius(self) -> float:
        return self.value

    @staticmethod
    def _from_celsius(celsius: float) -> float:
        return celsius


class Kelvin(Temperature):
    def _to_celsius(self) -> float:
        return self.value - 273.15

    @staticmethod
    def _from_celsius(celsius: float) -> float:
        return celsius + 273.15


class Fahrenheit(Temperature):
    def _to_celsius(self) -> float:
        return (self.value - 32) * 5 / 9

    @staticmethod
    def _from_celsius(celsius: float) -> float:
        return celsius * 9 / 5 + 32


# --------------------------- Démo rapide -------------------------------
if __name__ == "__main__":
    temp_k = Kelvin(300)
    print(temp_k, "→", temp_k.to(Celsius), "°C")
    temp_f = Fahrenheit(98.6)
    print(temp_f, "→", temp_f.to(Kelvin), "K")
