# 1_mini_project_vaccines.py

# Classe représentant un être humain/citoyen
class Human:
    def __init__(self, id_number: str, name: str, age: int, priority: bool, blood_type: str) -> None:
        # id_number : numéro d'identification (string)
        self.id_number = id_number  # identifiant unique du citoyen
        # name : nom du citoyen (string)
        self.name = name  # nom complet du citoyen
        # age : âge du citoyen (int)
        self.age = age  # âge en années
        # priority : booléen indiquant s'il a une priorité (par exemple, soignant, comorbidité, etc.)
        self.priority = priority  # True si la personne est prioritaire
        # blood_type : groupe sanguin ("A", "B", "AB" ou "O")
        self.blood_type = blood_type  # type de sang
        # family : liste de membres de la famille vivant dans le même foyer
        self.family = []  # initialisé vide

    # Méthode pour ajouter un membre de la famille
    def add_family_member(self, person: "Human") -> None:
        # Si la personne n'est pas déjà dans la liste de famille, on l'ajoute
        if person not in self.family:
            self.family.append(person)
        # Même pour l'autre sens : on s'assure que 'self' est ajouté à la famille de 'person'
        if self not in person.family:
            person.family.append(self)


# Classe représentant une file d'attente de personnes à vacciner
class Queue:
    def __init__(self) -> None:
        # humans : liste des objets Human en attente
        self.humans = []  # initialisé comme liste vide

    # Ajoute une personne à la file d'attente
    def add_person(self, person: Human) -> None:
        # Si la personne est prioritaire (age > 60 ou flag priority True)
        if person.priority or person.age > 60:
            # On la met au début de la liste : on crée une nouvelle liste avec person en premier
            self.humans = [person] + self.humans
        else:
            # Sinon, on l'ajoute simplement à la fin de la liste existante
            self.humans = self.humans + [person]

    # Retourne l'index d'une personne dans la file, ou -1 si non trouvée
    def find_in_queue(self, person: Human) -> int:
        index = 0  # compteur d'index manuel
        # Parcours manuel de la liste
        for h in self.humans:
            if h is person:
                return index  # on retourne l'index dès qu'on trouve la correspondance d'objet
            index += 1
        return -1  # si non trouvée, on retourne -1

    # Échange deux personnes dans la file d'attente si elles y sont présentes
    def swap(self, person1: Human, person2: Human) -> None:
        # On récupère les indices de chaque personne
        idx1 = self.find_in_queue(person1)
        idx2 = self.find_in_queue(person2)
        # On vérifie qu'on a bien trouvé les deux personnes dans la file
        if idx1 != -1 and idx2 != -1:
            # On s'assure que idx1 < idx2 pour faciliter l'échange
            if idx1 < idx2:
                # On extrait les deux personnes
                h1 = self.humans[idx1]
                h2 = self.humans[idx2]
                # On reconstruit la liste en échangeant les deux positions
                new_list = []
                i = 0
                while i < len(self.humans):
                    if i == idx1:
                        new_list.append(h2)
                    elif i == idx2:
                        new_list.append(h1)
                    else:
                        new_list.append(self.humans[i])
                    i += 1
                self.humans = new_list  # on remplace la liste
            else:
                # Même logique si idx2 < idx1
                h1 = self.humans[idx1]
                h2 = self.humans[idx2]
                new_list = []
                i = 0
                while i < len(self.humans):
                    if i == idx2:
                        new_list.append(h1)
                    elif i == idx1:
                        new_list.append(h2)
                    else:
                        new_list.append(self.humans[i])
                    i += 1
                self.humans = new_list  # on remplace la liste

    # Récupère la prochaine personne (position 0) et la retire de la file
    def get_next(self) -> Human or None:
        # Si la file est vide, on retourne None
        if len(self.humans) == 0:
            return None
        # On prend l'élément à l'index 0
        next_person = self.humans[0]
        # On reconstruit la liste sans le premier élément
        self.humans = self.humans[1:]
        return next_person  # on retourne la personne extraite

    # Récupère la première personne avec un type sanguin donné et l'enlève de la file
    def get_next_blood_type(self, blood_type: str) -> Human or None:
        index = 0  # compteur manuel
        # Parcours manuel de la liste pour trouver le premier matching
        for h in self.humans:
            if h.blood_type == blood_type:
                # On a trouvé une correspondance
                result_person = h
                # On reconstruit la liste sans cet élément
                new_list = []
                i = 0
                while i < len(self.humans):
                    if i != index:
                        new_list.append(self.humans[i])
                    i += 1
                self.humans = new_list  # on remplace la liste
                return result_person  # on retourne la personne extraite
            index += 1
        # Si aucune personne n'a le type sanguin demandé, on retourne None
        return None

    # Trie la file par ordre de priorité puis par âge décroissant
    def sort_by_age(self) -> None:
        # Implémentation d'un tri par sélection personnalisé :
        n = len(self.humans)
        i = 0
        # Pour chaque position i, on cherche l'élément "max" selon nos critères
        while i < n - 1:
            max_idx = i  # on part du principe que l'élément à i est le plus grand
            j = i + 1
            # Parcours du reste de la liste pour trouver un élément supérieur
            while j < n:
                # Critère de comparaison :
                # - Si h[j] est prioritaire et h[max_idx] ne l'est pas, alors h[j] > h[max_idx]
                if self.humans[j].priority and not self.humans[max_idx].priority:
                    max_idx = j
                else:
                    # Si même statut de priorité (tous les deux True ou False), on compare l'âge
                    if (self.humans[j].priority == self.humans[max_idx].priority) and (self.humans[j].age > self.humans[max_idx].age):
                        max_idx = j
                j += 1
            # Si l'élément "max" n'est pas à la position i, on échange
            if max_idx != i:
                # On effectue un échange manuel sans utiliser list.swap ni list.pop ni list.insert
                temp = self.humans[i]
                self.humans[i] = self.humans[max_idx]
                self.humans[max_idx] = temp
            i += 1

    # Réarrange la file pour que deux membres de la même famille ne se suivent pas
    def rearrange_queue(self) -> None:
        length = len(self.humans)
        i = 1
        # Pour chaque position à partir du deuxième élément
        while i < length:
            prev_person = self.humans[i - 1]
            curr_person = self.humans[i]
            # Si la personne courante fait partie de la famille de la personne précédente
            if curr_person in prev_person.family:
                # On cherche un candidat plus loin dans la file qui n'est pas membre de la même famille
                j = i + 1
                found_swap = False
                while j < length:
                    candidate = self.humans[j]
                    # Si ce candidat n'est pas de la même famille que prev_person
                    if candidate not in prev_person.family:
                        # On swappe les deux positions i et j
                        self.swap(curr_person, candidate)
                        found_swap = True
                        break  # on sort de la boucle j
                    j += 1
                # Si on n'a pas trouvé de candidat, on laisse l'ordre tel quel (impossible de réarranger plus)
                if not found_swap:
                    # On ne fait rien et on continue
                    pass
            i += 1
