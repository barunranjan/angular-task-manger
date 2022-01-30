import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {Task} from "../../Task"
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task
  faTimes = faTimes
  @Output() onDeleteTask:EventEmitter<Task> = new EventEmitter()
  @Output() onToggle:EventEmitter<Task>= new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  deleteTask(task:Task){
    this.onDeleteTask.emit(task)
  }
  onToggleReminder(task:Task){
    this.onToggle.emit(task)
  }

}
