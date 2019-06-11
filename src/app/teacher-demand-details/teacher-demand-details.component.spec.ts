import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherDemandDetailsComponent } from './teacher-demand-details.component';

describe('TeacherDemandDetailsComponent', () => {
  let component: TeacherDemandDetailsComponent;
  let fixture: ComponentFixture<TeacherDemandDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherDemandDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherDemandDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
