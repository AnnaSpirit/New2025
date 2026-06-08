# menu_editor.py

from menu_item import MenuItem
from menu_manager import MenuManager


def show_user_menu():
    print("\n===== RESTAURANT MENU MANAGER =====")
    print("(V) View an item")
    print("(A) Add an item")
    print("(D) Delete an item")
    print("(U) Update an item")
    print("(S) Show full menu")
    print("(X) Exit")


def main():

    while True:

        show_user_menu()
        choice = input("\nChoose an option: ").upper()

        # V
        if choice == "V":
            item_name = input("Enter item name to view: ")

            item = MenuManager.get_by_name(item_name)

            if item:
                print(f"{item.name} - {item.price}")
            else:
                print("Item not found ❌")

        # A
        elif choice == "A":
            item_name = input("Enter item name: ")
            item_price = input("Enter item price: ")

            # validation prix
            try:
                item_price = int(item_price)
            except ValueError:
                print("Price must be a number ❌")
                continue

            # création objet
            item = MenuItem(item_name, item_price)

            # sauvegarde DB
            if item.save():
                print("Item added successfully ✅")
            else:
                print("Error while adding item ❌")

        # D
        elif choice == "D":
            item_name = input("Enter item name to delete: ")

            item = MenuItem(item_name, 0)

            if item.delete():
                print("Item deleted successfully 🗑️✅")
            else:
                print("Error while deleting item ❌")

        # U
        elif choice == "U":
            current_name = input("Enter current item name: ")

            new_name = input("Enter new name: ")
            new_price = input("Enter new price: ")

            # validation prix
            try:
                new_price = int(new_price)
            except ValueError:
                print("Price must be a number ❌")
                continue

            item = MenuItem(current_name, 0)

            if item.update(new_name, new_price):
                print("Item updated successfully ✏️✅")
            else:
                print("Error while updating item ❌")

        # S
        elif choice == "S":
            items = MenuManager.all_items()

            if not items:
                print("Menu is empty ❌")
            else:
                print("\n===== FULL MENU =====")
                for item in items:
                    print(f"{item.name} - {item.price}")

        # X
        elif choice == "X":
            print("Goodbye 👋")
            break

        else:
            print("Invalid choice ❌")


if __name__ == "__main__":
    main()