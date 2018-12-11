import {Component, Input, HostBinding, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'mac-task',
  templateUrl: './task.component.html',
  encapsulation: ViewEncapsulation.None
})

export class TaskComponent {
  @Input() task: any;
  @HostBinding('class.done')
  get done() {
    // debugger
    return this.task && this.task.done;
  }
}
