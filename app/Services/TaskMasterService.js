import { ProxyState } from "../AppState.js";
import ListMaster from "../Models/ListMaster.js";
import TaaskMaster from "../Models/TaaskMaster.js";

class TaskMasterService {
  createList(rawList) {
    console.log("in service crete tsk")
    ProxyState.ListMaster = [...ProxyState.ListMaster, new ListMaster(rawList)]
  }
  deleteList(id) {
    ProxyState.ListMaster = ProxyState.ListMaster.filter(ListMaster => ListMaster.id != id)
  }
  addTask(rawTask) {
    ProxyState.TaaskMaster = [...ProxyState.TaaskMaster, new TaaskMaster(rawTask)]
  }
  removeTask(id) {
    ProxyState.TaaskMaster = ProxyState.TaaskMaster.filter(TaaskMaster => TaaskMaster.id != id)
  }
}
export const taskMasterService = new TaskMasterService();