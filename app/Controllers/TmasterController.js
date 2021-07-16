import { ProxyState } from "../AppState.js";
import { taskMasterService } from "../Services/TmasterService.js"


//Private
function _draw() {
    let taskMaster = ProxyState.TaskMaster;
    let template = ''
    taskMaster.forEach(t => template += t.Template)
    document.getElementById("app").innerHTML = /*html*/`
  <button className="btn btn-info" onclick="app.TaskMasterController.createTask()">CreteTask</button>  
  <div className="card-columns TaskMaster">
      ${template}
  </div>
  `
}

//Public
export default class TaskMasterController {
    constructor() {
        ProxyState.on("TaskMaster", _draw);
        _draw()
    }

    CreteTask(event) {
        event.preventDefault()
        taskMasterService.CreteTask()
        console.log("button clicked")
    }

}
