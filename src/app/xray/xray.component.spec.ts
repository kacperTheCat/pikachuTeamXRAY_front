import { TestBed, inject } from '@angular/core/testing';
import { XrayComponent } from './xray.component';



describe('xray', () => {
  let expected = '';
  let notExpected = '';
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
