# Generated by Django 4.1.3 on 2023-05-30 18:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("main", "0003_user"),
    ]

    operations = [
        migrations.DeleteModel(
            name="user",
        ),
    ]
