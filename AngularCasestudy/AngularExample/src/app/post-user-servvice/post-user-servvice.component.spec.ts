import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostUserServviceComponent } from './post-user-servvice.component';

describe('PostUserServviceComponent', () => {
  let component: PostUserServviceComponent;
  let fixture: ComponentFixture<PostUserServviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostUserServviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostUserServviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
