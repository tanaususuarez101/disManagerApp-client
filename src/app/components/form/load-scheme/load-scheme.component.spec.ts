import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadSchemeComponent } from './load-scheme.component';

describe('LoadSchemeComponent', () => {
  let component: LoadSchemeComponent;
  let fixture: ComponentFixture<LoadSchemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadSchemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
