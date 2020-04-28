from django.shortcuts import render
from .models import Accounts, Comments, Reject
from .serializers import AccountsSerializer, CommentsSerializer, RejectSerializer
from rest_framework import generics, viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_list_or_404, get_object_or_404
# from django.contrib.auth.decorators import  login_required
from rest_framework import viewsets
from rest_framework.parsers import JSONParser
from django.http import HttpResponse
from rest_framework.parsers import MultiPartParser, FormParser,FileUploadParser
from django.contrib.auth.models import User, auth

'''class accountsListCreate(generics.ListCreateAPIView):
    queryset = Accounts.objects.all()
    serializer_class = AccountsSerializer
'''





# @login_required(login_url='http://localhost:3000/')
class AccountsListCreate(APIView):

    def get(self, request, format=None):
        account = Accounts.objects.all().order_by("-last_modified")
        serializer = AccountsSerializer(account, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        # print("data is going to post")
        # print("data is going to post")
        # print(request.data['attachment'])
        request.data['attachment']=None
        # print("before if: ---------", request.data['attachment'])
        if request.data['secondary_email2']:
            if len(request.data['secondary_email2']) > 1:
                request.data['secondary_email1'] = request.data['secondary_email2'][0]
                request.data['secondary_email2'] = request.data['secondary_email2'][1]
            elif len(request.data['secondary_email2']) == 1:
                request.data['secondary_email1'] = request.data['secondary_email2'][0]
                request.data['secondary_email2'] = " "
        else:
            request.data['secondary_email2'] = " "
        if request.data['secondary_phone2']:
            if len(request.data['secondary_phone2']) > 1:
                request.data['secondary_phone1'] = request.data['secondary_phone2'][0]
                request.data['secondary_phone2'] = request.data['secondary_phone2'][1]
            elif len(request.data['secondary_phone2']) == 1:
                request.data['secondary_phone1'] = request.data['secondary_phone2'][0]
                request.data['secondary_phone2'] = " "
        else:
            request.data['secondary_phone2'] = ""
        serializer = AccountsSerializer(data=request.data)
        print("hellooo",serializer)
        print("serializer")
        if serializer.is_valid():
            print("serializer is  valid")
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        print("error at:",serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # def put(self, request, format=None):
    #     print("I am hiting here")
    #     # print(request.__dict__)
    #     print("going to update")
    #     print(request.data)
    #     pk = request.data['Title']
    #     # pk = Accounts.objects.get(Title = pk)
    #     # snippet = self.get_object(pk)
    #     stat = request.data['Status']
    #     print("pk is: ", pk, 'status is: ',stat)
    #     serializer = AccountsSerializer(pk, data=stat, partial= True)
    #     print("serializer is: ",serializer)
    #     if serializer.is_valid():
    #         print("****** valid ******")
    #         serializer.save()
    #         return Response(serializer.data)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    #



class AccountsListPut(viewsets.ModelViewSet):
    queryset = Accounts.objects.all()
    serializer_class = AccountsSerializer


class CommentsListCreate(APIView):

    def get(self, request, format=None):
        comment = Comments.objects.all()
        serializer = CommentsSerializer(comment, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = CommentsSerializer(data=request.data)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class RejectListCreate(APIView):

    def get(self, request, format=None):
        reject = Reject.objects.all()
        serializer = RejectSerializer(reject, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = RejectSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
