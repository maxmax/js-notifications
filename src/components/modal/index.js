/**
 * Modal
 *
 */

export function modal() {
  const sendMessageModalBtn = document.querySelector('#sendMessageModalBtn');
  const sendMessageModalWrapper = document.querySelector('#sendMessageModalWrapper');
  const sendMessageModalClose = sendMessageModalWrapper.querySelector('.close');
  let show = false;
  sendMessageModalBtn.addEventListener('click', event => {
    event.preventDefault();
    sendMessageModalWrapper.classList.add("show");
    sendMessageModalWrapper.style.display = 'block';
  });
  sendMessageModalClose.addEventListener('click', event => {
    event.preventDefault();
    sendMessageModalWrapper.classList.remove("show");
    sendMessageModalWrapper.style.display = 'none';
  });
}
