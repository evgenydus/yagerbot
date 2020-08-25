import { action, computed, observable } from 'mobx'
import { fileTypes } from '../../constants'
import AttachmentModel from './AttachmentModel'

export default class MessageFormStore {
  messagesStore

  id = null
  @observable title = ''
  @observable text = ''
  @observable attachments = []

  constructor(messagesStore) {
    this.messagesStore = messagesStore
    this.attachments.push(new AttachmentModel(this))
  }

  @computed
  get requestPayload() {
    return {
      attachments: this.trimAttachments(),
      id: this.id,
      text: this.text,
      title: this.title,
    }
  }

  get typeOptions() {
    return Object.keys(fileTypes).map(type => ({ label: fileTypes[type], value: type }))
  }

  @computed
  get isAddButtonVisible() {
    return this.attachments.every(attachment => attachment.selectedFile)
  }

  @action
  trimAttachments() {
    return this.attachments.filter(attachment => attachment.selectedFile)
  }

  @action
  updateAttachmentsList() {
    if (this.attachments.some(attachment => !attachment.selectedFile))
      this.attachments.replace([...this.trimAttachments(), new AttachmentModel(this)])
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
