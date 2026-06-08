# menu_manager.py

from menu_item import MenuItem
import psycopg2


class MenuManager:

    @staticmethod
    def _connect():
        # Connexion propre PostgreSQL
        return psycopg2.connect(
            dbname="restaurant_db",
            user="postgres",
            password="annaspirit25",
            host="localhost",
            port="5432",
            options="-c client_encoding=UTF8"
        )

    @classmethod
    def all_items(cls):

        try:
            conn = cls._connect()
            cursor = conn.cursor()

            cursor.execute("""
            SELECT item_name, item_price
            FROM Menu_Items
            """)

            results = cursor.fetchall()

            cursor.close()
            conn.close()

            items_list = []

            for row in results:
                item = MenuItem(row[0], row[1])
                items_list.append(item)

            return items_list

        except Exception as error:
            print(f"Database error: {error}")
            return []