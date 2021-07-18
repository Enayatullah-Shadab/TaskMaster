import { ProxyState } from "../AppState.js";
import { taskMasterService } from "../Services/TaskMasterService.js"


//Private
function _draw() {
    let myList = ProxyState.ListMaster;
    let template = ''
    myList.forEach(myList => template += myList.Template)
    document.getElementById("cardList").innerHTML = template
}

//Public
export default class TaskMasterController {
    constructor() {
        ProxyState.on("ListMaster", _draw);
        _draw()
    }
    createList() {
        event.preventDefault()
        console.log("create list in controller")
        let form = event.target
        let rawTask = {
            name: form.name.value
        }
        taskMasterService.createList(rawTask)
        form.reset()
    }
    addTask(TaskId) {
        event.preventDefault()
        console.log("create task in controller")

        let form = event.target
        let rawTask = {
            TaskId,
            name: form.task.value
        }
        ListMasterService.addTask(rawTask)
        form.reset()
    }
}

