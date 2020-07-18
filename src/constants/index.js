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

export const routes = {
  [pages.dashboard]: `/${pages.dashboard}`,
  [pages.messages]: `/${pages.messages}`,
  [pages.people]: `/${pages.people}`,
  [pages.reports]: `/${pages.reports}`,
}

export const pageIcons = {
  [pages.dashboard]: '',
  [pages.messages]: '',
  [pages.people]: '',
  [pages.reports]: '',
}

export const navigationItems = [pages.dashboard, pages.people, pages.messages, pages.reports]
