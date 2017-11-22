from django.db import models


class Instrument(models.Model):
    name = models.CharField(max_length=128)


class Member(models.Model):
    firstname = models.CharField(max_length=128)
    lastname = models.CharField(max_length=128)
    birth_date = models.DateField()
    instrument = models.ForeignKey(Instrument, on_delete=models.CASCADE)
    avatar = models.ImageField()

    member_from = models.DateField()
    member_until = models.DateField()


class Song(models.Model):
    title = models.CharField(max_length=1024)
    duration = models.DurationField()


class Concert(models.Model):
    location_name = models.CharField(max_length=1024)
    date = models.DateField()
    members = models.ManyToManyField(Member)
    set_list = models.ManyToManyField(Song)


class Picture(models.Model):
    title = models.CharField(max_length=1024)
    avatar = models.ImageField()
    members = models.ManyToManyField(Member)


class Video(models.Model):
    title = models.CharField(max_length=1024)
    link = models.CharField(max_length=1024)


class Record(models.Model):
    title = models.CharField(max_length=1024)
    content = models.ManyToManyField(Song)
