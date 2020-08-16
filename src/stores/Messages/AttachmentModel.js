import { action, observable } from 'mobx'
import _uniqueId from 'lodash/uniqueId'

export default class AttachmentModel {
  messageFormStore

  id = _uniqueId('attachment-')
  @observable selectedFile = null

  constructor(messageFormStore) {
    this.messageFormStore = messageFormStore
  }

  @action
  setSelectedFile(value) {
    this.selectedFile = value
  }

  get asJSON() {
    return {
      id: this.id,
      selectedFile: this.selectedFile,
    }
  }

  destroy = () => {
    this.messageFormStore.removeAttachment(this)
  }
}
