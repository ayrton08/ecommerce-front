import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

export const Toast = (message: string) => {
  return Toastify({
    text: message,
    duration: 3000,
    close: true,
    gravity: 'bottom',
    position: 'left',
    stopOnFocus: true,
    style: {
      background: 'linear-gradient(to right, #00b09b, #96c93d)',
    },
    onClick: function () {},
  }).showToast();
};
