from django.contrib import admin


from .models import Concert, Role, Member, Picture, Record, Song, Video, GearType, Gear

admin.site.register(Concert)
admin.site.register(Role)
admin.site.register(Member)
admin.site.register(Picture)
admin.site.register(Record)
admin.site.register(Song)
admin.site.register(Video)
admin.site.register(GearType)
admin.site.register(Gear)
