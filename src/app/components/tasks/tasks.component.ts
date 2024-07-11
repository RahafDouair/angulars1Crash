import { TaskService } from './../../services/task.service';
import { Component } from '@angular/core';
import { task } from '../../Task';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
 tasks:task[]=[];
 constructor(private taskService:TaskService){}
 ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
   this.taskService.getTasks().subscribe((tasks)=>this.tasks=tasks);
 }
}
