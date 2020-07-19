import { action, observable } from 'mobx'

export default class Groups {
  rootStore

  @observable rawData = []
  @observable groups = []
  @observable isLoaded = false

  constructor(rootStore) {
    this.rootStore = rootStore
  }

  get api() {
    return this.rootStore.api.groups
  }

  @action
  setRawData(array) {
    this.rawData.replace(array)
    this.isLoaded = true
  }

  @action
  load() {
    this.api.getGroupList().then(data => {
      this.setRawData(data)
    })
  }
}
