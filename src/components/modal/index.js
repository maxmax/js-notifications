/**
 * Modal
 *
 */

export function modal() {
  const sendMessageModal = document.querySelector('#sendMessageModalWrapper');
  const sendMessageModalBtn = document.querySelector('#sendMessageModalBtn');
  const sendMessageModalClose = sendMessageModal.querySelector('.close');
  sendMessageModalBtn.addEventListener('click', event => {
    event.preventDefault();
    sendMessageModal.classList.add('show');
    sendMessageModal.style.display = 'block';
  });
  sendMessageModalClose.addEventListener('click', event => {
    event.preventDefault();
    sendMessageModal.classList.remove('show');
    sendMessageModal.style.display = 'none';
  });
}
