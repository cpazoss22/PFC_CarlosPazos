from django.urls import path
from . import consumers

websocket_urlpatterns = [
    path('ws/threads/<int:thread_id>/', consumers.ChatConsumer.as_asgi()),
]
