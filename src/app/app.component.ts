import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { todoListItem } from '../shared/modules/todoListItem';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgFor,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  items : todoListItem[] = [
    new todoListItem('Clean Kitchen'),
    new todoListItem('Apply for jobs')
  ];
  title = 'My Check List';
}
