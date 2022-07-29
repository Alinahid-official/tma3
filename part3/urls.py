from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from part3 import views
from django.urls.conf import include


urlpatterns = [
    path('', views.index),
    path('pc_one/', views.pcOne),
    path('cart/', views.cart),
]