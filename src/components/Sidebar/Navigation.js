import React from 'react'
import { observer } from 'mobx-react'
import { Link } from '@reach/router'

const items = [
  { label: 'Главная панель', route: '/dashboard' },
  { label: 'Люди', route: '/dashboard' },
  { label: 'Сообщения', route: '/dashboard' },
  { label: 'Отчеты', route: '/dashboard' },
]

const Navigation = () => (
  <div className="p-4 text-sm">
    {items.map(item => (
      <Link key={item.label} className="flex group items-center link my-2 py-1" to={item.route}>
        <div className="mr-1 text-gray-600 group-hover:text-primary">[ICN]</div>
        {item.label}
      </Link>
    ))}
  </div>
)

export default observer(Navigation)
