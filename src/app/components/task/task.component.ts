import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/models/Task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  @Output() deleteTask: EventEmitter<Task> = new EventEmitter();

  constructor(private taskService: TaskService) {}

  ngOnInit() {}

  setClasses() {
    let classes = {
      task: true,
      'is-completed': this.task.isCompleted
    };
    return classes;
  }

  onEdit(task) {
    console.log('edited', task);
  }
  onDelete(task) {
    this.deleteTask.emit(task);
  }
  onComplete(task) {
    this.taskService.completeTask(task).subscribe(t => {
      task.isCompleted = true;
      console.log(t);
    });
  }
}
