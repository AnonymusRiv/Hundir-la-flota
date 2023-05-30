import psycopg2
from django.db import DatabaseError

param = {
    "host": "172.16.8.1",
    "port": "5432",
    "user": "postgres",
    "password": "postgres1234",
    "database": "postgres"
}

#Query to insert user data in BD
def registerFunction(name, email, password):
    try: 
        connection = psycopg2.connect(**param)
        cur = connection.cursor()
        cur.execute("INSERT INTO Usuario (email, name, surname, type, birthday, password) values (%s, %s, %s, %s, %s, %s)", (email, name, "Cruz Iglesias", "admin", "2002-08-15", password))
        cur.close()
        connection.commit()
        connection.close()
        return True
    except DatabaseError as e :
        return e
    
#Query to check user validation
def loginFunction(email, password):
    connection = psycopg2.connect(**param)
    cur = connection.cursor()
    cur.execute("SELECT * FROM Usuario Where email = %s AND password = %s", (email, password))
    user = cur.fetchall()
    cur.close()
    connection.commit()
    connection.close()
    return user

#Query to receive all stats info
def obtainStadisticsFunction(email):
    connection = psycopg2.connect(**param)
    cur = connection.cursor()
    cur.execute("SELECT * FROM game WHERE user_id = %s", (email))
    stats = cur.fetchall()
    cur.close()
    connection.commit()
    connection.close()
    return stats

#Query to obtain all user info
def obtainUserInformation():
    connection = psycopg2.connect(**param)
    cur = connection.cursor()
    cur.execute("SELECT * FROM usuario")
    info = cur.fetchall()
    connection.commit()
    connection.close()
    return info