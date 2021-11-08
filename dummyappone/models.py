from django.db import models


# class ToDoList(models.Model):
#    name = models.CharField(max_length=200)


class TableTestOne(models.Model):
   name = models.CharField(max_length=100)
   image = models.ImageField(upload_to='pics')
   description = models.TextField()
   price = models.IntegerField()
   offer = models.BooleanField(default=False)