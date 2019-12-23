import { urlBase64ToUint8Array } from '../../utils/converters';
import { notificationSubscription } from '../notificationSubscription';

const PUBLIC_KEY = process.env.PUBLIC_VAPID_KEY || '';
const PREVIEW_SCOPE = process.env.PREVIEW_SCOPE || '/js/';

/**
 * serviceWorker
 *
 * Installing service worke
 */

export async function serviceWorker() {
  const convertedVapidKey = urlBase64ToUint8Array(PUBLIC_KEY);

  if ('serviceWorker' in navigator && 'PushManager' in window) {
    console.log('Service Worker and Push is supported');
    try {
      const register = await navigator.serviceWorker.register('/sw.js', {
        scope: PREVIEW_SCOPE,
      });

      // Subscription
      notificationSubscription(register, convertedVapidKey);
    } catch (err) {
      console.log(err);
    }
  } else {
    console.error('Service workers are not supported in this browser');
  }
}
