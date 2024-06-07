import os
from django.core.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack
import frontend.routing

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'my_django.settings')

application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    "websocket": AuthMiddlewareStack(
        URLRouter(
            frontend.routing.websocket_urlpatterns
        )
    ),
})