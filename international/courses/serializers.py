from rest_framework import serializers
from courses.models import Course, Module
from users.models import User, Teacher
from django.shortcuts import get_object_or_404

class ModuleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Module
        fields = ['id', 'order', 'name']

class CourseSerializer(serializers.ModelSerializer):

    modules = ModuleSerializer(many=True, read_only=True)

    class Meta:
        model = Course
        fields = ['name', 'description', 'bio', 'modules']


