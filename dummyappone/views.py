from django.shortcuts import render
from django.http import HttpResponse
# from .models import ToDoList
from .models import TableTestOne


def index(response):
   return render(response, "html/base.html")