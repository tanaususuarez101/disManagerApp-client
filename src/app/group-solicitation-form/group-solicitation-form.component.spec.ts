import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupSolicitationFormComponent } from './group-solicitation-form.component';

describe('GroupSolicitationFormComponent', () => {
  let component: GroupSolicitationFormComponent;
  let fixture: ComponentFixture<GroupSolicitationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupSolicitationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupSolicitationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
