import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { todoListItem } from '../shared/modules/todoListItem';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgFor,NgIf,FormsModule],
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
  visibleListItems : todoListItem[] = this.items;
  addTodoListItem(){
    this.items.push(new todoListItem(this.todoListText))
    this.todoListText = "";
  }
  filterChanged(value : any){
    if(value === '0'){
      this.visibleListItems = this.items
    }else if(value === '1'){
      this.visibleListItems = this.items.filter(item => !item.isComplete);
    }else{
      this.visibleListItems = this.items.filter(item => item.isComplete);
    }
  }
}
