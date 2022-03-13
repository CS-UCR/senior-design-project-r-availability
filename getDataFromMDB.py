import pymongo
import certifi
import matplotlib.pyplot as plt
import pandas as pd

# Authentication and Connection
client = pymongo.MongoClient("mongodb+srv://ShubhamBatra:M%40gic2001@ravailability-database.dofjv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", tlsCAFile=certifi.where())
db = client['myFirstDatabase']
print("Connected Successfully to the Database")

# defining all collections
bytes_col = db['Bytes']
orbach_col = db['Orbach']
ttp_col = db['TTP']

# defining data frame for room occupancy
# *NOTE: need to limit to only last 24 entries to reflect last 6 hours*
ttp_df = pd.DataFrame(ttp_col.find())
ttp_df = ttp_df[len(ttp_df)-24:]
ttp_df = ttp_df.iloc[::4, :]


orbach_df = pd.DataFrame(orbach_col.find())
orbach_df = orbach_df[len(orbach_df)-24:]
orbach_df = orbach_df.iloc[::4, :]

bytes_df = pd.DataFrame(bytes_col.find())
bytes_df = bytes_df[len(bytes_df)-24:]
bytes_df = bytes_df.iloc[::4, :]

# adding rooms to a list
rooms = [ttp_df, orbach_df, bytes_df]

for room in rooms:
    # check if there are no entries in the df
    if len(room) > 0:
        # generate plots for current room occupancy
        plt.plot(room['time'].str[12:20],room['occupancy'])
        plt.title('Room Ocupancy: Last 6 Hours')
        plt.xlabel('Time/Date')
        plt.ylabel('Occupancy')

        # export plot as image and clear the plot
        if room.equals(ttp_df):
            plt.savefig('reactwebsite/public/ttp_occupancy.png')
            plt.clf()
        elif room.equals(orbach_df):
            plt.savefig('reactwebsite/public/orbach_occupancy.png')
            plt.clf()
        else:
            plt.savefig('reactwebsite/public/bytes_occupancy.png')
            plt.clf()

    # else if the collection is empty, create empty plot
    else:
        # generate empty plot
        plt.plot()
        plt.title('Room Ocupancy: Last 6 hours')
        plt.xlabel('Time')
        plt.ylabel('Occupancy')

        # export plot as image and clear the plot
        if room.equals(ttp_df):
            plt.savefig('reactwebsite/public/ttp_occupancy.png')
            plt.clf()
        elif room.equals(orbach_df):
            plt.savefig('reactwebsite/public/orbach_occupancy.png')
            plt.clf()
        else:
            plt.savefig('reactwebsite/public/bytes_occupancy.png')
            plt.clf()


