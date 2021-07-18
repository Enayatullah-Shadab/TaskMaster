import { ProxyState } from "../AppState.js";
import ListMaster from "../Models/ListMaster.js";

class TaskMasterService {
  createList(rawTask) {
    console.log("in service crete tsk")
    ProxyState.ListMaster = [...ProxyState.ListMaster, new ListMaster(rawTask)]
  }

  addList(rawList) {
    ProxyState.List = [...ProxyState.List, new Topping(rawList)]
  }
}

export const taskMasterService = new TaskMasterService();