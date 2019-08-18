import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadPdaComponent } from './load-pda.component';

describe('LoadPdaComponent', () => {
  let component: LoadPdaComponent;
  let fixture: ComponentFixture<LoadPdaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadPdaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadPdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
