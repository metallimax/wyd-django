from django.http import HttpResponse
from django.shortcuts import render


def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")


def members(request):
    return HttpResponse("""[
  { "name": "Mr. Nice" },
  { "name": "Narco" },
  { "name": "Bombasto" },
  { "name": "Celeritas" },
  { "name": "Magneta" },
  { "name": "RubberMan" },
  { "name": "Dynama" },
  { "name": "Dr IQ" },
  { "name": "Magma" },
  { "name": "Tornado" }
]
""", content_type="application/json")
