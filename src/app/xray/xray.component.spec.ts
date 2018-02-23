import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XrayComponent } from './xray.component';

describe('XrayComponent', () => {
  let component: XrayComponent;
  let fixture: ComponentFixture<XrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
