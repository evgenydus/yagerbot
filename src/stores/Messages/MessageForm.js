import { action, computed, observable, reaction } from 'mobx'
import { fileTypes } from '../../constants'
import AttachmentModel from './AttachmentModel'
import MessageModel from './MessageModel'

// TODO: Fix attachment edit

export default class MessageFormStore {
  messagesStore

  id = null
  @observable title = ''
  @observable text = ''
  @observable attachments = []
  @observable isLoading = false

  constructor(messagesStore) {
    this.messagesStore = messagesStore
    this.setFormData(messagesStore.messageToEdit)

    reaction(
      () => this.emptyAttachmentsCount,
      count => {
        if (count <= 1) return
        this.refreshAttachmentsList()
      },
    )
  }

  get api() {
    return this.messagesStore.api
  }

  @computed
  get requestPayload() {
    return {
      // attachments: this.filledAttachments,
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

  @computed
  get emptyAttachmentsCount() {
    return this.attachments.filter(attachment => !attachment.selectedFile).length
  }

  @computed
  get filledAttachments() {
    return this.attachments.filter(attachment => Boolean(attachment.selectedFile))
  }

  @action
  refreshAttachmentsList() {
    this.attachments.replace([...this.filledAttachments, new AttachmentModel(this)])
  }

  @action
  addAttachment = () => {
    this.attachments.push(new AttachmentModel(this))
  }

  @action
  cancelEdit = () => {
    this.messagesStore.setMessageToEdit(null)
  }

  @action
  resetForm() {
    this.title = ''
    this.text = ''
    this.attachments.replace([new AttachmentModel(this)])
  }

  @action
  setFormData(message) {
    if (message) {
      const { attachments, id, text, title } = message

      this.id = id
      this.title = title
      this.text = text
      this.attachments.replace(attachments)
    } else {
      this.attachments.push(new AttachmentModel(this))
    }
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

  @action
  updateData = () => {
    this.messagesStore.updateMessage(new MessageModel(this.messagesStore, this.requestPayload))
    this.cancelEdit()
  }

  sendData() {
    this.isLoading = true

    return this.api
      .createMessage(this.requestPayload)
      .then(messageData => {
        this.messagesStore.addMessage(messageData)
        this.resetForm()
      })
      .finally(() => {
        this.isLoading = false
      })
  }
}
