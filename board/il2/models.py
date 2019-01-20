from django.db import models

# Create your models here.

class Meta(models.Model):
	pass

	def __str__(self):
        return self.op_name