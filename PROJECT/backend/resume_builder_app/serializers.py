from rest_framework import serializers
from .models import Resume


class ResumeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resume
        fields = (
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


# Jonny, add your API serializer below this line if one is needed