from django.urls import path
from .views import (
    index, UserCreateView, CustomTokenObtainPairView, LogoutView, ThreadCreateView, 
    ThreadListView, ThreadDetailView, MessageCreateView, ThreadDeleteView, 
    MessageDeleteView, UserListView, UserProfileView, FollowView, 
    UnfollowView, IsFollowingView, CurrentUserView
)

urlpatterns = [
    path('', index, name='index'),
    path('register/', UserCreateView.as_view(), name='user-create'),
    path('login/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('threads/', ThreadCreateView.as_view(), name='thread-create'),
    path('threads/list/', ThreadListView.as_view(), name='thread-list'),
    path('threads/<int:pk>/', ThreadDetailView.as_view(), name='thread-detail'),
    path('threads/<int:pk>/delete/', ThreadDeleteView.as_view(), name='thread-delete'),
    path('messages/', MessageCreateView.as_view(), name='message-create'),
    path('messages/<int:pk>/delete/', MessageDeleteView.as_view(), name='message-delete'),
    path('users/', UserListView.as_view(), name='user-list'),
    path('users/<int:pk>/', UserProfileView.as_view(), name='user-profile'),
    path('users/follow/', FollowView.as_view(), name='user-follow'),
    path('users/unfollow/', UnfollowView.as_view(), name='user-unfollow'),
    path('users/is-following/', IsFollowingView.as_view(), name='is-following'),
    path('users/current/', CurrentUserView.as_view(), name='current-user'),
]
