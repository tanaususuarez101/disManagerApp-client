import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherPDAComponent } from './teacher-pda.component';

describe('TeacherPDAComponent', () => {
  let component: TeacherPDAComponent;
  let fixture: ComponentFixture<TeacherPDAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherPDAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherPDAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
