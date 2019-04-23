from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from tokens.serializers import MyTokenObtainPairSerializer
from rest_framework.decorators import action
from rest_framework.generics import GenericAPIView

class MyTokenObtainPairView(TokenObtainPairView):

    serializer_class = MyTokenObtainPairSerializer

### Token Blacklist