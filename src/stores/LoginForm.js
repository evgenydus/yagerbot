import { action, computed, observable } from 'mobx'

export default class LoginForm {
  onSuccess
  rootStore

  @observable username = ''
  @observable password = ''
  @observable errorMessage = ''

  constructor({ onSuccess = () => {}, rootStore }) {
    this.rootStore = rootStore
    this.onSuccess = onSuccess
  }

  get api() {
    return this.rootStore.api.auth
  }

  @computed
  get asJSON() {
    return {
      password: this.password,
      username: this.username,
    }
  }

  @computed
  get isValid() {
    const trimmedUsername = this.username.trim()
    const trimmedPassword = this.password.trim()

    return trimmedUsername.length > 3 && trimmedPassword.length > 3
  }

  @action
  setUsername(value) {
    this.username = value
    this.setErrorMessage('')
  }

  @action
  setPassword(value) {
    this.password = value
    this.setErrorMessage('')
  }

  @action
  setErrorMessage(value) {
    this.errorMessage = value
  }

  sendData() {
    if (!this.isValid) {
      this.setErrorMessage('Форма заполнена некорректно.')

      return Promise.resolve()
    }

    return this.api
      .logIn(this.asJSON)
      .then(this.onSuccess)
      .catch(error => {
        this.setErrorMessage(error.message)
      })
  }
}
