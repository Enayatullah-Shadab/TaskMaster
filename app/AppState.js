import TaskMaster from "./Models/TaskMaster.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {TaskMaster[]} */

  list = []
  TaskMaster = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, TaskMaster) {
    isValidProp(target, prop)
    target[prop] = TaskMaster
    target.emit(prop, TaskMaster)
    return true
  }
})
