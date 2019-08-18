import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySubjectComponent } from './user-subject.component';

describe('MySubjectComponent', () => {
  let component: MySubjectComponent;
  let fixture: ComponentFixture<MySubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
