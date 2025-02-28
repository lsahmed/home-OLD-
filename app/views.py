from django.shortcuts import render
from db_connection import skills, projects

# Create your views here.
def home(request):
    skillset = skills.find()

    modules = {
    "projects": projects,
    "frontend" : skillset[1].get('frontend'),
    "backend" : skillset[2].get('backend'),
    "database" : skillset[3].get('database'),
    "devops" : skillset[4].get('devops'),
    "tools" : skillset[5].get('tools'),
    }


    return render(request, 'index.html', modules)