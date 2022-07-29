from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from home import views

urlpatterns = [
    path('', views.index, name='index'),
    path('architecture/', views.architecture, name='index'),
    path('part1doc/', views.part1Doc, name='part1Doc'),
    path('part2doc/', views.part2Doc, name='part2Doc'),
    path('part3doc/', views.part3Doc, name='part3Doc'),
    path('part4doc/', views.part4Doc, name='part4Doc')
]