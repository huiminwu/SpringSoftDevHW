'''
Team Stanford Marshmallows - Johnny Wong, Daniel Keriazis, Hui Min Wu
SoftDev2 pd8
K#07 -- Import/Export Bank
2019-03-05
'''

'''
Pokedex Database

Contains the following information of Pokemon:
id
names in English, Japanese, and Chinese
type
base stats: (HP, Attack, Defense, Sp. Attack, Sp. Defense, Speed)

Raw data: https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json

Import directions:
Attach the '--jsonArray' flag when importing
Example:
mongoimport --db DB_NAME --collection COLLECTION_NAME --drop --jsonArray --file PATH/TO/pokedex.json
'''

import pymongo

SERVER_ADDR = "142.93.206.174:27017" # Johnny's DO Droplet
connection = pymongo.MongoClient(SERVER_ADDR)
db = connection.AppleWineDex
collection = db.pokedex

def pokemon_type(type):
    '''
    Return query of Pokemon with <type>
    '''
    poke_dict = {'pokemon': '', 'id': 0, 'type': [], 'stats': {} }
    for pokemon in collection.find({'type': {'$in': [type]}}):
        poke_dict['pokemon'] = pokemon['name']['english']
        poke_dict['id'] = pokemon['id']
        poke_dict['type'] = pokemon['type']
        poke_dict['stats'] = pokemon['base']
        print(poke_dict)
        print()

def pokemon_name(name):
    '''
    Return query of Pokemon with <name>
    '''
    poke_dict = {'pokemon': '', 'id': 0, 'type': [], 'stats': {} }
    for pokemon in collection.find({'name.english': name}):
        poke_dict['pokemon'] = pokemon['name']['english']
        poke_dict['id'] = pokemon['id']
        poke_dict['type'] = pokemon['type']
        poke_dict['stats'] = pokemon['base']
        print(poke_dict)
        print()

def pokemon_id(upper, lower=1):
    '''
    Return query of Pokemon with id in the range from [lower, upper]
    '''
    poke_dict = {'pokemon': '', 'id': 0, 'type': [], 'stats': {} }
    for pokemon in collection.find({'$and': [{'id': {'$gte': lower}}, {'id': {'$lte': upper}}] }):
        poke_dict['pokemon'] = pokemon['name']['english']
        poke_dict['id'] = pokemon['id']
        poke_dict['type'] = pokemon['type']
        poke_dict['stats'] = pokemon['base']
        print(poke_dict)
        print()

def pokemon_stat(stat, value):
    '''
    Return query of Pokemon with <stat> with a value >= to <value>
    '''
    poke_dict = {'pokemon': '', 'id': 0, 'type': [], 'stats': {} }
    for pokemon in collection.find({'base.{0}'.format(stat): {'$gte': value}}):
        poke_dict['pokemon'] = pokemon['name']['english']
        poke_dict['id'] = pokemon['id']
        poke_dict['type'] = pokemon['type']
        poke_dict['stats'] = pokemon['base']
        print(poke_dict)
        print()



# TESTS
print('Query for Grass type Pokemon')
pokemon_type('Grass')
print('------------------------------')
print('Query for Dragonite')
pokemon_name('Dragonite')
print('------------------------------')
print('Query for Pokemon with HP >= 50')
pokemon_stat('HP', 50)
print('------------------------------')
print('Query for Pokemon up to #381')
pokemon_id(381)
