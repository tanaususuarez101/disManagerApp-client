import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVenia1Component } from './form-venia1.component';

describe('FormVenia1Component', () => {
  let component: FormVenia1Component;
  let fixture: ComponentFixture<FormVenia1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormVenia1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormVenia1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
