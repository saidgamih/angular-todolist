import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  @Input() items : any[] = [];

  @Output() removeItemEvent = new EventEmitter<number>();
  @Output() changeItemStatusEvent = new EventEmitter<number>();

  removeItem(itemId : number) {
      this.removeItemEvent.emit(itemId);
  }

  changeItemStatus(itemId : number) {
    this.changeItemStatusEvent.emit(itemId)
  }
}
