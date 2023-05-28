import psycopg2

param = {
    "host": "172.16.8.1",
    "port": "5432",
    "user": "postgres",
    "password": "postgres1234",
    "database": "postgres"
}

def registerFunction(name, email, password):
    connection = psycopg2.connect(**param)
    cur = connection.cursor()
    cur.execute("INSERT INTO Usuario (email, name, surname, type, birthday, password) values (%s, %s, %s, %s, %s, %s)", (email, name, "Cruz Iglesias", "admin", "2002-08-15", password))
    cur.close()
    connection.commit()
    connection.close()

def loginFunction(email, password):
    connection = psycopg2.connect(**param)
    cur = connection.cursor()
    cur.execute("SELECT email, password FROM Usuario Where email = %s AND password = %s", (email, password))
    user = cur.fetchall()
    cur.close()
    connection.commit()
    connection.close()
    return user