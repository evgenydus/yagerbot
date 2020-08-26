import _uniqueId from 'lodash/uniqueId'
import { computed } from 'mobx'

export default class MessageModel {
  messagesStore

  id = _uniqueId('message-')
  title = ''
  text = ''
  attachments = []

  constructor({ attachments, text, title }, messagesStore) {
    this.messagesStore = messagesStore

    this.title = title
    this.text = text
    this.attachments = attachments
  }

  @computed
  get isActive() {
    return this.messagesStore.messageToEdit?.id === this.id
  }

  @computed
  get isEditInProgress() {
    return Boolean(this.messagesStore.messageToEdit)
  }

  destroy = () => {
    this.messagesStore.removeMessage(this)
  }

  edit = () => {
    this.messagesStore.setMessageToEdit(this)
  }
}
