import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  public items: TodoListItem[] = window.localStorage.items ? JSON.parse(window.localStorage.items) : [];

  addItem(content) {
    this.items.push({ content, completed: false });
    this.updateItems();
  }

  removeItem(item: TodoListItem) {
    if (this.items.includes(item)) {
      this.items.splice(this.items.indexOf(item), 1);
      this.updateItems();
    }
  }

  updateItems() {
    window.localStorage.items = JSON.stringify(this.items);
  }

  constructor() { }
}

export class TodoListItem {
  content: string;
  completed: boolean;
}
