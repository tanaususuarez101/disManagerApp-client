import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPdaComponent } from './details-pda.component';

describe('DetailsPdaComponent', () => {
  let component: DetailsPdaComponent;
  let fixture: ComponentFixture<DetailsPdaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsPdaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
