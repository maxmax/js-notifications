import { webPushNotification } from './containers/webPushNotification';
import styles from './styles.scss';

const app = document.getElementById('app');

// const tmplNotify = `<section class=${styles.actionsWrapper}>
//  <button data-notify-send>Notify me!</button>
//  <br />
//  <br />
//  <br />
//  <button class="trigger-push">Push Notification</button>
// </section>`;

app.insertAdjacentHTML(
  'beforebegin',
  '<p class="' + styles.headline + '">Notifications</p>',
);

// app.insertAdjacentHTML(
//  'beforeEnd',
//  '<section class="' + styles.actions + '">' + tmplNotify + '</section>',
// );

// Web Notification int
webPushNotification();
