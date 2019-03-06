#Team JDaughters
#Hui Min Wu and Sophia Xia
#SoftDev2 pd08
#K07 -- Import.Export Bank
#2019-03-01

'''
This dataset contained pokemon with
their various attributes like
 - num
 - name
 - height
 - weight
 - type
 - weakness
 - spawn chance

Raw data lives here: https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json

Import mechanism:
 - Remove the beginning '{pokemon' and end '}' so the json file starts and ends with [] respectively
    - This is because insert_many relies on there to be multiple ids to enumerate and with pokemon originally as the top more attribute, the insert_many will break
'''

import pymongo
import json
SERVER_ADDR = "127.0.0.1"
connection = pymongo.MongoClient(SERVER_ADDR)
db = connection.test
collection = db.jdaughters

with open('pokedex.json', 'r') as f:
    data = json.load(f)

#inserts multiple id sets of pokemon
x = collection.insert_many(data)

#for debugging
#print(x.inserted_ids)

#finds all pokemon with a certain number
def find_num(num):
    pokemon = collection.find({"num":num})
    print(list(pokemon))
find_num("001")

#All pokemon with a specified height and weight
def h_n_w(height, weight):
    height = str(height) + " m"
    weight = str(weight) + " kg"
    pokemon = collection.find({"$and":[{"height":height}, {"weight":weight}]})
    print(list(pokemon))

h_n_w(0.99, 13.0)

#All pokemon with a type and a spawn chance less than a number
def type_n_spawn(type, spawn):
    pokemon = collection.find({"$and":[{"type":type}, {"spawn":{"$lt":spawn}}]})
    print(list(pokemon))

type_n_spawn("Grass", 0.05)
