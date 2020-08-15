
from django.contrib import admin
from .models import Visited,ToVisit
from leaflet.admin import LeafletGeoAdmin
# Register your models here.
class VisitedAdmin(LeafletGeoAdmin):
    list_display=('name','location','img' ,'date','des')

class ToVisitAdmin(LeafletGeoAdmin):
    #pass
    list_display=('naame','location','img' ,'date','des')
    
admin.site.register(Visited,VisitedAdmin)
admin.site.register(ToVisit,ToVisitAdmin)

