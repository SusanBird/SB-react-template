import toast from 'react-hot-toast';

export function showSuccess(msg) {
  toast.success(msg);
}

export function showError(msg) {
  toast.error(msg);
}
