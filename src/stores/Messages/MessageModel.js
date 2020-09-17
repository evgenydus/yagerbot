import _uniqueId from 'lodash/uniqueId'
import { action, computed, observable } from 'mobx'
import AttachmentModel from './AttachmentModel'
import MessageFormStore from './MessageForm'

export default class MessageModel {
  messagesStore

  id = _uniqueId('message-')
  title = ''
  text = ''
  @observable attachments = []

  constructor(messagesStore, message) {
    this.messagesStore = messagesStore
    this.setMessageData(message)
  }

  @computed
  get isActive() {
    return this.messagesStore.messageToEdit?.id === this.id
  }

  @computed
  get isEditInProgress() {
    return Boolean(this.messagesStore.messageToEdit)
  }

  @action
  setMessageData({ attachments, text, title }) {
    this.title = title
    this.text = text
    const newAttachments = attachments.map(
      a => new AttachmentModel(new MessageFormStore(this.messagesStore), a.selectedFile),
    )
    this.attachments.replace(newAttachments)
  }

  destroy = () => {
    this.messagesStore.removeMessage(this)
  }

  edit = () => {
    this.messagesStore.setMessageToEdit(this)
  }
}
