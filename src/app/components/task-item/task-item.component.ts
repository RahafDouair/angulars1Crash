import { task } from './../../Task';
import { Component, Input } from '@angular/core';
 import {faTimes} from '@fortawesome/free-solid-svg-icons';
 import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
 import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input()
  task!: task;
  faTimes=faTimes;
  faCoffee = faCoffee;
}
