import { ProxyState } from "../AppState.js";
import { taskMasterService } from "../Services/TmasterService.js"


//Private
function _draw() {
    let taskMaster = ProxyState.TaskMaster;
    let template = ''
    taskMaster.forEach(t => template += t.Template)
    document.getElementById("app").innerHTML = template
}

//Public
export default class TaskMasterController {
    constructor() {
        ProxyState.on("TaskMaster", _draw);
        _draw()
    }

    createTask(event) {
        taskMasterService.createTask
        console.log("button clicked")
    }

}
