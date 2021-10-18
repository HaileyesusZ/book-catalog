import { message } from 'antd'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import ErrorMessageProps from '../models/props/ErrorMessageProps'
import { ACTIONS } from '../store/ACTIONS'

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message: errorText }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    if (errorText) {
      message.error({
        content: errorText,
        onClose: () => {
          dispatch({ type: ACTIONS.CLEAR_ERROR })
        },
      })
    }
  }, [errorText, dispatch])

  return null
}

export { ErrorMessage }
