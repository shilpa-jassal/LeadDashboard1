from django.contrib import admin
from .models import Accounts, Comments,Reject

admin.site.register(Accounts)
admin.site.register(Comments)
admin.site.register(Reject)