import TaskMasterController from "./Controllers/TaskMasterController";

class App {
  taskMasterController = new TaskMasterController();
}

window["app"] = new App();
