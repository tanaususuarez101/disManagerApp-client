import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSchemeComponent } from './details-scheme.component';

describe('DetailsSchemeComponent', () => {
  let component: DetailsSchemeComponent;
  let fixture: ComponentFixture<DetailsSchemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsSchemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
