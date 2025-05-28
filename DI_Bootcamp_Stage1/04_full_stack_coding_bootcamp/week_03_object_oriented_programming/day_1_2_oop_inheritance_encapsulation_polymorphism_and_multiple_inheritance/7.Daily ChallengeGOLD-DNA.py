import random
from typing import List, Optional

# ---------- Gene ----------
class Gene:
    """Un gène binaire pouvant muter."""
    def __init__(self, value: Optional[int] = None) -> None:
        self.value: int = value if value in (0, 1) else random.randint(0, 1)

    def flip(self) -> None:
        self.value = 1 - self.value     # 0→1, 1→0

    def __repr__(self) -> str:          # jolies impressions
        return str(self.value)

# ---------- Chromosome ----------
class Chromosome:
    LENGTH = 10

    def __init__(self, genes: Optional[List[Gene]] = None) -> None:
        self.genes: List[Gene] = genes if genes else [Gene() for _ in range(self.LENGTH)]

    def mutate(self) -> None:
        for gene in self.genes:
            if random.random() < 0.5:   # 50 % de chance de flip
                gene.flip()

    def is_all_ones(self) -> bool:
        return all(g.value == 1 for g in self.genes)

    def __repr__(self) -> str:
        return "".join(str(g) for g in self.genes)


# ---------- DNA ----------
class DNA:
    LENGTH = 10

    def __init__(self, chromosomes: Optional[List[Chromosome]] = None) -> None:
        self.chromosomes: List[Chromosome] = (
            chromosomes if chromosomes else [Chromosome() for _ in range(self.LENGTH)]
        )

    def mutate(self) -> None:
        for chromo in self.chromosomes:
            if random.random() < 0.5:
                chromo.mutate()

    def is_all_ones(self) -> bool:
        return all(chromo.is_all_ones() for chromo in self.chromosomes)

    def __repr__(self) -> str:
        return "\n".join(str(chromo) for chromo in self.chromosomes)

# ---------- Organism ----------
class Organism:
    def __init__(self, dna: DNA, env_prob: float = 0.3) -> None:
        if not 0.0 <= env_prob <= 1.0:
            raise ValueError("env_prob doit être entre 0 et 1.")
        self.dna = dna
        self.env_prob = env_prob

    def live(self) -> None:
        if random.random() < self.env_prob:
            self.dna.mutate()

    def is_perfect(self) -> bool:
        return self.dna.is_all_ones()

# ---------- Simulation ----------
def run_simulation(pop_size: int = 20, env_prob: float = 0.3, verbose: bool = False) -> int:
    population = [Organism(DNA(), env_prob) for _ in range(pop_size)]
    generations = 0

    while True:
        generations += 1
        for org in population:
            org.live()
        if org.is_perfect():
            if verbose:
                print(f"\n🎉 Parfait ! {generations} générations.")
        print(org.dna)
    return generations


if __name__ == "__main__":
    gens = run_simulation(pop_size=50, env_prob=0.4, verbose=True)
    print(f"\n➡️  Terminé en {gens} générations.")

# en fin de fichier
# if __name__ == "__main__":
#     gens = run_simulation(
#         pop_size = 5,     # très petit
#         env_prob = 1.0,   # mutation à chaque génération !
#         verbose  = True
#     )
#     print(f"Terminé en {gens} générations.")

def run_simulation(pop_size=20, env_prob=0.3,
                   verbose=False, max_gens=1000):
    population = [Organism(DNA(), env_prob) for _ in range(pop_size)]

    for gen in range(1, max_gens + 1):
        for org in population:
            org.live()
            if org.is_perfect():
                if verbose:
                    print(f"\n🎉 Parfait en {gen} générations !")
                    print(org.dna)
                return gen                # succès
        if verbose and gen % 1000 == 0:
            print(f"⏳ Génération {gen} – toujours rien…")

    raise RuntimeError(f"Aucun ADN parfait après {max_gens} générations 😅")

try:
    run_simulation(pop_size=20,
                   env_prob=0.3,
                   verbose=True,
                   max_gens=1_000)        # plafonné à 1 000
except RuntimeError as err:
    print(err)                            # <- Devrait s’afficher au bout de 1 000 gén.
