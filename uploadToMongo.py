# This script if for testing purposes. Goal is to write multiple mock entries into MongoDB and 
# to be able to delete any number of entries from the MongoDB database.
# Make sure install packages [pymongo, dnspython, and certifi] before using
import pymongo
import certifi
import random
import datetime

# Authentication and Connection
client = pymongo.MongoClient("mongodb+srv://ShubhamBatra:M%40gic2001@ravailability-database.dofjv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", tlsCAFile=certifi.where())
db = client['myFirstDatabase']
print("Connected Successfully to the Database")

# Defining all collections
BytesCol = db['Bytes']
OrbachCol = db['Orbach']
TTPCol = db['TTP']

# User Choices
print("Test program, what would you like to do?")
print("(1): Add data to database")
print("(2): Remove data from the database")
userChoice = input("")
userChoiceInt = int(userChoice)

# For adding into database (Option 1)
if userChoiceInt==1:
    # User Interaction
    number = input("Hello, currently you can add any number of entries. How many entries would you like to add?: ")
    numberint = int(number)
    # Want to make sure user is aware if they are entering more than 5 entries
    if numberint > 5:
        choice = input("You have choosen to enter in more than 5 entries. Are you sure about this? (y/n): ")
        if choice=="y":
            print("Entering in ", numberint, " entries")
        else:
            print("Breaking program")
            exit()
    room = input("Which room? (Bytes, Orbach, TTP) Make sure to type in exactly: ")

    # To get current time
    today = datetime.datetime.now()
    date_time = today.strftime("%m/%d/%Y, %H:%M:%S")

    # Keping track # of times while-loop happens
    counter = 0

    while counter < numberint:
        # Random integers
        randomOccupancy = random.randint(1,100)

        doc_obj = {
                "occupancy": randomOccupancy,
                "seats":100,
                "time": date_time
                }

        if room=="Bytes":
            rec_id1 = BytesCol.insert_one(doc_obj)
        elif room=="Orbach":
            rec_id1 = OrbachCol.insert_one(doc_obj)
        elif room=="TTP":
            rec_id1 = TTPCol.insert_one(doc_obj)
        else:
            print('Nothing added')
        counter+=1
    print("Added " , numberint, " entry(s) into the database", room)

# For removing entries from the database (Option 2)
if userChoiceInt==2:
    room = input("Which room would you like to delete entries from? Type room name in exactly. (Bytes, Orbach, TTP): ")
    deleteType = input("Would you like to delete all entries (a) or certain ones? (b): ")

    # To remove all entries
    if deleteType=="a":
        userCheck = input("Are you sure you want to delete all entries? (y/n): ")
        if userCheck == "y":
            if room=="Bytes":
                BytesCol.delete_many({'seats': 100})
            elif room=="Orbach":
                OrbachCol.delete_many({'seats': 100})
            elif room=="TTP":
                TTPCol.delete_many({'seats': 100})
            else:
                print('Nothing removed')
            print("All entries removed")
        else:
            print("Exiting program")
            exit()
    # Remove certain amount of entries 
    if deleteType=="b":
        numToDel = input("How many entries would you like to delete?: ")
        intNumToDel = int(numToDel)
        if room=="Bytes":
            for x in range(intNumToDel):
                BytesCol.delete_one({'seats': 100})
        elif room=="TTP":
            for x in range(intNumToDel):
                TTPCol.delete_one({'seats': 100})
        elif room=="Orbach":
            for x in range(intNumToDel):
                OrbachCol.delete_one({'seats': 100})
        else:
            print("Exiting Program")
            exit()
    print("Removed " , intNumToDel, " entry(s) from the database", room)




