import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCoordinatorComponent } from './user-coordinator.component';

describe('UserCoordinatorComponent', () => {
  let component: UserCoordinatorComponent;
  let fixture: ComponentFixture<UserCoordinatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCoordinatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCoordinatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
