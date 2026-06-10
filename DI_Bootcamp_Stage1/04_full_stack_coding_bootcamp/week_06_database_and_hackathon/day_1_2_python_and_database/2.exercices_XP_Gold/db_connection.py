import psycopg2

def get_connection():
    return psycopg2.connect(
        dbname="Authentication_db",
        user="postgres",
        password="annaspirit25",
        host="localhost",
        port="5432"
    )