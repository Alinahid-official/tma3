from django.shortcuts import render
from .models import Image

# Create your views here.
def index(req):
    images = Image.objects.all()
    return render(req, 'part2index.html',{'images':images})