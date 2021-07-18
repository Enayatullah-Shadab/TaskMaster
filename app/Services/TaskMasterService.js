import { ProxyState } from "../AppState.js";
import TaskMaster from "../Models/TaskMaster.js";

class TaskMasterService {
  createTaskMaster() {
    ProxyState.TaskMaster = [...ProxyState.TaskMaster, new TaskMaster()]
  }
}

export const taskMasterService = new TaskMasterService();