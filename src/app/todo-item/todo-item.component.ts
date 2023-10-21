import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() item : any;

  @Output() removeItemEvent = new EventEmitter<number>();

  removeItem(itemId : number) {
    this.removeItemEvent.emit(itemId);
  }
}
