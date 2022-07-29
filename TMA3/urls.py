"""TMA3 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from django.conf.urls.static import static
from django.conf import settings
from home import views as hv
from part1 import views as p1v
from part2 import views as p2v
# from part3 import views as p3v

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',hv.index),
    path('part1/',p1v.index),
    path('part2/',p2v.index),
    path('part3/',include('part3.urls')),
    path('part4/',include('part4.urls')),
    path('documentation/',include('home.urls'))
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
