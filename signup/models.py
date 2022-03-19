from django.db import models

# Create your models here.
from django.db import models


class MyModel(models.Model):
    first_name = models.CharField(max_length=200, unique=True)
    last_name = models.CharField(max_length=200, unique=True)
    email = models.EmailField(unique=True)
    date_of_birth = models.DateField(unique=True)
