# menu_item.py
# Classe représentant un item du menu restaurant

import psycopg2


class MenuItem:
    def __init__(self, name, price):
        self.name = name
        self.price = price

    def _connect(self):
    # Connexion propre PostgreSQL avec UTF-8
        return psycopg2.connect(
            dbname="restaurant_db",
            user="postgres",
            password="annaspirit25",
            host="localhost",
            port="5432",
            options="-c client_encoding=UTF8"
        )

    def save(self):
        try:
            conn = self._connect()
            cursor = conn.cursor()

            query = """
            INSERT INTO Menu_Items (item_name, item_price)
            VALUES (%s, %s)
            """

            cursor.execute(query, (self.name, self.price))

            conn.commit()
            cursor.close()
            conn.close()

            return True

        except Exception as error:
            print("Error while saving item:", error)
            return False

    def delete(self):
        try:
            conn = self._connect()
            cursor = conn.cursor()

            query = """
            DELETE FROM Menu_Items
            WHERE item_name = %s
            """

            cursor.execute(query, (self.name,))

            conn.commit()
            cursor.close()
            conn.close()

            return True

        except Exception as error:
            print("Error while deleting item:", error)
            return False

    def update(self, new_name, new_price):
        try:
            conn = self._connect()
            cursor = conn.cursor()

            query = """
            UPDATE Menu_Items
            SET item_name = %s,
                item_price = %s
            WHERE item_name = %s
            """

            cursor.execute(query, (new_name, new_price, self.name))

            conn.commit()
            cursor.close()
            conn.close()

            return True

        except Exception as error:
            print("Error while updating item:", error)
            return False