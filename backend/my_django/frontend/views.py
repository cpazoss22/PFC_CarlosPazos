from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from .models import Thread, Message, Follow
from .serializers import UserSerializer, ThreadSerializer, MessageSerializer

def index(request):
    return render(request, 'index.html')

class UserCreateView(generics.CreateAPIView):
    serializer_class = UserSerializer

class CustomTokenObtainPairView(TokenObtainPairView):
    pass

class LogoutView(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request):
        try:
            refresh_token = request.data.get("refresh_token")
            if refresh_token is None:
                raise ValueError("No refresh token provided")

            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=205)
        except Exception as e:
            return Response(status=400, data={"detail": str(e)})

class ThreadCreateView(generics.CreateAPIView):
    queryset = Thread.objects.all()
    serializer_class = ThreadSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

class ThreadListView(generics.ListAPIView):
    queryset = Thread.objects.all()
    serializer_class = ThreadSerializer
    permission_classes = [permissions.AllowAny]

class ThreadDetailView(generics.RetrieveAPIView):
    queryset = Thread.objects.all()
    serializer_class = ThreadSerializer
    permission_classes = [permissions.AllowAny]

class MessageCreateView(generics.CreateAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        thread_id = self.request.data.get('thread')
        thread = get_object_or_404(Thread, id=thread_id)
        serializer.save(author=self.request.user, thread=thread)

class ThreadDeleteView(generics.DestroyAPIView):
    queryset = Thread.objects.all()
    serializer_class = ThreadSerializer
    permission_classes = [permissions.IsAuthenticated]

    def delete(self, request, *args, **kwargs):
        instance = self.get_object()
        if instance.author != request.user:
            return Response(status=403, data={"detail": "You do not have permission to delete this thread"})
        return self.destroy(request, *args, **kwargs)

class MessageDeleteView(generics.DestroyAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
    permission_classes = [permissions.IsAuthenticated]

    def delete(self, request, *args, **kwargs):
        instance = self.get_object()
        if instance.author != request.user:
            return Response(status=403, data={"detail": "You do not have permission to delete this message"})
        return self.destroy(request, *args, **kwargs)

class UserListView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]

class UserProfileView(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]

class FollowView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, *args, **kwargs):
        followed_id = request.data.get('followed_id')
        followed = get_object_or_404(User, id=followed_id)
        follow, created = Follow.objects.get_or_create(follower=request.user, followed=followed)
        if created:
            return Response(status=201)
        return Response(status=200)

class UnfollowView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, *args, **kwargs):
        followed_id = request.data.get('followed_id')
        followed = get_object_or_404(User, id=followed_id)
        follow = Follow.objects.filter(follower=request.user, followed=followed)
        if follow.exists():
            follow.delete()
            return Response(status=200)
        return Response(status=400, data={"detail": "You are not following this user"})

class IsFollowingView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, *args, **kwargs):
        followed_id = request.data.get('followed_id')
        followed = get_object_or_404(User, id=followed_id)
        is_following = Follow.objects.filter(follower=request.user, followed=followed).exists()
        return Response(status=200, data={"is_following": is_following})

class CurrentUserView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, *args, **kwargs):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)
