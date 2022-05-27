import { generateId } from "../Utils/generateId.js";

export class Task{
    constructor(data){
        this.id = data.id || generateId();
        this.listId = data.listId
        this.title = data.title
        this.body = data.body

    }
    get Template(){
        return `
        <p class="d-flex justify-content-between"> ${this.title} <span> ${this.body}</span>
        <i class="mdi mdi-delete selectable px-3" onclick="app.itemsController.deleteItem('${this.id}')"></i>
        </p>
        `
      }
}