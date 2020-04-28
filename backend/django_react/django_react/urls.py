from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
# from rest_framework_jwt.views import ObtainJSONWebToken


# obtain_jwt_token = ObtainJSONWebToken.as_view()

admin.site.site_header = "Lead Managment"
admin.site.site_title = "Lead Managment"
admin.site.index_title = "Lead Managment System"

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include("accounts.urls")),
    # path('api-auth/', include('rest_framework.urls'))
    # path('auth/', obtain_jwt_token),
]

urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
