const PUSH_MESSAGE = process.env.PUSH_MESSAGE || '/push';

/**
 * submit Form
 *
 */

async function submitMessageForm(payload) {
  try {
    await fetch(PUSH_MESSAGE, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    console.log(err);
  }
}

/**
 * send Message
 *
 */

export function sendMessage() {
  const sendMessageForm = document.querySelector('#sendMessage');
  const submitForm = sendMessageForm.querySelector('button');
  submitForm.addEventListener('click', event => {
    event.preventDefault();
    const formData = {
      title: sendMessageForm.querySelector('[name="title"]').value,
      message: sendMessageForm.querySelector('[name="message"]').value,
      url: sendMessageForm.querySelector('[name="url"]').value,
      icon: sendMessageForm.querySelector('[name="icon"]').value,
      badge: sendMessageForm.querySelector('[name="badge"]').value,
      data: sendMessageForm.querySelector('[name="data"]').value,
    };
    submitMessageForm(formData).catch(error => console.error(error));
  });
}
