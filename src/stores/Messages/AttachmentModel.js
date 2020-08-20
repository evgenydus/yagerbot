import { action, observable } from 'mobx'
import _uniqueId from 'lodash/uniqueId'

export default class AttachmentModel {
  messageFormStore

  id = _uniqueId('attachment-')
  @observable fileInputValue = ''

  constructor(messageFormStore) {
    this.messageFormStore = messageFormStore
  }

  @action
  setFileInputValue(value) {
    this.fileInputValue = value
  }

  destroy = () => {
    this.messageFormStore.removeAttachment(this)
  }
}
