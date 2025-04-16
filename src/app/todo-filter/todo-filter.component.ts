import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { todoListItem } from '../../shared/modules/todoListItem';
import { FormsModule } from '@angular/forms';

const filters = [
  (item : todoListItem) => item,
  (item : todoListItem) => !item.isComplete,
  (item : todoListItem) => item.isComplete
]


@Component({
  selector: 'todo-filter',
  imports: [FormsModule],
  templateUrl: './todo-filter.component.html',
  styleUrl: './todo-filter.component.scss'
})
export class TodoFilterComponent implements OnInit {  
  @Output() filter = new EventEmitter<any>();
  constructor (){};
  ngOnInit(): void {
    this.changeFilter('0');
  }
  listFilter : any = '0';

  changeFilter( value : any){
    this.filter.emit(filters[value]);
  }

}
