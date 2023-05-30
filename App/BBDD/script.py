#import psycopg2
#
#param = {
#    "host": "172.16.8.1",
#    "port": "5432",
#    "user": "postgres",
#    "password": "postgres1234",
#    "database": "postgres"
#}
#connection = psycopg2.connect(**param)
#cur = connection.cursor()
#
#
##cur.execute("CREATE TYPE userType AS ENUM ('admin', 'normal')")
##cur.execute("CREATE TYPE shipSize AS ENUM ('small', 'medium', 'large')")
#
##Creating table User
##cur.execute("CREATE TABLE IF NOT EXISTS Usuario (email varchar PRIMARY KEY, name varchar NOT NULL, surname varchar NOT NULL, type userType NOT NULL, birthday date NOT NULL, password varchar NOT NULL)")
#
##Creating table Estatadistics
##cur.execute("CREATE TABLE IF NOT EXISTS Estadistics (id serial PRIMARY KEY, game_id integer NOT NULL, FOREIGN KEY (game_id) REFERENCES game(id))")
#
##Creating table Game
#
##cur.execute("CREATE TABLE IF NOT EXISTS game (id serial PRIMARY KEY, user_id varchar NOT NULL, numberClicksSucces integer, numberClicksTotal integer, win boolean NOT NULL, FOREIGN KEY (user_id) REFERENCES usuario(email))")
#
##Inserting a test user
##cur.execute("INSERT INTO Usuario (email, name, surname, type, birthday, password) values (%s, %s, %s, %s, %s, %s)", ("i02perlr@uco.es", "Rafael", "Pérez López", "admin", "2002-08-15", "123456789"))
#
##cur.execute("INSERT INTO game (id, user_id, numberClicksSucces, numberClicksTotal, win) values (%s, %s, %s, %s, %s)", ("1", "i02perlr@uco.es", "32", "45", "True"))
#
#
#cur.execute("SELECT * FROM usuario")
#res=cur.fetchall()
#
#print("USUARIO")
#for fila in res:
#    print(fila)
#
#print()
#
#cur.close()
#connection.commit()
#connection.close()
#
##cur.execute("CREATE TABLE IF NOT EXISTS lends (id serial PRIMARY KEY, book_id integer NOT NULL, user_id varchar NOT NULL, lend_date date NOT NULL, max_date date NOT NULL, dev_date date, FOREIGN KEY (book_id) REFERENCES book(id), FOREIGN KEY (user_id) REFERENCES users(email))")
#