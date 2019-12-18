// Notification
function spawnNotification({ options, title, target, closeTimeout }) {
  const notification = new Notification(title, options); // Such a constructor cannot be called twice, since it is not saved anywhere, it is simply created and called immediately.
  if (target) {
    notification.onclick = function(event) {
      event.preventDefault(); // prevent the browser from focusing the Notification's tab
      window.open(target, '_blank');
    };
  }
  setTimeout(notification.close.bind(notification), closeTimeout || 5000);
  return notification;
}

function spawnNotificationSubscribing(text) {
  const notification = new Notification(text);
  return notification;
}

export function notificationComponent(notificationMessage) {
  // Check browser support for notifications
  if (!('Notification' in window)) {
    console.log('This browser does not support desktop notification');
  } else if (Notification.permission === 'granted') {
    spawnNotification(notificationMessage);
  } else if (Notification.permission !== 'denied') {
    console.log('Notification permission denied!');
    // Notification.requestPermission(function(permission) {
    //  if (permission === 'granted') {
    //    spawnNotificationSubscribing('Notification permission denied.');
    //  }
    // });
  }

  // Ultimately, if the user refused to receive
  // notifications, then you should respect his choice and do not disturb him
}
