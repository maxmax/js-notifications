import { notificationExamples } from './containers/notifications';
import { pushNotifications } from './containers/pushNotifications';
import styles from './styles.scss';

const app = document.getElementById('app');

const tmplNotify = `<section class=${styles.actionsWrapper}>
  <button data-notify-send>Notify me!</button>
  <br />
  <br />
  <br />
  <button class="trigger-push">Push Notification</button>
</section>`;

app.insertAdjacentHTML(
  'beforebegin',
  '<p class="' + styles.headline + '">notifications</p>',
);

app.insertAdjacentHTML(
  'beforeEnd',
  '<section class="' + styles.actions + '">' + tmplNotify + '</section>',
);

// Base example
notificationExamples();

// Base example SW Push
pushNotifications();
