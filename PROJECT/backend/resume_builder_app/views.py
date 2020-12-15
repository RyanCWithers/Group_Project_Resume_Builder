from django.shortcuts import render
from rest_framework import viewsets          
from .serializers import ResumeSerializer      
from .models import Resume


class ResumeView(viewsets.ModelViewSet):       
  serializer_class = ResumeSerializer          
  queryset = Resume.objects.all() 