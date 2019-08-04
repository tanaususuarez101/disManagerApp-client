import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadTeacherDataComponent } from './load-teacher-data.component';

describe('LoadTeacherDataComponent', () => {
  let component: LoadTeacherDataComponent;
  let fixture: ComponentFixture<LoadTeacherDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadTeacherDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadTeacherDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
