import { ProxyState } from "../AppState.js";
import { taskMasterService } from "../Services/TaskMasterService.js"


//Private
function _draw() {
    let taskMaster = ProxyState.TaskMaster;
    let template = ''
    taskMaster.forEach(t => template += t.Template)
    document.getElementById("cardList").innerHTML = template
}

//Public
export default class TaskMasterController {
    constructor() {
        ProxyState.on("TaskMaster", _draw);
        _draw()
    }
    createTask() {
        console.log("button clicked")
        taskMasterService.createTask

    }
}

