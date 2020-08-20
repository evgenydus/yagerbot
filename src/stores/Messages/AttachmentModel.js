import _uniqueId from 'lodash/uniqueId'
import { action, observable } from 'mobx'

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
}
