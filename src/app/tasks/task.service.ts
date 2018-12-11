import {Injectable} from '@angular/core';
import {ITask} from './task';

@Injectable()
export class TaskService {
  private tasks: ITask[] = [
    {id: 1, title: 'Task 1', done: false},
    {id: 2, title: 'Task 2', done: false},
    {id: 3, title: 'Task 3', done: true},
    {id: 4, title: 'Task 4', done: false}
  ];

  getTasks(): ITask[] {
    return this.tasks.slice();
  }

  addTask(task: ITask) {
    this.tasks.push({
      ...task,
      id: this.tasks.length + 1
    });
  }

  updateTask(task: ITask) {
    const index = this.tasks
      .findIndex((t) => t.id === task.id);
    this.tasks[index] = task;
  }
}
