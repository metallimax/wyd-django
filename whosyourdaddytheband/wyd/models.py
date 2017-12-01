import os

from django.conf import settings
from django.db import models


class RoleManager(models.Manager):
    def get_by_natural_key(self, name):
        return self.get(name=name)


class Role(models.Model):
    objects = RoleManager()

    name = models.CharField(max_length=128, unique=True)

    def natural_key(self):
        return str(self)

    def __str__(self):
        return self.name


class GearType(models.Model):
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
    member_until = models.DateField(blank=True, null=True)

    class Meta:
        ordering = ['birth_date']

    def natural_key(self):
        return str(self)

    def name(self):
        return self.pseudo or ("%s %s" % (self.firstname, self.lastname,))

    def avatar_url(self):
        return os.path.join(settings.MEDIA_URL, self.avatar.name)

    def __str__(self):
        return self.name()


class Gear(models.Model):
    type = models.ForeignKey(GearType, null=True, on_delete=models.SET_NULL)
    member = models.ForeignKey(Member, related_name='gears', on_delete=models.CASCADE)
    name = models.CharField(max_length=256)

    def __str__(self):
        return "%s" % (self.name,)

    def natural_key(self):
        return {'name': self.name, 'type': self.type.name, }


class Song(models.Model):
    title = models.CharField(max_length=1024)
    authors = models.ManyToManyField(Member, related_name="authors")
    compositors = models.ManyToManyField(Member, related_name="compositors")
    duration = models.DurationField()
    lyrics = models.TextField(blank=True)

    def __str__(self):
        return self.title

    def html_lyrics(self):
        return self.lyrics.replace('\r', '').replace('\n', '<br/>\n')


class Concert(models.Model):
    location_name = models.CharField(max_length=1024)
    location = models.CharField(max_length=1024, blank=True)
    poster = models.ImageField(blank=True)
    date = models.DateField()
    members = models.ManyToManyField(Member)
    setlist = models.ManyToManyField(Song, through='ConcertSetlist', through_fields=('concert', 'song', ))

    def __str__(self):
        return "%s (%s)" % (self.location_name, self.date,)


class Picture(models.Model):
    title = models.CharField(max_length=1024)
    image = models.ImageField()
    members = models.ManyToManyField(Member)


class Video(models.Model):
    title = models.CharField(max_length=1024)
    link = models.CharField(max_length=1024)


class Record(models.Model):
    title = models.CharField(max_length=1024)
    content = models.ManyToManyField(Song, through='RecordTrack', through_fields=('record', 'song', ))
    artwork = models.ImageField(blank=True)

    def __str__(self):
        return self.title


class RecordTrack(models.Model):
    record = models.ForeignKey(Record, on_delete=models.CASCADE)
    song = models.ForeignKey(Song, on_delete=models.CASCADE)
    rank = models.IntegerField()

    class Meta:
        ordering = ['rank']

    def __str__(self):
        return "%02d. %s" % (self.rank, self.song.title,)


class ConcertSetlist(models.Model):
    concert = models.ForeignKey(Concert, on_delete=models.CASCADE)
    song = models.ForeignKey(Song, on_delete=models.CASCADE)
    rank = models.IntegerField()

    class Meta:
        ordering = ['rank']

    def __str__(self):
        return "%02d. %s" % (self.rank, self.song.title,)
