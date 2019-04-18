from django.urls import path
from tokens.api import MyTokenObtainPairView
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    path('api/auth/token/obtain/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/auth/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh')
]
