import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";

export class List {
  constructor(listData) {
    this.id = listData.id || generateId();
    this.name = listData.name;
    this.color = listData.color;
    this.date = new Date(listData.date);
    this.checked = listData.checked;
  }

  get Template() {
    return /*html*/ `
    <div class="card">
      <div class="card-body" style="background-color: ${this.color}">
        <h3 class="text-light">${this.name}, ${this.date.toDateString()}
          <i class="mdi mdi-delete text-light selectable justify-content-end"
            onclick="app.listsController.deleteList('${this.id}')"></i>
        </h3>
    
        <div class="list-group d-flex justify-content-end pt-4">
          <form class="mb-3" style="" onsubmit="app.tasksController.addTask('${this.id}')">
            <div class="input-group ">
              <input type="text" class="form-control " placeholder="Task Name" id="body" required minlength="3"
                maxlength="50">
              <button class="btn btn-outline-secondary" type="submit">add</button>
            </div>
          </form>
          ${this.Tasks}
        </div>
      </div>
    </div>

    
  `;
  }

  get Tasks() {
    let tasks = ProxyState.tasks.filter((t) => t.listId === this.id);
    let template = "";
    tasks.forEach((t) => (template += t.Template));
    return template;
  }


}
