import {ListsController} from './Controllers/ListsController.js';

import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  listsController = new ListsController()
  valuesController = new ValuesController();
}

window["app"] = new App();
