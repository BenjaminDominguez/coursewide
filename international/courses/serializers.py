from rest_framework import serializers
from courses.models import Course, Module, Language

class ModuleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Module
        fields = ['id', 'order', 'name']

class CourseSerializer(serializers.ModelSerializer):

    modules = ModuleSerializer(many=True)

    languages_supported = serializers.StringRelatedField(
        many=True
    )

    class Meta:
        model = Course
        fields = '__all__'

class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = '__all__'