from django.shortcuts import render
from django.http import HttpResponse
from .models import ToDoList


def index(response):
   return render(response, "html/base.html")