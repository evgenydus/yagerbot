import { action, observable } from 'mobx'
import _uniqueId from 'lodash/uniqueId'
import { fileTypes } from '../../constants'
import AttachmentModel from './AttachmentModel'

export default class MessageFormStore {
  messagesStore

  id = _uniqueId('message-')
  @observable title = ''
  @observable text = ''
  @observable attachments = []

  constructor(messagesStore) {
    this.messagesStore = messagesStore
    this.attachments.push(new AttachmentModel(this))
  }

  get requestPayload() {
    return {
      attachments: this.attachments.map(attachment => attachment.asJSON),
      id: this.id,
      text: this.text,
      title: this.title,
    }
  }

  get typeOptions() {
    return Object.keys(fileTypes).map(type => ({ label: fileTypes[type], value: type }))
  }

  @action
  addAttachment = () => {
    this.attachments.push(new AttachmentModel(this))
  }

  @action
  resetForm() {
    this.title = ''
    this.text = ''
    this.attachments.replace([new AttachmentModel(this)])
  }

  @action
  setTitle(value) {
    this.title = value
  }

  @action
  setText(value) {
    this.text = value
  }

  @action
  removeAttachment(attachment) {
    this.attachments.remove(attachment)
  }
}
