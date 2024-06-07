from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Thread, Message, Follow

class UserSerializer(serializers.ModelSerializer):
    messages_count = serializers.SerializerMethodField()
    followers_count = serializers.SerializerMethodField()
    following_count = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'messages_count', 'followers_count', 'following_count']

    def get_messages_count(self, obj):
        return Message.objects.filter(author=obj).count()

    def get_followers_count(self, obj):
        return obj.followers.count()

    def get_following_count(self, obj):
        return obj.following.count()

class MessageSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)
    replies = serializers.SerializerMethodField()

    class Meta:
        model = Message
        fields = ['id', 'thread', 'author', 'content', 'created_at', 'parent', 'replies']
        read_only_fields = ['thread', 'author', 'created_at', 'replies']

    def get_replies(self, obj):
        replies = obj.replies.all()
        return MessageSerializer(replies, many=True).data

class ThreadSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)
    messages = MessageSerializer(many=True, read_only=True)

    class Meta:
        model = Thread
        fields = ['id', 'title', 'content', 'author', 'created_at', 'messages']
        read_only_fields = ['author', 'created_at']

class FollowSerializer(serializers.ModelSerializer):
    class Meta:
        model = Follow
        fields = ['id', 'follower', 'followed', 'created_at']
