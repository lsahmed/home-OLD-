import pymongo
from bson.objectid import ObjectId
import base64
import os

url = "mongodb+srv://contrailpy:contrailpy@cluster0.xpysx.mongodb.net/"
client = pymongo.MongoClient(url)
db = client['portfolio']

# <--- Skills Collection Management -->
skills = db['skills']

# <-- projects Collection Management -->
projects = db['projects']
project = list(projects.find())

filter = {"_id":ObjectId('672790caff384ce856517e51')}
update = {
    "$set": {
        "git": "https://github.com/lsahmed/contrail"
    }
}
result = projects.update_one(filter ,update)


if result.modified_count > 0:
    print(f'Document with ID  updated successfully.')
else:
    print(f'No document found with ID  or no changes made.')







