#Team JDaughters
#Hui Min Wu and Sophia Xia
#SoftDev2 pd08
#K07 -- Import.Export Bank
#2019-03-01

import pymongo
SERVER_ADDR = "127.0.0.1"
connection = pymongo.MongoClient(SERVER_ADDR)
db = connection.test
collection = db.jdaughters

#All restaurants in a specified borough
def find_borough(borough):
    restaurants = collection.find({"borough":borough})
    print(list(restaurants))

#All restaurants in a specified zip code
def find_zip(zipcode):
    zipcode = str(zipcode)
    restaurants = collection.find({"address.zipcode":zipcode})
    print(list(restaurants))

#All restaurants in a specified zip code and with a specified grade
def zip_n_grade(zipcode, grade):
    zipcode = str(zipcode)
    restaurants = collection.find({"$and":[{"address.zipcode":zipcode}, {"grades.grade":grade}]})
    print(list(restaurants))

#All restaurants in a specified zip code with a score below a specified threshold
def zip_n_score(zipcode, score):
    zipcode = str(zipcode)
    restaurants = collection.find({"$and":[{"address.zipcode":zipcode}, {"grades.score":{"$lt":score}}]})
    print(list(restaurants))

#FOR TESTING
#find_borough("Manhattan")
#find_zip(10001)
#zip_n_grade(10001, "A")
#zip_n_score(10001, 5)
