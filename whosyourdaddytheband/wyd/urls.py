from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^members/$', views.members, name='members'),
    url(r'^members/(?P<member_id>[0-9]+)/$', views.member, name='member'),
    url(r'^songs/$', views.songs, name='songs'),
]
