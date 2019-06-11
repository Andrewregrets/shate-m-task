import { Component, OnInit } from '@angular/core';
import { Task, NewTask } from '../../models/Task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.getTasks().subscribe(tasks => (this.tasks = tasks));
  }

  deleteTask(task: Task) {
    console.log('delete me', task);
    this.taskService.deleteTask(task).subscribe(deletedTask => {
      this.tasks = this.tasks.filter(t => t.id !== deletedTask.id);
    });
  }

  addTask(newTask: NewTask) {
    this.taskService.addTask(newTask).subscribe(task => {
      this.tasks.push(task);
      console.log('addTask, task:', task);
    });
  }
}
