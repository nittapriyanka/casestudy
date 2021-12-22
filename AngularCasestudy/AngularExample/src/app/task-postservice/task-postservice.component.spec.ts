import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskPostserviceComponent } from './task-postservice.component';

describe('TaskPostserviceComponent', () => {
  let component: TaskPostserviceComponent;
  let fixture: ComponentFixture<TaskPostserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskPostserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskPostserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
