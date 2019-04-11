from users.models import Student, Teacher, User
from courses.models import Course
from rest_framework import viewsets, permissions, generics
from rest_framework.response import Response
from knox.models import AuthToken
from rest_framework.decorators import action
from django.shortcuts import get_object_or_404
from .serializers import StudentSerializer, TeacherSerializer, UserSerializer, LoginUserSerializer

class StudentViewSet(viewsets.ModelViewSet):

    queryset = Student.objects.all()

    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = StudentSerializer

    #create route '/api/students/{pk}/add_course/?course_id=10
    @action(detail=True, methods=['post'])
    def add_course(self, request, pk=None):
        student = self.get_object()
        course_id = request.data["course_id"]
        course_obj = get_object_or_404(Course, course_id)
        student.add_course(course_obj)
        student.save()
        return Response({'status': 'Course added'})


class TeacherViewSet(viewsets.ModelViewSet):

    queryset = Teacher.objects.all()

    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = TeacherSerializer

class UserViewSet(viewsets.ModelViewSet):
    
    queryset = User.objects.all()

    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = UserSerializer

    def get_object(self):
        pass


    #api/users/check_email/?email="bendominguez"
    #This should be changed to validate all of the credentials
    @action(detail=False, methods=['POST'])
    def check_email(self, request):
        email_posted = request.data["email"]
        email_exists = User.objects.filter(email=email_posted).count()
        return Response({"email_exists": email_exists is not 0})

    @action(detail=False, methods=['POST'])
    def login_user(self, request):
        """ In the frontend, we first ask the user to give a username and password 
        but later give them the option to use a username or password to sign in
        assuming most users would use an email, we can achieve this by searching for a user based off the email provided """

        serializer = LoginUserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        #calls the validate method, I'm assuming
        user = serializer.validated_data

        instance, token = AuthToken.objects.create(user)

        return Response({
            "user": UserSerializer(user).data,
            "token": token
        })