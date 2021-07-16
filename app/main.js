import TaskMasterController from "./Controllers/TmasterController.js";

class App {
  taskMasterController = new TaskMasterController();
}

window["app"] = new App();
