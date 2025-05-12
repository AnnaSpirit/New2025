Allez, c’est parti pour un vrai tuto ludique : tu vas découvrir les bases des échecs tout en codant en Python + SQLite


1. Créer la base de données (SQLite)
Objectif : stocker le jeu, les pièces et les déplacements.

2. Initialiser le jeu en Python

3. Afficher le plateau en ASCII


4. Astuce pédagogique :
	Les colonnes a–h sont les files
	Les lignes 1–8 sont les rangs
	Tu verras mieux que sur un vrai échiquier !

5. Déplacer une pièce (exemple de la tour)
	* Règle de la tour : horizontal ou vertical, pas de saut
	*
	*
	* implémente la même logique pour le fou (diagonales) et le cavalier (👟 en “L”)

6. Enregistrer le coup (tu pourras rejouer la partie en SELECTant tous les coups)

7. Boucle de jeu interactive

8. Apprendre les échecs en même temps !
	Tour (Rook) : horizontal/vertical
	Fou (Bishop) : diagonales
	Dame (Queen) : combinaison tour + fou
	Roi (King) : un pas dans toutes les directions
	Cavalier (Knight) : “L” (2+1)
	Pion (Pawn) : avance tout droit (1 ou 2 cases au démarrage), capture en diagonale

Challenge :
	Implémente la logique de chaque pièce l’une après l’autre.
	Teste tes règles en faisant des parties minimalistes.
	Affiche la liste des coups via :



