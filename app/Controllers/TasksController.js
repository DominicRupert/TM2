import { ProxyState } from "../AppState.js";
import { tasksService } from "../Services/TasksService.js";


export class TasksController {
    constructor() {
        console.log('TasksController up', ProxyState.tasks);
    }


    addTask(listId) {
        window.event.preventDefault();
        console.log('service up', listId);
        let form = window.event.target;
        let taskData = {
            listId: listId,
            title: form.title.value,
            body: form.body.value
        }
        tasksService.addTask(taskData);}
    }