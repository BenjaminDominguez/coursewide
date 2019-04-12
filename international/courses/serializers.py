from rest_framework import serializers
from courses.models import Course, Module

class CourseSerializer(serializers.ModelSerializer):
    modules = serializers.StringRelatedField(
        many=True
    )

    class Meta:
        model = Course
        fields = ['id', 'name', 'description', 'modules']

class ModuleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Module
        fields = ['order', 'name']