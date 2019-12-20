import { serviceWorker } from './containers/serviceWorker';
import { sendMessage } from './containers/sendMessage';
import { sendMessageForm } from './containers/sendMessageForm';
import styles from './styles.scss';

const app = document.getElementById('app');

app.insertAdjacentHTML(
  'beforebegin',
  '<p class="' + styles.headline + '">Notifications</p>',
);

app.insertAdjacentHTML(
  'beforeEnd',
  '<section class="' + styles.actions + '">' + sendMessageForm + '</section>',
);

// serviceWorker
serviceWorker();

// sendMessage
sendMessage();
