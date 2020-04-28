from django.conf.urls import url
from django.contrib import admin
from django.urls import path
from . import views
from rest_framework_jwt.views import obtain_jwt_token
from rest_framework_jwt.views import refresh_jwt_token
from rest_framework_jwt.views import verify_jwt_token

urlpatterns = [

    path('', views.AccountsListCreate.as_view() ),
    url('accounts/(?P<pk>\d+)/$', views.AccountsListPut.as_view({'get': 'retrieve', 'put': 'update'}),name='edit_accounts'),
    path('comment', views.CommentsListCreate.as_view() ),
    path('reject', views.RejectListCreate.as_view() ),
    url(r'^auth-jwt/', obtain_jwt_token),
    url(r'^auth-jwt-refresh/', refresh_jwt_token),
    url(r'^auth-jwt-verify/', verify_jwt_token),
]