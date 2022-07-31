
from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
def index(req):
    return render(req,'part3/index.html')

def pcOne(req):
    return render(req,'part3/pc1.html')

def pcTwo(req):
    return render(req,'part3/pc2.html')

def pcThree(req):
    return render(req,'part3/pc3.html')

def pcFour(req):
    return render(req,'part3/pc4.html')

@csrf_exempt
def cart(req):
    return render(req,'part3/cart.html')