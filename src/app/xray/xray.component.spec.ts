import { TestBed, inject } from '@angular/core/testing';
import { XrayComponent } from './xray.component';



describe('xray', () => {
  let expected = '';
  let notExpected = 'xxx';
  // let expectMatch: any;

  beforeEach(() => {
    expect(() => {
      expected = 'xray';
      notExpected = 'helllloososo';
      // expectMatch = new RegExp(/^xray/);
    });
  });

  afterEach(() => {
    expected = '';
    notExpected = '';
  });
  it('checks if xray is xray',
    () => expect('xray').toBe('xray'));
  it('checks if xray is not xray',
    () => expect('xray').not.toBe(notExpected));
  // it('checks if xray is starts with xray',
  //   () => expect('xray').toMatch(expectMatch));

});

// testing 1 second interval

// this doesnt work properly

describe('interval', () => {
  let expected = setInterval;
  let notExpected = '';

it('check if interval is 1000ms', 
  () => expect(expected).toBe('1000'));
it('check if interval is 1000ms', 
  () => expect(expected).not.toBe(notExpected));
});

// chechking parameter fields

describe('parameter contrast', () => {
  let contrast = '50' ;
  let notExpected = '';

it('check if login module loads', 
  () => expect(contrast).toBe('50'));
it('check if login module loads', 
  () => expect(contrast).not.toBe(notExpected));
});

describe('parameter lightvalue', () => {
  let lightValue = '50' ;
  let notExpected = '';

it('check if login module loads', 
  () => expect(lightValue).toBe('50'));
it('check if login module loads', 
  () => expect(lightValue).not.toBe(notExpected));
});

describe('parameter patientName', () => {
  let patientName = '*' ;
  let notExpected = '';

it('check if login module loads', 
  () => expect(patientName).toBe(undefined));
it('check if login module loads', 
  () => expect(patientName).not.toBe(notExpected));
});