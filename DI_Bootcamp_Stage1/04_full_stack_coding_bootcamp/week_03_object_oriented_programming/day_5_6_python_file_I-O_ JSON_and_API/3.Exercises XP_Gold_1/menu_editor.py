# -*- coding: utf-8 -*-
"""
Interface « front-office » : affiche le menu d’options et interagit
avec l’utilisateur (entrée clavier). Zéro connaissance du JSON interne !
"""

from menu_manager import MenuManager

# ----------- Fonctions « UI » ----------- #

def load_manager() -> MenuManager:
    """Instancie et retourne un gestionnaire de menu."""
    return MenuManager()


def show_user_menu(manager: MenuManager) -> None:
    """Boucle principale : affiche les choix et route l’action."""
    actions = {
        "1": add_item_to_menu,
        "2": remove_item_from_menu,
        "3": show_restaurant_menu,
        "4": exit_program
    }

    while True:
        print("\n🧑‍🍳  ** Exercise Menu Manager **")
        print("1. Add an item")
        print("2. Remove an item")
        print("3. Show restaurant menu")
        print("4. Save & Exit")

        choice = input("👉  Your choice: ").strip()
        action = actions.get(choice)
        if action:
            action(manager)
        else:
            print("⚠️  Invalid choice, try again.")


def add_item_to_menu(manager: MenuManager) -> None:
    """Demande nom & prix, puis délègue à MenuManager."""
    name = input("🍽️  Item name: ").strip()
    price_str = input("💰 Price (e.g. 12.5): ").strip()

    try:
        price = float(price_str)
    except ValueError:
        print("❌  Price must be a number.")
        return

    manager.add_item(name, price)
    print("✅  Item added successfully!")


def remove_item_from_menu(manager: MenuManager) -> None:
    """Demande le plat à retirer, délègue à MenuManager."""
    name = input("❌  Item name to remove: ").strip()
    if manager.remove_item(name):
        print("🗑️  Item removed successfully!")
    else:
        print("😕  Item not found, nothing deleted.")


def show_restaurant_menu(manager: MenuManager) -> None:
    """Affiche élégamment le menu actuel."""
    if not manager.menu:
        print("🚫  The menu is empty.")
        return

    print("\n----- Restaurant Menu -----")
    for item in manager.menu:
        print(f"{item['name']:20} ... {item['price']:>6.2f}₪")
    print("---------------------------")


def exit_program(manager: MenuManager) -> None:
    """Sauvegarde, informe l’utilisateur, puis sort."""
    manager.save_to_file()
    print("💾  Menu saved. Goodbye!\n")
    raise SystemExit


# ----------- Point d’entrée ----------- #

if __name__ == "__main__":
    show_user_menu(load_manager())

