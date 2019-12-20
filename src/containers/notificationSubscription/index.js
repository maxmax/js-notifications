import { notificationComponent } from '../../components/notificationComponent';
import { NOTIFICATION_MESSAGE_SUBSCRIBING } from '../../static/entries';

const SUBSCRIBE_API = process.env.SUBSCRIBE_API || 'subscribe/';

/**
 * notificationSubscription
 *
 * @param {object} ServiceWorkerRegistration - serviceWorker.register
 * @param {string} publicKey result base64String a public vavid key
 */

export async function notificationSubscription(register, publicKey) {
  let isSubscribed = false;
  let swRegistration = null;

  swRegistration = register;

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
          applicationServerKey: publicKey,
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
        // Thanks for subscribing
        notificationComponent(NOTIFICATION_MESSAGE_SUBSCRIBING);
      } catch (err) {
        console.log(err);
      }
    }
    // END is isSubscribed
  } catch (err) {
    console.log(err);
  }
}
