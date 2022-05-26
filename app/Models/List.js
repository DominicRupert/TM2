import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";

export class List {
  constructor(data) {
    this.id = data.id || generateId();
    this.name = data.name;
    this.color = data.color;
    this.checked = false;
  }
  get tasksLeft() {
    let taskCount = 0;
    let tasksLeft = ProxyState.tasks.filter((c) => c.listId == this.id);
    tasksLeft = tasksLeft.filter((l) => l.checked == false);
    return tasksLeft.length;
  }
  get allTasks() {
    let allTasks = ProxyState.tasks.filter((a) => a.listId == this.id);
    return allTasks.length;
  }
  get Tasks() {
    let tasks = ProxyState.tasks.filter((t) => t.listId == this.id);
    let template = "";
    tasks.forEach((t) => (template = t.template));
    return template;
  }
  get Template() {
    return /*html*/ `
   
    <div class="card" >
  <div class="card-body" style="background-color: ${this.color}">
  <h3 class="text-light text-end">${this.name}
  <i class="mdi mdi-delete text-light selectable justify-content-end" onclick="app.listsController.deleteList('${this.id}')"></i></h3>

  <div><h3>Tasks Left: <span id='tasksLeft'>${this.tasksLeft}/${this.allTasks}</span></h3></div>
    <div class="tasks-list">
    <ul>
      ${this.Tasks}
    </ul>
    </div>
    <div class="list-group d-flex justify-content-end">
    <form class="mb-3" style="" onsubmit="app.tasksController.addTask('${this.id}')">
      <div class="input-group " >
<input type="text" class="form-control " placeholder="Task Name" id="task" required minlength="3" maxlength="50">
<button class="btn btn-outline-secondary" type="submit">add</button>
</div>
</form>
    </div>
  </div>
  </div>
 
    
  `;
  }
}
