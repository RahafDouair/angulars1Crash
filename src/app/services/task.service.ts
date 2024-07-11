import { Injectable } from '@angular/core';
import {TASKS} from '../mock-task';
import {task} from '../Task'
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }
  getTasks():Observable<task[]>{
 const tasks= of(TASKS);
 return tasks;
  }
}
