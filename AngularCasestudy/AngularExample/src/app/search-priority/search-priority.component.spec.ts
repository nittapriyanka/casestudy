import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPriorityComponent } from './search-priority.component';

describe('SearchPriorityComponent', () => {
  let component: SearchPriorityComponent;
  let fixture: ComponentFixture<SearchPriorityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPriorityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
