import { generateId } from "../Utils/GenerateId.js"

export default class TaaskMaster {
    constructor({ name, taskId, id = generateId() }) {
        this.id = id
        this.taskId = taskId
        this.name = name
    }

    get Template() {
        return `<li>${this.name} 
        <span class="action" onclick="app ('${this.id}')"> x </span></li>`

    }
}