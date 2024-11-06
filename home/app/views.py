from django.shortcuts import render
from db_connection import skills, project

# Create your views here.
def home(request):
    skillset = ""
    whole_ = skills.find()
    for skill in whole_:
        skillset = skill['myskills'].split(',')

    return render(request, 'index.html', {"skillset": skillset, "project": project})