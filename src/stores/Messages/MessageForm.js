import { action, observable } from 'mobx'
import { fileTypes } from '../../constants'

export default class MessageFormStore {
  messagesStore

  id = null
  @observable title = ''
  @observable text = ''

  constructor(messagesStore, message) {
    this.messagesStore = messagesStore

    if (message) {
      this.id = message.id
      this.title = message.title
      this.text = message.text
    }
  }

  get requestPayload() {
    return {
      id: this.id,
      text: this.text,
      title: this.title,
    }
  }

  get typeOptions() {
    return Object.keys(fileTypes).map(type => ({ label: fileTypes[type], value: type }))
  }

  @action
  resetForm() {
    this.title = ''
    this.text = ''
  }

  @action
  setTitle(value) {
    this.title = value
  }

  @action
  setText(value) {
    this.text = value
  }
}
