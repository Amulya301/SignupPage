from pyexpat.errors import messages
from django.http import HttpResponse
from django.shortcuts import redirect, render
from .models import MyModel
from django.forms import modelform_factory
from django.core.exceptions import ValidationError
from django.contrib.messages.api import success
from django.contrib import messages
# Create your views here.

userform = modelform_factory(MyModel, exclude=[])
def home(request):
    return HttpResponse('hello')



def signup(request):

    if request.method == "POST":

        details = userform(request.POST)
        if details.is_valid():
           details.save()
           return HttpResponse('User details has been submitted successfully')
        else:
            form = userform()
            print('User already exists')
            return render(request,'signup/signup.html',{
                "form" : form
            })
    else:
        form = userform()
        return render(request,'signup/signup.html',{
            "form" : form
        })
