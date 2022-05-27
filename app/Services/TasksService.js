import {ProxyState} from "../AppState.js";
import {Task   } from "../Models/Task.js";
class TasksService{
    addTask(taskData){
        console.log('service up', taskData);
        ProxyState.tasks = [...ProxyState.tasks, new Task(taskData)];
    }
}
export const tasksService = new TasksService();
