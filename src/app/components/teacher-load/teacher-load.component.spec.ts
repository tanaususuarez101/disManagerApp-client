import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherLoadComponent } from './teacher-load.component';

describe('TeacherLoadComponent', () => {
  let component: TeacherLoadComponent;
  let fixture: ComponentFixture<TeacherLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
