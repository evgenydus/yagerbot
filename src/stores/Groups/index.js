import { action, observable } from 'mobx'
import GroupModel from './GroupModel'

export default class Groups {
  rootStore

  @observable rawData = []
  @observable groups = []
  @observable isLoaded = false
  @observable groupToEdit = null
  @observable isGroupCreation

  constructor(rootStore) {
    this.rootStore = rootStore
  }

  get api() {
    return this.rootStore.api.groups
  }

  @action
  addGroup(groupData) {
    this.rawData.push(groupData)
    this.groups.push(new GroupModel(groupData, this))
  }

  @action
  load() {
    return this.api.getGroupList().then(groupsData => {
      this.setRawData(groupsData)

      const groups = groupsData.map(group => new GroupModel(group, this))

      this.setGroups(groups)
    })
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
  setGroups(array) {
    this.groups.replace(array)
  }

  @action
  setGroupToEdit(group) {
    this.isGroupCreation = false
    this.groupToEdit = group
  }

  @action
  setRawData(array) {
    this.rawData.replace(array)
    this.isLoaded = true
  }

  @action
  toggleGroupCreation = () => {
    this.isGroupCreation = !this.isGroupCreation
    // TODO: Discuss eslint rule 'no-unused-expressions'
    this.isGroupCreation
      ? this.rootStore.modalsStore.openModal()
      : this.rootStore.modalsStore.closeModal()
  }

  @action
  updateGroup({ group, rawGroup }) {
    const rawGroupIndex = this.rawData.findIndex(g => g.id === rawGroup.id)
    this.rawData.splice(rawGroupIndex, 1, rawGroup)

    const groupIndex = this.groups.findIndex(g => g.id === group.id)
    this.groups.splice(groupIndex, 1, group)
  }
}
