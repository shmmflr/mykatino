import { toast } from 'react-toastify';

export const errorMessage = (message) => {
  return toast.error(message, { position: 'top-right', closeButton: 'true' });
};

export const successMessage = (message) => {
  return toast.success(message, { position: 'top-right', closeButton: 'true' });
};
