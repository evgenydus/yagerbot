export const pages = {
  admin: 'admin',
  dashboard: 'dashboard',
  messages: 'messages',
  people: 'people',
  reports: 'reports',
}

export const pageNames = {
  [pages.admin]: 'Админка',
  [pages.dashboard]: 'Главная панель',
  [pages.messages]: 'Сообщения',
  [pages.people]: 'Люди',
  [pages.reports]: 'Отчеты',
}

export const pageIcons = {
  [pages.admin]: 'XXX',
  [pages.dashboard]: '',
  [pages.messages]: '',
  [pages.people]: '',
  [pages.reports]: '',
}

export const navigationItems = [
  pages.dashboard,
  pages.people,
  pages.messages,
  pages.reports,
  pages.admin,
]

const getRoutes = items =>
  items.reduce((obj, item) => {
    obj[item] = `/${item}`

    return obj
  }, {})

export const routes = getRoutes(navigationItems)
