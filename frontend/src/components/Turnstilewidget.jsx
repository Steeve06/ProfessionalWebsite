import { useEffect, useRef } from 'react';

/**
 * TurnstileWidget
 *
 * Props:
 *   siteKey  — your Cloudflare Turnstile site key (public)
 *   onVerify — callback(token: string) called when the challenge passes
 *   onExpire — optional callback when the token expires (user must re-verify)
 *   theme    — 'light' | 'dark' | 'auto'  (default: 'light')
 */
const TurnstileWidget = ({ siteKey, onVerify, onExpire, theme = 'light' }) => {
    const containerRef = useRef(null);
    const widgetIdRef  = useRef(null);

    useEffect(() => {
        // Inject the Turnstile script once if it isn't already present
        const SCRIPT_ID = 'cf-turnstile-script';

        const initWidget = () => {
            if (!containerRef.current || widgetIdRef.current !== null) return;

            widgetIdRef.current = window.turnstile.render(containerRef.current, {
                sitekey:          siteKey,
                theme,
                callback:         onVerify,
                'expired-callback': onExpire ?? (() => onVerify('')),
            });
        };

        if (window.turnstile) {
            // Script already loaded (e.g. navigating back to this page)
            initWidget();
        } else if (!document.getElementById(SCRIPT_ID)) {
            const script = document.createElement('script');
            script.id    = SCRIPT_ID;
            script.src   = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
            script.async = true;
            script.defer = true;
            script.onload = initWidget;
            document.head.appendChild(script);
        } else {
            // Script tag exists but hasn't fired onload yet — poll briefly
            const interval = setInterval(() => {
                if (window.turnstile) {
                    clearInterval(interval);
                    initWidget();
                }
            }, 100);
        }

        return () => {
            // Clean up the widget when the component unmounts
            if (widgetIdRef.current !== null && window.turnstile) {
                window.turnstile.remove(widgetIdRef.current);
                widgetIdRef.current = null;
            }
        };
    }, [siteKey, theme, onVerify, onExpire]);

    return (
        <div
            ref={containerRef}
            style={{ margin: '0.75rem 0' }}
        />
    );
};

export default TurnstileWidget;