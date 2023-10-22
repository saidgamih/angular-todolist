import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoMetaComponent } from './todo-meta.component';

describe('TodoMetaComponent', () => {
  let component: TodoMetaComponent;
  let fixture: ComponentFixture<TodoMetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoMetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoMetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
