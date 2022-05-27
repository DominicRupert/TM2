import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";
import { Pop } from "../Utils/Pop.js";
function _drawLists() {
  let template = "";
  const lists = ProxyState.lists;
  lists.forEach((l) => (template += l.Template));
  document.getElementById("lists").innerHTML = template;
}

export class ListsController {
  constructor() {
    ProxyState.on("lists", _drawLists);

    _drawLists();
  }

  createList() {
    window.event.preventDefault();

    let form = window.event.target;
    let listData = {
      name: form.name.value,
      color: form.color.value,
      date: form.date.value,
    };
    listsService.createList(listData);
  }

  deleteList(id) {
    if (confirm("Are you sure you want to delete this list?")) {
      listsService.deleteList(id);
    }
  }
}
