from django.db import models

# Create your models here.

class Image(models.Model):
    img=models.ImageField(null=True)
    caption=models.CharField(null=True,max_length=100)
    
