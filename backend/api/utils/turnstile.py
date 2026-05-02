# utils/turnstile.py
import requests
from django.conf import settings

TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'


def verify_turnstile(token: str, remote_ip: str = None) -> bool:
    """
    Verify a Cloudflare Turnstile token server-side.

    Returns True if the token is valid, False otherwise.
    Should be called before processing any form submission.
    """
    if not token:
        return False

    payload = {
        'secret':   settings.TURNSTILE_SECRET_KEY,
        'response': token,
    }
    if remote_ip:
        payload['remoteip'] = remote_ip

    try:
        response = requests.post(TURNSTILE_VERIFY_URL, data=payload, timeout=5)
        result   = response.json()
        return result.get('success', False)
    except (requests.RequestException, ValueError):
        # Network error or malformed response — fail closed
        return False