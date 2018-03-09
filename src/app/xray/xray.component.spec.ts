import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { MaterialModule } from '@app/material.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { XrayComponent } from './xray.component';


// testing 1 second interval

// this doesnt work properly

// describe('interval', () => {
//   let expected = setInterval;
//   let notExpected = '';

// it('check if interval is 1000ms', 
//   () => expect(expected).toBe('1000'));
// it('check if interval is 1000ms', 
//   () => expect(expected).not.toBe(notExpected));
// });

// // checking parameter fields

describe('Xray component', () => {
  let component: XrayComponent;
  let fixture: ComponentFixture<XrayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FlexLayoutModule,
        MaterialModule,
        SharedModule,
        RouterTestingModule,
        TranslateModule.forRoot(),
        ReactiveFormsModule,
        CoreModule
      ],
      declarations: [XrayComponent]
    });
  fixture = TestBed.createComponent(XrayComponent);

  component = fixture.componentInstance;

  })
  it('parameter contrast', () => {
    // let contrast = component.lightValue;
    expect(component).toBeTruthy();
  
  // it('check if login module loads', 
  //   () => expect(contrast).not.toBe('50'));
  
  });
});



// describe('parameter lightvalue', () => {
//   let lightValue = '50' ;
//   let notExpected = '';

// it('check if login module loads', 
//   () => expect(lightValue).toBe('50'));
// it('check if login module loads', 
//   () => expect(lightValue).not.toBe(notExpected));
// });

// describe('parameter patientName', () => {
//   let patientName = '*' ;
//   let notExpected = '';

// it('check if login module loads', 
//   () => expect(patientName).toBe(undefined));
// it('check if login module loads', 
//   () => expect(patientName).not.toBe(notExpected));
// });