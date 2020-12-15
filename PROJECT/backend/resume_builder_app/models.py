from django.db import models


class Resume(models.Model):

    ''' Simple Resume Model for use with the PDF
    builder '''

    first_name = models.CharField(max_length=60)
    last_name = models.CharField(max_length=60)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=45)
    skills = models.TextField()
    project1 = models.TextField(blank=True, null=True)
    project2 = models.TextField(blank=True, null=True)
    project3 = models.TextField(blank=True, null=True)
    job1 = models.TextField(blank=True, null=True)
    job2 = models.TextField(blank=True, null=True)
    job3= models.TextField(blank=True, null=True)
    education = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    @property
    def full_name(self):
        return f"{self.first_name} {self.last_name} - Resume"
