from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin', admin.site.urls),
    path('', include('courses.urls')),
    path('', include('users.urls')),
    #JWT token url patterns
    path('', include('tokens.urls'))
]
