from django.contrib import admin
from .models import Resume

class ResumeAdmin(admin.ModelAdmin):  # add this
  list_display = (
      'first_name', 
      'last_name', 
      'email',
      'phone',
      'skills',
      'project1',
      'project2',
      'project3',
      'job1',
      'job2',
      'job3',
      'education'
    ) 

# Register your models here.
admin.site.register(Resume, ResumeAdmin) 
