# Generated by Django 5.0.6 on 2024-06-07 19:05

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('frontend', '0004_alter_thread_title_follow'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='follow',
            unique_together=set(),
        ),
        migrations.AddField(
            model_name='message',
            name='likes',
            field=models.ManyToManyField(blank=True, related_name='message_likes', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='thread',
            name='likes',
            field=models.ManyToManyField(blank=True, related_name='thread_likes', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='thread',
            name='title',
            field=models.CharField(max_length=255),
        ),
    ]