from rest_framework import serializers
from users.models import Student, Teacher, User
from courses.models import Course
import os

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'id', 'email', 'is_student', 'is_teacher', 'password', 'country', 'language'
        ]
    
    def create(self, validated_data):
        # Do not save raw password to User model
        password = validated_data.pop('password')
        validated_data['username'] = str(os.urandom(24))
        user = User.objects.create(**validated_data)

        #Set password hash
        user.set_password(password)
        user.save()
        if validated_data.get('is_student'):
            student = Student.objects.create(user=user)
            student.save()
        elif validated_data.get('is_teacher'):
            teacher = Teacher.objects.create(user=user)
            teacher.save()

        return user
    

class StudentSerializer(serializers.ModelSerializer):

    user = UserSerializer() 
    courses_taking = serializers.HyperlinkedRelatedField(
        many=True,
        view_name='course-detail',
        queryset=Course.objects.all()
    )

    class Meta:
        model = Student
        #fields to be shown
        fields = '__all__'

    

class TeacherSerializer(serializers.ModelSerializer):

    user = UserSerializer()
    courses_instructing = serializers.HyperlinkedRelatedField(
        many=True,
        view_name='course-detail',
        queryset=Course.objects.all()
    )

    class Meta:
        model = Teacher
        fields = '__all__'

