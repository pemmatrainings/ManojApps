import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FldexmnrhomeComponent } from './fldexmnrhome.component';

describe('FldexmnrhomeComponent', () => {
  let component: FldexmnrhomeComponent;
  let fixture: ComponentFixture<FldexmnrhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FldexmnrhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FldexmnrhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
