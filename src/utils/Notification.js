import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const showNotification = (message, isWarning = false, position = 'bottom-right') => {
  toast.info(message, {
    className: `${
      isWarning ? 'bg-secondary-light' : 'bg-primary-light'
    } text-white text-center rounded'`,
    position,
    progressClassName: isWarning ? 'bg-secondary-dark' : 'bg-primary-dark',
  })
}

export default showNotification
