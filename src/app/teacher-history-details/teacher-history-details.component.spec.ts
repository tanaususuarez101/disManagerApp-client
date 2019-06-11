import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherHistoryDetailsComponent } from './teacher-history-details.component';

describe('TeacherHistoryDetailsComponent', () => {
  let component: TeacherHistoryDetailsComponent;
  let fixture: ComponentFixture<TeacherHistoryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherHistoryDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherHistoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
