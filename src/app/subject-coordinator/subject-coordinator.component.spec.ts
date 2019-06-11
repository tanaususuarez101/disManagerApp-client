import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectCoordinatorComponent } from './subject-coordinator.component';

describe('SubjectCoordinatorComponent', () => {
  let component: SubjectCoordinatorComponent;
  let fixture: ComponentFixture<SubjectCoordinatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectCoordinatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectCoordinatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
