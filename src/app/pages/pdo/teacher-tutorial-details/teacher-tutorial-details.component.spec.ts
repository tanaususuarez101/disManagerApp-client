import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherTutorialDetailsComponent } from './teacher-tutorial-details.component';

describe('TeacherTutorialDetailsComponent', () => {
  let component: TeacherTutorialDetailsComponent;
  let fixture: ComponentFixture<TeacherTutorialDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherTutorialDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherTutorialDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
