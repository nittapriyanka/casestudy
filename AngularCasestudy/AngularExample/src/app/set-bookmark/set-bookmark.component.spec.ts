import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetBookmarkComponent } from './set-bookmark.component';

describe('SetBookmarkComponent', () => {
  let component: SetBookmarkComponent;
  let fixture: ComponentFixture<SetBookmarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetBookmarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetBookmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
