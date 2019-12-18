// import { notificationComponent } from '../../components/notificationComponent';
// import { NOTIFICATION_MESSAGE_SUBSCRIBING } from '../../static/entries';

const SUBSCRIBE_API = process.env.SUBSCRIBE_API || 'subscribe/';
const PUBLIC_KEY = process.env.PUBLIC_VAPID_KEY || '';
const PREVIEW_SCOPE = process.env.PREVIEW_SCOPE || '/';

/**
 * urlBase64ToUint8Array
 *
 * @param {string} base64String a public vavid key
 */
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

/**
 * Send request to database for add new subscriber
 *
 */
export function webPushNotification() {
  // const triggerPush = document.querySelector('.trigger-push');
  const applicationKey = PUBLIC_KEY;
  const convertedVapidKey = urlBase64ToUint8Array(applicationKey);
  let isSubscribed = false;
  let swRegistration = null;
  // Installing service worker
  async function triggerPushNotification() {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      console.log('Service Worker and Push is supported');
      try {
        const register = await navigator.serviceWorker.register('js/sw.js', {
          scope: PREVIEW_SCOPE,
        });
        swRegistration = register;
        // swRegistration
        try {
          const subscription = await swRegistration.pushManager.getSubscription();
          isSubscribed = !(subscription === null);
          if (isSubscribed) {
            console.log('User is subscribed');
          } else {
            console.log('User subscribe');
            try {
              const subscriptionData = await register.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: convertedVapidKey,
              });
              console.log('User is subscribed');
              // on /subscribe
              await fetch(SUBSCRIBE_API, {
                method: 'POST',
                body: JSON.stringify(subscriptionData),
                headers: {
                  'Content-Type': 'application/json',
                },
              });
              isSubscribed = true;
              // notificationComponent
              // notificationComponent(NOTIFICATION_MESSAGE_SUBSCRIBING);
              // end notificationComponent
            } catch (err) {
              console.log(err);
            }
          }
        } catch (err) {
          console.log(err);
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      console.error('Service workers are not supported in this browser');
    }
  }

  triggerPushNotification().catch(error => console.error(error));

  // triggerPush.addEventListener('click', () => {
  //  triggerPushNotification().catch(error => console.error(error));
  // });
}
