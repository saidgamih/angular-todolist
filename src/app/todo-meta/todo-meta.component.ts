import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-meta',
  templateUrl: './todo-meta.component.html',
  styleUrls: ['./todo-meta.component.scss']
})
export class TodoMetaComponent {
  @Input() items : any[] = [];

  get doneCount() {
    return this.items.filter(item => item.done).length;
  }
}
