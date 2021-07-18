import { ProxyState } from "../AppState.js";
import { taskMasterService } from "../Services/TaskMasterService.js"


//Private
function _draw() {
    let myList = ProxyState.ListMaster;
    let template = ''
    console.log(myList.name)
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
        let rawList = {
            name: form.name.value
        }
        taskMasterService.createList(rawList)
        form.reset()
    }
    deleteList(id) {
        taskMasterService.deleteList(id)
    }
    addTask(ListId) {
        event.preventDefault()
        console.log("create task in controller")
        debugger;

        let form = event.target
        let rawTask = {
            ListId,
            name: form.task.value
        }
        taskMasterService.addTask(rawTask)
        form.reset()
    }
    removeTaaskMaster(id) {
        pizzasService.removeTaaskMaster(id)
    }
}

