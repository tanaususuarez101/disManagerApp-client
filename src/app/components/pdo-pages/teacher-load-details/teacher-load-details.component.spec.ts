import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherLoadDetailsComponent } from './teacher-load-details.component';

describe('TeacherLoadDetailsComponent', () => {
  let component: TeacherLoadDetailsComponent;
  let fixture: ComponentFixture<TeacherLoadDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherLoadDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherLoadDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
