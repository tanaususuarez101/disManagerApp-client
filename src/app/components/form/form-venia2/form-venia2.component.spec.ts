import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVenia2Component } from './form-venia2.component';

describe('FormVenia2Component', () => {
  let component: FormVenia2Component;
  let fixture: ComponentFixture<FormVenia2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormVenia2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormVenia2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
