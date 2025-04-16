import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component';
import { todoListItem } from '../shared/modules/todoListItem';
import { TodoFormComponent } from "./todo-form/todo-form.component";

const filters = [
  (item : todoListItem) => item,
  (item : todoListItem) => !item.isComplete,
  (item : todoListItem) => item.isComplete
];

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, TodoListComponent, TodoFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  items : todoListItem[] = [
    new todoListItem('Clean Kitchen'),
    new todoListItem('Apply for jobs'),
    new todoListItem('Get Coffe', true)

  ];

  todoListText : String = "";
  title = 'My Check List';
  listFilter : any = '0';

  get visibleListItems() : todoListItem[] {
    return this.items.filter(filters[this.listFilter]);
  };

  // filterChanged(value : any){
  //   if(value === '0'){
  //     this.visibleListItems = this.items
  //   }else if(value === '1'){
  //     this.visibleListItems = this.items.filter(item => !item.isComplete);
  //   }else{
  //     this.visibleListItems = this.items.filter(item => item.isComplete);
  //   }
  // }
}
