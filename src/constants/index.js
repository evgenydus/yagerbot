export const pages = {
  admin: 'admin',
  dashboard: 'dashboard',
  groups: 'groups',
  messages: 'messages',
  people: 'people',
  reports: 'reports',
}

export const pageNames = {
  [pages.admin]: 'Админка',
  [pages.dashboard]: 'Главная панель',
  [pages.groups]: 'Группы',
  [pages.messages]: 'Сообщения',
  [pages.people]: 'Люди',
  [pages.reports]: 'Отчеты',
}

export const pageIcons = {
  [pages.admin]: ['far', 'tools'],
  [pages.dashboard]: ['far', 'home-lg'],
  [pages.groups]: ['far', 'ball-pile'],
  [pages.messages]: ['far', 'inbox-out'],
  [pages.people]: ['far', 'users-crown'],
  [pages.reports]: ['far', 'clipboard-list'],
}

export const navigationItems = [
  pages.dashboard,
  pages.messages,
  pages.people,
  pages.groups,
  pages.reports,
  pages.admin,
]

const getRoutes = items =>
  items.reduce((obj, item) => {
    obj[item] = `/${item}`

    return obj
  }, {})

export const routes = getRoutes(navigationItems)

export const colors = {
  alert: '#e53e3e',
  gray: {
    basic: '#cbd5e0',
    dark: '#a0aec0',
    light: '#e2e8f0',
  },
  highlight: '#c05621',
  primary: {
    basic: '#38b2ac',
    dark: '#319795',
    light: '#4fd1c5',
  },
  secondary: {
    basic: '#d53f8c',
    dark: '#b83280',
    light: '#ed64a6',
  },
}
