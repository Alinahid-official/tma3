
from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
def index(req):
    return render(req,'part3/index.html')

def pcOne(req):
    return render(req,'part3/pc.html')

@csrf_exempt
def cart(req):
    if req.method == 'POST':
        data= req.POST.items()
        data=dict(data)
        req.session['carts'] =[data]
        return JsonResponse({'status':True})
    carts = req.session['carts']
    print(carts)
    return render(req,'part3/cart.html',{'carts':carts})