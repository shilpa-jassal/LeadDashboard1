from rest_framework import serializers
from .models import Accounts, Comments, Reject

class AccountsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Accounts
        fields= '__all__'


class CommentsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comments
        fields = "__all__"

class RejectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reject
        fields = "__all__"