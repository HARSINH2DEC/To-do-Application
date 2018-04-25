import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoAppComponent } from './to-do-app.component';

describe('ToDoAppComponent', () => {
  let component: ToDoAppComponent;
  let fixture: ComponentFixture<ToDoAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
