import re
from django.shortcuts import render
from django.shortcuts import redirect
from django.contrib.auth import logout as dj_logout
from .models import Cpu,Ram, Display, HardDisk,Sound, Computer, Cart
from .forms import SignUpForm
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
# Create your views here.

def pcOne(request,id):
    computer = Computer.objects.get(id=id)
    cpus = Cpu.objects.all()
    displays =Display.objects.all()
    rams =Ram.objects.all()
    hardDisks=HardDisk.objects.all()
    sounds =Sound.objects.all()
    context ={
        'computer':computer,
        'cpus':cpus,
        'rams':rams,
        'displays':displays,
        'hardDisks' : hardDisks,
        'sounds':sounds
    }
    # components={'components':{{'computer':computer},{'cpus':cpus},{'displays':displays},{'rams':rams},{'hardisks':hardisks},{'sounds':sounds}}}
    return render(request,'part4/pc.html',context)

def index(request):

    computers = Computer.objects.filter(custom=False)
    print(request.user)
    return render(request,'part4/index.html',{'computers':computers})

def logout(request):
    dj_logout(request)
    return redirect('/part4/login')

def signUp(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            form.save()
            # username = form.cleaned_data.get('username')
            # raw_password = form.cleaned_data.get('password1')
            # user = authenticate(username=username, password=raw_password)
            # login(request, user)
            # return redirect('home')
        return redirect('/part4/login')
    else:
        form = SignUpForm()
    return render(request, 'part4/signup.html', {'form': form})

@csrf_exempt
# @login_required(login_url='/login1')
def cart(req):
    if req.method == 'POST':
        data = req.POST.items()
        data=dict(data)
        print(data['ram'])
        ram = Ram.objects.get(id=data['ram'])
        cpu = Cpu.objects.get(id=data['cpu'])
        display = Display.objects.get(id=data['monitor'])
        hardDisk = HardDisk.objects.get(id=data['hard_disk'])
        sound = Sound.objects.get(id=data['sound'])
        name = data['name']
        price= data['price']
        c = Computer(ram = ram,cpu=cpu,display=display,hardDisk=hardDisk,sound=sound,name=name,price=price,custom=True)
        c.save()
        cart = Cart(user=req.user,computer=c)
        cart.save()
        print(req.user)
        return JsonResponse({'status':True})
    carts = Cart.objects.filter(user=req.user)
    return render(req, 'part4/cart.html',{'carts':carts})

def cartLength(req):
    user = req.user 
    cart = Cart.objects.filter(user = user)
    print(len(cart))
    return JsonResponse({'length':len(cart)})

@csrf_exempt
def removeCartItem(req):
    if req.method == 'POST':
        data = req.POST.items()
        data =dict(data)
        print(data)
        id=data['id']
        # cart = Cart.objects.filter(id=id)
        # print(cart[0].computer)
        # computerId = cart[0].computer.id 
        # if (cart[0].computer.custom):
        #     Computer.objects.filter(id=computerId).delete()
        Cart.objects.filter(id=id).delete()
        return JsonResponse({'status':'ok'})
    return JsonResponse({'status':'ok'})

def feedback(req):
    return render(req,'part4/feedback.html')

def contact(req):
    return render(req,'part4/contact.html')