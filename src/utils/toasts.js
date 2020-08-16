import { toast } from 'react-toastify'
import classnames from 'classnames'
import 'react-toastify/dist/ReactToastify.css'

const propsByType = {
  error: {
    className: 'bg-secondary-light',
    progressClassName: 'bg-secondary-dark',
  },
  success: {
    className: 'bg-primary-light',
    progressClassName: 'bg-primary-dark',
  },
}

const showToast = (message, type = 'success', customProps = {}) => {
  toast.info(message, {
    className: classnames('text-white', propsByType[type].className),
    position: 'bottom-right',
    progressClassName: propsByType[type].progressClassName,
    ...customProps,
  })
}

export default showToast
