from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Cpu(models.Model):
    name=models.CharField(null=True, max_length=100)
    short_name=models.CharField(null=True,max_length=100)
    price=models.CharField(null=True,max_length=100)

class Ram(models.Model):
    name=models.CharField(null=True,max_length=100)
    short_name=models.CharField(null=True,max_length=100)
    price=models.CharField(null=True,max_length=100)

class Display(models.Model):
    name=models.CharField(null=True,max_length=100)
    short_name=models.CharField(null=True,max_length=100)
    price=models.CharField(null=True,max_length=100)

class HardDisk(models.Model):
    name=models.CharField(null=True,max_length=100)
    short_name=models.CharField(null=True,max_length=100)
    price=models.CharField(null=True,max_length=100)

class Sound(models.Model):
    name=models.CharField(null=True,max_length=100)
    short_name=models.CharField(null=True,max_length=100)
    price=models.CharField(null=True,max_length=100)


class Computer(models.Model):
    # user= models.ForeignKey(User,on_delete=models.CASCADE,null=True)
    img = models.ImageField(null = True)
    name = models.CharField(null=True,max_length=100)
    cpu = models.ForeignKey(Cpu, on_delete=models.CASCADE,null=True)
    ram = models.ForeignKey(Ram, on_delete=models.CASCADE,null=True)
    display = models.ForeignKey(Display, on_delete=models.CASCADE,null=True)
    hardDisk = models.ForeignKey(HardDisk, on_delete=models.CASCADE,null=True)
    sound= models.ForeignKey(Sound, on_delete=models.CASCADE,null=True)
    custom = models.BooleanField(null=True,default=False)
    price = models.CharField(null=True,max_length=100)
    

class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE,null=True)
    computer= models.ForeignKey(Computer, on_delete=models.CASCADE,null=True)
    
