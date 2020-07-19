import { action, observable } from 'mobx'
import GroupModel from './GroupModel'

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
  setGroups(array) {
    this.groups.replace(array)
  }

  @action
  addGroup(groupData) {
    this.rawData.push(groupData)
    this.groups.push(new GroupModel(groupData, this))
  }

  @action
  removeGroup(id) {
    const newGroups = this.groups.filter(group => group.id !== id)
    const newRawData = this.rawData.filter(group => group.id !== id)
    this.groups.replace(newGroups)
    this.rawData.replace(newRawData)

    this.api.deleteGroup(id)
  }

  @action
  load() {
    this.api.getGroupList().then(groupsData => {
      this.setRawData(groupsData)

      const groups = groupsData.map(group => new GroupModel(group, this))

      this.setGroups(groups)
    })
  }
}
