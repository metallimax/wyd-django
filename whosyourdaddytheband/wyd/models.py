from django.db import models


class Role(models.Model):
    name = models.CharField(max_length=128)

    def __str__(self):
        return self.name


class GearType(models.Model):
    name = models.CharField(max_length=256)

    def __str__(self):
        return self.name


class Gear(models.Model):
    type = models.ForeignKey(GearType, on_delete=models.SET_NULL)
    member = models.ForeignKey(Member, on_delete=models.CASCADE)
    name = models.CharField(max_length=256)

    def __str__(self):
        return self.name


class Member(models.Model):
    firstname = models.CharField(max_length=256)
    lastname = models.CharField(max_length=256)
    pseudo = models.CharField(max_length=64, blank=True)
    birth_date = models.DateField()
    roles = models.ManyToManyField(Role)
    avatar = models.ImageField()

    member_from = models.DateField()
    member_until = models.DateField(blank=True)

    def __str__(self):
        return self.pseudo or ("%s %s" % (self.firstname, self.lastname, ))


class Song(models.Model):
    title = models.CharField(max_length=1024)
    authors = models.ManyToManyField(Member)
    compositors = models.ManyToManyField(Member)
    duration = models.DurationField()
    lyrics = models.TextField()

    def __str__(self):
        return self.title


class Concert(models.Model):
    location_name = models.CharField(max_length=1024)
    location = models.CharField(max_length=1024)
    poster = models.ImageField()
    date = models.DateField()
    members = models.ManyToManyField(Member)
    set_list = models.ManyToManyField(Song)

    def __str__(self):
        return "%s (%s)" % (self.location_name, self.date, )


class Picture(models.Model):
    title = models.CharField(max_length=1024)
    image = models.ImageField()
    members = models.ManyToManyField(Member)


class Video(models.Model):
    title = models.CharField(max_length=1024)
    link = models.CharField(max_length=1024)


class Record(models.Model):
    title = models.CharField(max_length=1024)
    content = models.ManyToManyField(Song)
    artwork = models.ImageField(blank=True)

    def __str__(self):
        return self.title
