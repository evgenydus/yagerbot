import { action, computed, observable } from 'mobx'

export default class LoginFormStore {
  onSuccess
  rootStore

  @observable username = ''
  @observable password = ''
  @observable errorMessage = ''

  @observable isLoading = false

  constructor({ rootStore }) {
    this.rootStore = rootStore
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
  setErrorMessage(value) {
    this.errorMessage = value
  }

  @action
  setPassword(value) {
    this.password = value
    this.setErrorMessage('')
  }

  @action
  setUsername(value) {
    this.username = value
    this.setErrorMessage('')
  }

  sendData() {
    if (!this.isValid) {
      this.setErrorMessage('Форма заполнена некорректно.')

      return Promise.resolve()
    }

    this.isLoading = true

    return this.api
      .logIn(this.asJSON)
      .then(({ token }) => {
        this.rootStore.setAuthToken(token)
      })
      .catch(error => {
        this.setErrorMessage(error.message)
      })
      .finally(() => {
        this.isLoading = false
      })
  }
}
