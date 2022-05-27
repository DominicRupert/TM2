import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";

class ListsService {
  createList(listData) {
    console.log('service up', listData);
    ProxyState.lists = [...ProxyState.lists, new List(listData)];
   
  }


  deleteList(id) {
    ProxyState.lists = ProxyState.lists.filter((l) => l.id !== id);
  }
}

export const listsService = new ListsService();
