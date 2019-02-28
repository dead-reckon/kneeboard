from django.db import models

# Create your models here.

class Plane(models.Model):
    
    plane = models.CharField('Name of Plane', max_length=140, default="")

    takeoff = models.CharField('Takeoff Speed', max_length=140, default="")
    glideslope = models.CharField('Glideslope Speed', max_length=140, default="")
    landing = models.CharField('Landing Speed', max_length=140, default="")

    turn_sea = models.CharField('Maximum performance turn at sea level', max_length=140, default="")
    turn_3k = models.CharField('Maximum performance turn at 3000 m', max_length=140, default="")

    climb_sea = models.CharField('Climb rate at sea level', max_length=140, default="")
    climb_3k = models.CharField('Climb rate at 3000 m', max_length=140, default="")
    climb_6k = models.CharField('Climb rate at 6000 m', max_length=140, default="")

    stall_flight = models.CharField('Indicated stall speed in flight configuration', max_length=140, default="")
    stall_landing = models.CharField('Indicated stall speed in takeoff/landing configuration', max_length=140, default="")

    debut = models.CharField('Combat Debut', max_length=140, default="")
    ceiling = models.CharField('Service ceiling', max_length=140, default="")
    dive = models.CharField('Dive Speed Limit', max_length=140, default="")
    supercharger = models.CharField('Supercharger', max_length=140, default="")
    fuel_load = models.CharField('Fuel Load', max_length=140, default="")
    endurance = models.CharField('Flight Endurance', max_length=140, default="")
    empty_weight = models.CharField('Empty weight', max_length=140, default="")
    min_weight = models.CharField(r'Minimum weight (no ammo, 10% fuel)', max_length=140, default="")
    max_weight = models.CharField('Maximum takeoff weight', max_length=140, default="")
    useful_load = models.CharField('Useful load', max_length=140, default="")
    stall_flight_aoa = models.CharField('Stall angle of attack in flight configuration', max_length=140, default="")
    stall_landing_aoa = models.CharField('Stall angle of attack in landing configuration', max_length=140, default="")


    def __str__(self):
        return self.plane

class Features(models.Model):
    
    op_plane = models.ForeignKey(Plane, on_delete=models.CASCADE,verbose_name="Plane Name")
    note = models.TextField('Note', max_length=2000)

    def __str__(self):
        return self.op_plane


class Limits(models.Model):
    
    eng_plane = models.ForeignKey(Plane, on_delete=models.CASCADE,verbose_name="Plane Name")
    note = models.TextField('Note', max_length=2000)

    def __str__(self):
        return self.eng_plane

