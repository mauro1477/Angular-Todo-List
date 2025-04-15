import { Component, Output, EventEmitter } from '@angular/core';
import { todoListItem } from '../../shared/modules/todoListItem';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'todo-form',
  imports: [FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.scss'
})
export class TodoFormComponent {

  todoListText : string = "";

  @Output() addTodo = new EventEmitter<todoListItem>();

  addTodoListItem(){
    // this.items.push(new todoListItem(this.todoListText))
    this.addTodo.emit(new todoListItem(this.todoListText));
    this.todoListText = "";
  }

}
