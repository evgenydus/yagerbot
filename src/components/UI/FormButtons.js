import React from 'react'
import { observer } from 'mobx-react'

import Button from './Button'
import LoadIndicator from '../LoadIndicator'

const FormButtons = ({ itemId, isLoading, onCancel }) => {
  if (isLoading) return <LoadIndicator />

  return (
    <div className="flex justify-end xs:justify-center">
      <Button mode="gray" onClick={onCancel}>
        Отмена
      </Button>
      <Button className="ml-2" type="submit">
        {itemId ? <div>Сохранить</div> : <div>Создать</div>}
      </Button>
    </div>
  )
}

export default observer(FormButtons)
