import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {
  todo : string = "";

  @Output() newItemEvent = new EventEmitter<string>();
  @ViewChild('todoInput') todoInput! : ElementRef<HTMLInputElement>;

  submitForm() {
    if(this.todo.trim() !== "") {
      this.newItemEvent.emit(this.todo);
      this.todo = "";
      this.todoInput.nativeElement.focus();
    }
  }
}
