from courses.models import Course, Module
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from rest_framework.decorators import action
from .serializers import CourseSerializer, ModuleSerializer
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

    #create a url routing /api/courses/{pk}/add_module/?name={}&?description={}
    @action(detail=True, methods=['POST'])
    def add_module(self, request, pk=None):
        module_serializer = ModuleSerializer(data=request.data)
        module_serializer.is_valid(raise_exception=True)

        module = module_serializer.validated_data

        course = get_object_or_404(Course, pk=pk)

        new_module = Module.objects.create(order=module["order"], name=module["name"], course=course) 

        return Response(new_module.__str__(), status=201)

    @action(detail=True, methods=['POST'])
    def add_language_support(self, request, pk=None):
        language_serializer = LanguageSerializer(data=request.data)
        language_serializer.is_valid(raise_exception=True)
        language_data = language_serializer.validated_data
        language = Language.objects.filter(**language_data)
        if language is None:
            language = Language.objects.create(**language_data)
            language.save()

        course = get_object_or_404(Course, pk=pk)
        course.add_language(language)

        serializer = self.serializer_class(course)

        return Response(serializer.data, status=201)


        



