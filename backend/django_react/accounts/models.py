from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from phone_field import PhoneField

def upload_path(filname):
    return '/'.join([filname])


class Accounts(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(unique=True, max_length=50, null=True, blank=True)
    description = models.CharField(max_length=100, null=True, blank=True)
    source = models.CharField(max_length=100, null=True, blank=True)
    url = models.URLField(max_length=100, null=True, blank=True)
    domain = models.CharField(max_length=100, null=True, blank=True)
    tags = models.CharField(max_length=70, null=True, blank=True)
    technology = models.CharField(max_length=100, null=True, blank=True)
    assign_to = models.CharField(max_length=50, null=True, blank=True)
    estimated_budget = models.IntegerField(null=True, blank=True)
    referred_by = models.CharField(max_length=100, null=True, blank=True)
    attachment = models.FileField(blank=True, null=True, upload_to = 'media/')
    full_name = models.CharField(max_length=100, null=True, blank=True)
    email = models.EmailField(null=True, blank=True)
    secondary_email1 = models.EmailField(null=True, blank=True)
    secondary_email2 = models.EmailField(null=True, blank=True)
    company = models.CharField(max_length=100, null=True, blank=True)
    designation = models.CharField(max_length=100, null=True, blank=True)
    skype_id = models.CharField(max_length=50, null=True, blank=True)
    street_address = models.CharField(max_length=100, null=True, blank=True)
    city = models.CharField(max_length=50, null=True, blank=True)
    state = models.CharField(max_length=50, null=True, blank=True)
    country = models.CharField(max_length=30, null=True, blank=True)
    phone = PhoneField(blank=True, null= True)
    secondary_phone1 = PhoneField(blank=True, null = True)
    secondary_phone2 = PhoneField(blank=True, null=True)
    status = models.CharField(max_length=20, null = True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True, null=True)

    def __str__(self):
        return self.title

class Comments(models.Model):
    id = models.AutoField(primary_key=True)
    comment = models.CharField(max_length=180)
    accounts = models.ForeignKey(Accounts, related_name='Accounts_Comments', on_delete=models.CASCADE)
    created_date = models.DateField(auto_now_add=True)
    def __str__(self):
        return self.created_date

class Reject(models.Model):
    id = models.AutoField(primary_key=True)
    reject_reason = models.CharField(max_length=250)
    account_id = models.ForeignKey(Accounts, related_name='Accounts_Reject', on_delete=models.CASCADE)
    status = models.CharField(max_length=20, null=True)
    rejected_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.account_id


