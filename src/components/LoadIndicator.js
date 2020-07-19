import React, { useState, useEffect } from 'react'
import { observer } from 'mobx-react'
import classnames from 'classnames'
import getRandomNumber from '../utils/getRandomNumber'

const options = [
  'Подожди',
  'Гружу',
  'Надо подумать',
  'Думаю',
  'Загружаю',
  'Качаю',
  'Уже скоро',
  'Имей терпение',
  'Жди',
]

const LoadIndicator = ({ className, label }) => {
  const [randomLabel, setLabel] = useState(options[0])

  useEffect(() => {
    const intervalId = setInterval(
      () => setLabel(options[getRandomNumber(0, options.length - 1)]),
      1000,
    )

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div
      className={classnames('flex h-8 items-center justify-center text-primary text-sm', className)}
    >
      {`${label || randomLabel}...`}
    </div>
  )
}

export default observer(LoadIndicator)
