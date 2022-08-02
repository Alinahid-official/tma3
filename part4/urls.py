from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from part4 import views
from django.urls.conf import include
from django.contrib.auth import views as auth_views


urlpatterns = [
    path('', views.index),
    path('pc_one/<int:id>', views.pcOne),
    path('signup/', views.signUp),
    path('cart/', views.cart),
    path('cartLength/', views.cartLength),
    path('removeCartItem/', views.removeCartItem),
    path('logout/', views.logout),
    path('login/', auth_views.LoginView.as_view()),
]