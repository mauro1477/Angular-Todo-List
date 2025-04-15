import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component';
import { todoListItem } from '../shared/modules/todoListItem';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,TodoListComponent],
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
  listFilter : String = '0';

  get visibleListItems() : todoListItem[] {
    let value = this.listFilter;
    if(value === '0'){
      return this.items
    }else if(value === '1'){
      return this.items.filter(item => !item.isComplete);
    }else{
      return this.items.filter(item => item.isComplete);
    }
  };

  addTodoListItem(){
    this.items.push(new todoListItem(this.todoListText))
    this.todoListText = "";
  }

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
