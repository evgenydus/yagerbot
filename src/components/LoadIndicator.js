import React, { useState, useEffect } from 'react'
import { css, keyframes } from '@emotion/core'
import { observer } from 'mobx-react'
import classnames from 'classnames'
import getRandomNumber from '../utils/getRandomNumber'

const bounceAnimation = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0, 0, 0);
  }

  40%, 43% {
    transform: translate3d(0, -12px, 0);
  }

  70% {
    transform: translate3d(0, -7px, 0);
  }

  90% {
    transform: translate3d(0, -4px, 0);
  }
`

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
      1500,
    )

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div
      className={classnames(
        'cursor-wait flex h-8 items-center justify-center text-primary text-sm',
        className,
      )}
      css={css`
        animation: 1s ${bounceAnimation} ease-in-out infinite;
      `}
    >
      {`${label || randomLabel}...`}
    </div>
  )
}

export default observer(LoadIndicator)
