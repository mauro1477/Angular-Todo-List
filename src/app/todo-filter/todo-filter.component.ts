import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
 @Input() filter : any; 
  @Output() filterChange = new EventEmitter<any>();

  constructor (){};
  ngOnInit(): void {
    this.updateFilter('0');
  }
  listFilter : any = '0';

  updateFilter( value : any){
    this.filter = filters[value];
    this.filterChange.emit(filters[value]);
  }

}
