import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component';
import { todoListItem } from '../shared/modules/todoListItem';
import { TodoFormComponent } from "./todo-form/todo-form.component";
import { TodoFilterComponent } from './todo-filter/todo-filter.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, TodoListComponent, TodoFormComponent, TodoFilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  items : todoListItem[] = [
    new todoListItem('Clean Kitchen'),
    new todoListItem('Apply for jobs'),
    new todoListItem('Get Coffe', true)

  ];
  filter : any;
}
