import sys

# -----------------------------
# Part I – Compte bancaire basique
# -----------------------------
class BankAccount:
    """Représente un compte bancaire simple."""
    
    def __init__(self, balance: int = 0, *, username: str = "", password: str = "") -> None:
        # Solde et infos d'authentification
        self.balance: int = balance
        self.username: str = username
        self.password: str = password
        self.authenticated: bool = False  # Par défaut, l'utilisateur n'est pas connecté

    # ---------- Méthodes « cœur » ----------
    def deposit(self, amount: int) -> None:
        """Dépose une somme positive si l'utilisateur est authentifié."""
        self._check_auth()
        self._validate_positive(amount)
        self.balance += amount

    def withdraw(self, amount: int) -> None:
        """Retire une somme positive si l'utilisateur est authentifié et si le solde suffit."""
        self._check_auth()
        self._validate_positive(amount)
        if amount > self.balance:
            raise ValueError("⛔ Solde insuffisant.")
        self.balance -= amount

    # ---------- Authentification ----------
    def authenticate(self, username: str, password: str) -> bool:
        """Vérifie login + mot de passe et change l'état authenticated."""
        self.authenticated = (username == self.username and password == self.password)
        return self.authenticated

    # ---------- Utilitaires internes ----------
    @staticmethod
    def _validate_positive(amount: int) -> None:
        if not isinstance(amount, int) or amount <= 0:
            raise ValueError("⛔ Le montant doit être un entier positif.")

    def _check_auth(self) -> None:
        if not self.authenticated:
            raise PermissionError("🔒 Action impossible : utilisateur non authentifié.")

    # ---------- Cosmétiques ----------
    def __repr__(self) -> str:
        return f"<BankAccount balance={self.balance}>"

# -----------------------------
# Part II – Compte avec solde minimum
# -----------------------------
class MinimumBalanceAccount(BankAccount):
    """Compte bancaire imposant un solde minimum permanent."""
    
    def __init__(self, balance: int = 0, *, minimum_balance: int = 0,
                 username: str = "", password: str = "") -> None:
        super().__init__(balance, username=username, password=password)
        self.minimum_balance: int = minimum_balance

    def withdraw(self, amount: int) -> None:
        """Autorise le retrait seulement si le solde ne passe pas sous le minimum."""
        self._check_auth()
        self._validate_positive(amount)
        if self.balance - amount < self.minimum_balance:
            raise ValueError("⛔ Retrait refusé : solde minimum dépassé.")
        self.balance -= amount

    def __repr__(self) -> str:
        return (f"<MinimumBalanceAccount balance={self.balance} "
                f"min={self.minimum_balance}>")

# -----------------------------
# Part IV – BONUS : Distributeur automatique (ATM)
# -----------------------------
class ATM:
    """Interface console minimaliste pour gérer plusieurs comptes."""
    
    def __init__(self, account_list, try_limit: int = 3):
        # Vérification des comptes transmis
        if not all(isinstance(acct, BankAccount) for acct in account_list):
            raise TypeError("⛔ Tous les éléments de account_list doivent être des BankAccount.")
        
        # Validation/normalisation de try_limit
        if not isinstance(try_limit, int) or try_limit <= 0:
            print("⚠️ try_limit invalide ; valeur par défaut 2 appliquée.")
            try_limit = 2
        
        self.accounts       = account_list
        self.try_limit      = try_limit
        self.current_tries  = 0
        self.current_acct   = None  # Compte connecté

        # Démarrage de l'interface utilisateur
        self.show_main_menu()

    # ---------- Menus ----------
    def show_main_menu(self):
        while True:
            print("\n=== ATM – Menu principal ===")
            print("1) Log in")
            print("0) Exit")
            choice = input("Choix : ").strip()

            if choice == "1":
                self._prompt_login()
            elif choice == "0":
                print("👋 Au revoir !")
                sys.exit()
            else:
                print("⛔ Option inconnue.")

    def _prompt_login(self):
        """Boucle de connexion avec limite d'essais."""
        while self.current_tries < self.try_limit:
            user = input("Username : ").strip()
            pwd  = input("Password : ").strip()

            for acct in self.accounts:
                if acct.authenticate(user, pwd):
                    print("✅ Connexion réussie.")
                    self.current_acct = acct
                    self.show_account_menu()
                    return  # sortie après déconnexion
            # Aucun compte ne correspond
            self.current_tries += 1
            print(f"❌ Identifiants invalides ({self.current_tries}/{self.try_limit})")

        print("🚫 Limite d'essais atteinte. Fermeture de l'ATM.")
        sys.exit()

    def show_account_menu(self):
        """Menu spécifique à un compte déjà authentifié."""
        acct = self.current_acct
        while True:
            print(f"\n--- Compte {acct.username} --- Solde actuel : {acct.balance} ---")
            print("1) Déposer")
            print("2) Retirer")
            print("0) Déconnexion")
            choice = input("Choix : ").strip()

            try:
                if choice == "1":
                    amount = int(input("Montant à déposer : "))
                    acct.deposit(amount)
                    print("💸 Dépôt effectué.")
                elif choice == "2":
                    amount = int(input("Montant à retirer : "))
                    acct.withdraw(amount)
                    print("🏧 Retrait effectué.")
                elif choice == "0":
                    print("🔒 Déconnexion.")
                    acct.authenticated = False
                    self.current_acct = None
                    self.current_tries = 0
                    return
                else:
                    print("⛔ Option inconnue.")
            except Exception as e:
                print(e)

# -----------------------------
# Exemple d’utilisation rapide
# -----------------------------
if __name__ == "__main__":
    # Création de quelques comptes pour tester
    a1 = BankAccount(balance=1_000, username="alice", password="wonder")
    a2 = MinimumBalanceAccount(balance=500, minimum_balance=200,
                               username="bob", password="builder")

    # Démarrage de l’ATM
    ATM([a1, a2], try_limit=3)
