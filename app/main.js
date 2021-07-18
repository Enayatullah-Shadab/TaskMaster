import TaskMasterController from "./Controllers/TaskMasterController.js";

class App {
  taskMasterController = new TaskMasterController();
}

window["app"] = new App();
