import { notificationComponent } from '../../components/notificationComponent';
import {
  NOTIFICATION_MESSAGE_DEVELOPMENT,
  NOTIFICATION_MESSAGE,
  // NOTIFICATION_MESSAGE_EX,
} from '../../static/entries';

export function notificationExamples() {
  const elements = document.querySelectorAll('[data-notify-send]');

  elements.forEach(element => {
    element.onclick = function() {
      notificationComponent(NOTIFICATION_MESSAGE_DEVELOPMENT);
    };
  });

  window.addEventListener('load', () => {
    setTimeout(function() {
      notificationComponent(NOTIFICATION_MESSAGE);
    }, 1000);

    // setTimeout(function() {
    //  notificationComponent(NOTIFICATION_MESSAGE_EX);
    // }, 16000);
  });
}
