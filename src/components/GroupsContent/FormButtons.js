import React from 'react'
import { observer } from 'mobx-react'
import Button from '../UI/Button'
import LoadIndicator from '../LoadIndicator'

const FormButtons = ({ isLoading, onCancel }) => {
  if (isLoading) return <LoadIndicator />

  return (
    <div className="flex justify-end">
      <Button mode="gray" onClick={onCancel}>
        Отмена
      </Button>
      <Button className="ml-2" type="submit">
        Создать
      </Button>
    </div>
  )
}

export default observer(FormButtons)
