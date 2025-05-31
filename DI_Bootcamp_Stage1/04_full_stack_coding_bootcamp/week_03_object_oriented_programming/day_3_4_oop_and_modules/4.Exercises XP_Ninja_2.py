from __future__ import annotations
import random
from typing import Optional

class QuantumParticle:
    """
    Représentation ultralight d'un quantum : position x, momentum p, spin s.
    """

    def __init__(self, x: Optional[int] = None, p: Optional[float] = None) -> None:
        self.x: int = x if x is not None else random.randint(1, 10_000)
        self.p: float = p if p is not None else random.random()
        self._spin: Optional[float] = None      # inconnu tant qu'on n'a pas mesuré
        self._partner: Optional["QuantumParticle"] = None  # entanglement link

    # ----------------------- mesures ----------------------------------
    def position(self) -> int:
        self._disturb()
        self.x = random.randint(1, 10_000)
        return self.x

    def momentum(self) -> float:
        self._disturb()
        self.p = random.random()
        return self.p

    def spin(self) -> float:
        """
        Mesure le spin. Si la particule est intriquée, impose
        le spin contraire à l'autre. Renvoie la valeur mesurée.
        """
        if self._spin is None:                       # première mesure → collapse
            self._spin = random.choice((0.5, -0.5))
            if self._partner:
                self._partner._spin = -self._spin    # instantanément opposé
                print("Spooky Action at a Distance !!")
        # Disturbance physique : spin ne la change pas ici (simplification)
        return self._spin

    # -------------------- entanglement --------------------------------
    def entangle(self, other: "QuantumParticle") -> None:
        if not isinstance(other, QuantumParticle):
            raise TypeError("Can only entangle with another QuantumParticle.")
        self._partner = other
        other._partner = self
        # Spins deviennent inconnus jusqu'à première mesure
        self._spin = other._spin = None
        print(f"Particle {id(self)} is now in quantum entanglement with Particle {id(other)}")

    # -------------------- outils internes -----------------------------
    def _disturb(self) -> None:
        """Simule l'interférence inhérente à toute mesure."""
        # Nouveau x et p, indépendants
        self.x = random.randint(1, 10_000)
        self.p = random.random()
        print("Quantum Interferences!!")

    # -------------------- représentations -----------------------------
    def __repr__(self) -> str:
        spin_str = "unknown" if self._spin is None else f"{self._spin:+}"
        return (f"<QParticle id={id(self)} x={self.x} p={self.p:.3f} "
                f"spin={spin_str}>")

# --------------------------- Démo --------------------------------------
if __name__ == "__main__":
    # Création + intrication
    p1 = QuantumParticle(x=1, p=5.0)
    p2 = QuantumParticle(x=2, p=5.0)
    p1.entangle(p2)

    # Mesure du spin de p1 -> action instantanée sur p2
    print("p1 spin →", p1.spin())
    print("p2 spin →", p2.spin())  # déjà fixé à l'opposé

    # Mesure position → disturbance
    print("p1 position →", p1.position())
