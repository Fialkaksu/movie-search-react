import { toast } from 'react-hot-toast';

export const toastError = message =>
  toast.error(message, {
    position: 'top-center',
    style: { background: 'red', color: 'white' },
    duration: 2000,
    icon: '❌',
    ariaProps: { role: 'status', 'aria-live': 'polite' },
  });
