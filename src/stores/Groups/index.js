import { action, observable, reaction } from 'mobx'
import GroupModel from './GroupModel'
import ModalsStore from '../Modal'

export default class GroupsStore {
  rootStore
  formModal

  @observable rawData = []
  @observable groups = []
  @observable isLoaded = false
  @observable groupToEdit = null

  constructor(rootStore) {
    this.rootStore = rootStore
    this.formModal = new ModalsStore(this)

    reaction(
      () => this.formModal.isOpen,
      isOpen => {
        if (isOpen) return
        this.setGroupToEdit(null)
      },
    )
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
  cancelEdit() {
    this.setGroupToEdit(null)
    this.formModal.closeModal()
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
    this.groupToEdit = group
  }

  @action
  setRawData(array) {
    this.rawData.replace(array)
    this.isLoaded = true
  }

  @action
  updateGroup({ group, rawGroup }) {
    const rawGroupIndex = this.rawData.findIndex(g => g.id === rawGroup.id)
    this.rawData.splice(rawGroupIndex, 1, rawGroup)

    const groupIndex = this.groups.findIndex(g => g.id === group.id)
    this.groups.splice(groupIndex, 1, group)
  }
}
