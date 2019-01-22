from django.db import models

# Create your models here.

class Plane(models.Model):
    
    plane = models.CharField('Name of Plane', max_length=140)

    takeoff = models.CharField('Takeoff Speed', max_length=140)
    glideslope = models.CharField('Glideslope Speed', max_length=140)
    landing = models.CharField('Landing Speed', max_length=140)

    dive = models.CharField('Dive Speed Limit', max_length=140)
    supercharger = models.CharField('Supercharger', max_length=140)
    fuel_load = models.CharField('Fuel Load', max_length=140)
    endurance = models.CharField('Flight Endurance', max_length=140)

    turn_sea = models.CharField('Maximum performance turn at sea level', max_length=140)
    turn_3k = models.CharField('Maximum performance turn at 3000 m', max_length=140)

    climb_sea = models.CharField('Climb rate at sea level', max_length=140)
    climb_3k = models.CharField('Climb rate at 3000 m', max_length=140)
    climb_6k = models.CharField('Climb rate at 6000 m', max_length=140)

    stall_flight = models.CharField('Indicated stall speed in flight configuration', max_length=140)
    stall_landing = models.CharField('Indicated stall speed in takeoff/landing configuration', max_length=140)

    def __str__(self):
        return self.plane

class Features(models.Model):
    
    op_plane = models.ForeignKey(Plane, on_delete=models.CASCADE,verbose_name="Plane Name")
    note = models.TextField('Note', max_length=2000)

    def __str__(self):
        return self.op_plane


class Engine(models.Model):
    
    eng_plane = models.ForeignKey(Plane, on_delete=models.CASCADE,verbose_name="Plane Name")
    note = models.TextField('Note', max_length=2000)

    def __str__(self):
        return self.eng_plane

