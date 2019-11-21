import { Component } from '@angular/core';
import { TodoListService } from './todo-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoListService]
})
export class AppComponent {
  content: string;

  constructor(private todoListService: TodoListService) { }
}
