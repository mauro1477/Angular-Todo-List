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
    new todoListItem('Apply for jobs')
  ];
  todoListText : String = "";
  title = 'My Check List';

  addTodoListItem(){
    this.items.push(new todoListItem(this.todoListText))
    this.todoListText = "";
  }
}
