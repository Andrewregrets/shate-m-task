import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NewTask } from 'src/app/models/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() addTask: EventEmitter<NewTask> = new EventEmitter();

  title: string;
  description: string;

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    const task: NewTask = {
      title: this.title,
      description: this.description,
      isCompleted: false
    };

    this.addTask.emit(task);
  }
}
