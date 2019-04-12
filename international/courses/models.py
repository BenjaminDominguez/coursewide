from django.db import models

"""
Courses have many modules and modules have many lessons.z

"""

class Course(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)
    created_at = models.DateTimeField(auto_now_add=True)

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