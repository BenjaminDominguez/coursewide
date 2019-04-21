from django.db import models

"""
Courses have many modules

"""

class Course(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)
    bio = models.CharField(max_length=10000)
    image = models.ImageField(upload_to=None, height_field=None, width_field=None, max_length=None)
    teacher = models.ForeignKey('users.Teacher', related_name='courses_teaching', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    #modules relationship described under Module class
    #students relationship described under Student class

    def add_language(self, language_obj):
        self.languages_supported.add(language_obj)

    def __str__(self):
        return str(self.name)

class Module(models.Model):
    name = models.CharField(max_length=1000)
    course = models.ForeignKey(Course, related_name='modules', on_delete=models.CASCADE)
    order = models.IntegerField()

    class Meta:
        unique_together = ('name', 'order')
        ordering = ['order']

    def __str__(self):
        return 'Module ' + str(self.order) + ': ' + str(self.name)

class Lesson(models.Model):
    name = models.CharField(max_length=1000)
    module = models.ForeignKey(Course, on_delete=models.CASCADE)

