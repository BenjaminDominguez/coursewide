from rest_framework import serializers
from users.models import Student, Teacher, User
from courses.models import Course
import os

class LoginUserSerializer(serializers.Serializer):
    """Seperate serializer for login purposes,
    no longer using emails to log in users, too complicated.
    Will be using usernames
    """

    username, password = serializers.CharField(), serializers.CharField()

    def validate(self, data):
        
        user = User.objects.filter(email=data["email"]).first()

        password_check = user.check_password(data["password"])
        
        #authenticate function wasnt working so I did this the flask way
        if user is not None and password_check:
            return user
        else:
            raise serializers.ValidationError("Unable to login with given credentials")

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'id', 'username', 'password', 'email', 'is_student', 'is_teacher', 'country', 'language'
        ]
    
    def create(self, validated_data):
        # Do not save raw password to User model
        """
        Create User class for each user, and create a student object if
        is_student is provided as true. And create a teacher object if 
        is_teacher is provided as true.
        For now, student classes and teacher classes are differentiated 
        from each based on courses_taken and courses_instructing.

        """

        password = validated_data.pop("password")
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

