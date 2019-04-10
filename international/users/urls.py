from rest_framework import routers
from .api import StudentViewSet, TeacherViewSet, UserViewSet

router = routers.DefaultRouter()
router.register('api/students', StudentViewSet, 'students')
router.register('api/teachers', TeacherViewSet, 'teachers')
router.register('api/users', UserViewSet, 'users')

urlpatterns = router.urls