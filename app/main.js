import {ListsController} from './Controllers/ListsController.js';
import {TasksController} from './Controllers/TasksController.js';
// import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  listsController = new ListsController()
  tasksController = new TasksController()
  // valuesController = new ValuesController();
}

window["app"] = new App();
