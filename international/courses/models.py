from django.db import models

"""
Courses have many modules and modules have many lessons.z

"""

class Language(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Course(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)
    created_at = models.DateTimeField(auto_now_add=True)
    languages_supported = models.ManyToManyField(Language, blank=True)

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

