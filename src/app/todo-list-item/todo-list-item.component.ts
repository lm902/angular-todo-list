import { Component, OnInit, Input } from '@angular/core';
import { TodoListItem, TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css'],
  providers: [TodoListService]
})
export class TodoListItemComponent implements OnInit {
  @Input()
  item: TodoListItem;
  @Input()
  todoListService: TodoListService;
  classes = {
    completed: false
  };

  constructor() { }

  ngOnInit() {
    this.updateClasses();
  }

  updateClasses() {
    this.classes.completed = this.item.completed;
  }

}
