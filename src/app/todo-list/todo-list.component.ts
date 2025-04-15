import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

import { todoListItem } from '../../shared/modules/todoListItem';

@Component({
  selector: 'todo-list',
  imports: [NgFor, NgIf],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  @Input() todos : todoListItem[] = [];

  toggledIsComplete(item : todoListItem){
    item.isComplete = !item.isComplete;
    console.log(item);
  }

}
