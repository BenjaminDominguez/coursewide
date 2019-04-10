from django.db import models
from django.contrib.auth.models import AbstractUser
from courses.models import Course
import os

# Create your models here.
class User(AbstractUser):
    is_student = models.BooleanField(default=False)
    is_teacher = models.BooleanField(default=False)
    email = models.EmailField(max_length=254)
    country = models.CharField(max_length=254, blank=True)
    language = models.CharField(max_length=254, blank=True)

class Student(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    courses_taking = models.ManyToManyField(Course, blank=True)

    def add_course(self, course_obj):
        self.courses_taking.add(course_obj)

class Teacher(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    courses_instructing = models.ManyToManyField(Course, blank=True)