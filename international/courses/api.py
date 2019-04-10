from courses.models import Course
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from rest_framework.decorators import action
from .serializers import CourseSerializer
from django.shortcuts import get_object_or_404

#viewsets go here

""" 
    Viewsets work by defining three things:
    The query set from the model
    The Permission classes
    The serializer class
"""
class CourseViewSet(viewsets.ModelViewSet):

    queryset = Course.objects.all()

    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = CourseSerializer

    @action(detail=False)
    def most_recent(self, request):
        courses = self.queryset.order_by('-created_at')[0:3]
        serializer = self.serializer_class(courses, many=True)
        return Response(serializer.data)


