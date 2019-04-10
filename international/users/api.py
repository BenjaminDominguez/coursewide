from users.models import Student, Teacher, User
from courses.models import Course
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from rest_framework.decorators import action
from django.shortcuts import get_object_or_404
from .serializers import StudentSerializer, TeacherSerializer, UserSerializer

class StudentViewSet(viewsets.ModelViewSet):

    queryset = Student.objects.all()

    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = StudentSerializer

    #create route '/api/students/{pk}/add_course/{course_pk}
    @action(detail=True, methods=['post'])
    def add_course(self, request, pk=None):
        student = self.get_object()
        course_pk = int(request.data)
        course_obj = get_object_or_404(Course, course_pk)
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

    #api/users/check_email/?email="bendominguez"
    @action(detail=False, methods=['GET', 'POST'])
    def check_email(self, request):
        email_posted = request.data["email"]
        email_exists = User.objects.filter(email=email_posted).count()
        return Response({"email_exists": email_exists is not 0})