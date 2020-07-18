export const pages = {
  dashboard: 'dashboard',
  messages: 'messages',
  people: 'people',
  reports: 'reports',
}

export const pageNames = {
  [pages.dashboard]: 'Главная панель',
  [pages.messages]: 'Сообщения',
  [pages.people]: 'Люди',
  [pages.reports]: 'Отчеты',
}

export const pageIcons = {
  [pages.dashboard]: '',
  [pages.messages]: '',
  [pages.people]: '',
  [pages.reports]: '',
}

export const navigationItems = [pages.dashboard, pages.people, pages.messages, pages.reports]

const getRoutes = items =>
  items.reduce((obj, item) => {
    obj[item] = `/${item}`

    return obj
  }, {})

export const routes = getRoutes(navigationItems)
