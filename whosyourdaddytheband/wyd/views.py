from django.core import serializers
from django.http import HttpResponse
from django.shortcuts import render

from wyd.models import Member, Song


def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")


def member(request, member_id):
    data = serializers.serialize("json", Member.objects.filter(id__exact=member_id), use_natural_foreign_keys=True,
                                 use_natural_primary_keys=True)
    return HttpResponse(data, content_type="application/json")


def members(request):
    data = serializers.serialize("json", Member.objects.all(), use_natural_foreign_keys=True,
                                 use_natural_primary_keys=True)
    return HttpResponse(data, content_type="application/json")


def songs(request):
    data = serializers.serialize("json", Song.objects.all(), use_natural_foreign_keys=True,
                                 use_natural_primary_keys=True)
    return HttpResponse(data, content_type="application/json")
