import { ProxyState } from "../AppState.js";
import ListMaster from "../Models/ListMaster.js";
import TaaskMaster from "../Models/TaaskMaster.js";

class TaskMasterService {
  createList(rawList) {
    console.log("in service crete tsk")
    ProxyState.ListMaster = [...ProxyState.ListMaster, new ListMaster(rawList)]
  }

  addTask(rawTask) {
    ProxyState.TaaskMaster = [...ProxyState.Task, new TaaskMaster(rawTask)]
  }
}

export const taskMasterService = new TaskMasterService();