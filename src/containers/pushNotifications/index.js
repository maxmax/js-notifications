const SUBSCRIBE_API = process.env.SUBSCRIBE_API || 'subscribe/';
const PUBLIC_KEY = process.env.PUBLIC_VAPID_KEY || '';
const PREVIEW_SCOPE = process.env.PREVIEW_SCOPE || '/';

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

export function pushNotifications() {
  const publicVapidKey = PUBLIC_KEY;
  const triggerPush = document.querySelector('.trigger-push');

  async function triggerPushNotification() {
    if ('serviceWorker' in navigator) {
      const register = await navigator.serviceWorker.register('js/sw.js', {
        scope: PREVIEW_SCOPE,
      });

      console.log('waiting for acceptance');
      const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(publicVapidKey),
      });

      console.log('acceptance complete');
      await fetch(SUBSCRIBE_API, {
        method: 'POST',
        body: JSON.stringify(subscription),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } else {
      console.error('Service workers are not supported in this browser');
    }
  }

  triggerPush.addEventListener('click', () => {
    triggerPushNotification().catch(error => console.error(error));
  });
}
