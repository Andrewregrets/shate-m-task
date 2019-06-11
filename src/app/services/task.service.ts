import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task, NewTask } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks = [
    {
      id: 1,
      title: 'Моя первая задача',
      description: 'Сделай что-нибудь, чел',
      isCompleted: false
    },
    {
      id: 2,
      title: 'Моя вторая задача',
      description: 'Ну сделай что-нибудь, лошпек',
      isCompleted: true
    },
    {
      id: 3,
      title: 'Моя третья задача',
      description: 'ДЕЛАЙ :<',
      isCompleted: false
    }
  ];

  constructor() {}

  getTasks(): Observable<Task[]> {
    return of(this.tasks);
  }

  completeTask(task: Task): Observable<Task> {
    return of(task);
  }

  deleteTask(task: Task): Observable<Task> {
    this.tasks = this.tasks.filter(t => t.id !== task.id);
    return of(task);
  }

  addTask(newTask: NewTask): Observable<Task> {
    return of({
      ...newTask,
      id:
        this.tasks.reduce((prev, cur) => (cur.id > prev ? cur.id : prev), 0) + 1
    });
  }
}
