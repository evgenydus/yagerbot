import { action, observable } from 'mobx'
import _uniqueId from 'lodash/uniqueId'

export default class AttachmentModel {
  messageFormStore

  id = _uniqueId('attachment-')
  @observable selectedFile = null

  constructor(messageFormStore, file) {
    this.messageFormStore = messageFormStore
    this.setSelectedFile(file)
  }

  @action
  setSelectedFile(value) {
    this.selectedFile = value
  }

  destroy = () => {
    this.messageFormStore.removeAttachment(this)
  }
}
