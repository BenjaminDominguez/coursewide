from rest_framework import routers
from .api import CourseViewSet

router = routers.DefaultRouter()
router.register('api/courses', CourseViewSet, 'courses')

urlpatterns = router.urls