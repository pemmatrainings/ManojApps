import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CerfhomeComponent } from './cerfhome.component';

describe('CerfhomeComponent', () => {
  let component: CerfhomeComponent;
  let fixture: ComponentFixture<CerfhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CerfhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CerfhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
