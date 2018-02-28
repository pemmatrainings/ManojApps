import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FldexmnrviewComponent } from './fldexmnrview.component';

describe('FldexmnrviewComponent', () => {
  let component: FldexmnrviewComponent;
  let fixture: ComponentFixture<FldexmnrviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FldexmnrviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FldexmnrviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
