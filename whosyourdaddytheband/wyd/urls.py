from django.conf.urls import url, include
from rest_framework import routers, serializers, viewsets

from . import views
from .models import *


class GearRelatedField(serializers.RelatedField):
    def to_representation(self, value):
        return {'name': value.name, 'type': value.type.name, }


class RoleRelatedField(serializers.RelatedField):
    def to_representation(self, value):
        return {'name': value.name, }


class MemberRelatedField(serializers.RelatedField):
    def to_representation(self, value):
        return {'name': value.name(), }


class SetlistRelatedField(serializers.RelatedField):
    def to_representation(self, value):
        return {'title': value.song.title, 'rank': "%02d" % (value.rank, ), }


class TrackRelatedField(serializers.RelatedField):
    def to_representation(self, value):
        return {'title': value.song.title, 'rank': "%02d" % (value.rank,), }


class MemberSerializer(serializers.ModelSerializer):
    gears = GearRelatedField(many=True, read_only=True)
    roles = RoleRelatedField(many=True, read_only=True)

    class Meta:
        model = Member
        fields = ('name', 'avatar', 'member_until', 'gears', 'roles', )


class MemberViewSet(viewsets.ModelViewSet):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer


class SongSerializer(serializers.ModelSerializer):
    compositors = MemberRelatedField(many=True, read_only=True)
    authors = MemberRelatedField(many=True, read_only=True)

    class Meta:
        model = Song
        fields = ('title', 'html_lyrics', 'authors', 'compositors', )


class SongViewSet(viewsets.ModelViewSet):
    queryset = Song.objects.all()
    serializer_class = SongSerializer


class ConcertSerializer(serializers.ModelSerializer):
    concertsetlist_set = SetlistRelatedField(many=True, read_only=True)

    class Meta:
        model = Concert
        fields = ('location_name', 'concertsetlist_set', )


class ConcertViewSet(viewsets.ModelViewSet):
    queryset = Concert.objects.all()
    serializer_class = ConcertSerializer


class RecordSerializer(serializers.ModelSerializer):
    recordtrack_set = TrackRelatedField(many=True, read_only=True)

    class Meta:
        model = Record
        fields = ('title', 'recordtrack_set', )


class RecordViewSet(viewsets.ModelViewSet):
    queryset = Record.objects.all()
    serializer_class = RecordSerializer


router = routers.DefaultRouter()
router.register(r'members', MemberViewSet)
router.register(r'songs', SongViewSet)
router.register(r'records', RecordViewSet)
router.register(r'concerts', ConcertViewSet)


urlpatterns = [
    url(r'^', include(router.urls)),
    # url(r'^$', views.index, name='index'),
    # url(r'^members/$', views.get_members, name='members'),
    # url(r'^members/(?P<member_id>[0-9]+)/$', views.get_member, name='member'),
    # url(r'^songs/$', views.get_songs, name='songs'),
]
