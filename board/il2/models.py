from django.db import models

# Create your models here.

class Meta(models.Model):
	
	plane = models.CharField('Name of Plane', max_length=140)
	takeoff = models.CharField('Takeoff Speed', max_length=140)
	glideslope = models.CharField('Glideslope Speed', max_length=140)
	landing = models.CharField('Landing Speed', max_length=140)
	dive = models.CharField('Dive Speed Limit', max_length=140)

	def __str__(self):
        return self.plane