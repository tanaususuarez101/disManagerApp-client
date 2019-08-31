import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestVeniaComponent } from './request-venia.component';

describe('RequestVeniaComponent', () => {
  let component: RequestVeniaComponent;
  let fixture: ComponentFixture<RequestVeniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestVeniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestVeniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
