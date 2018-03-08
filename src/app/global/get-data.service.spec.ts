import { TestBed, async,inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { GetDataService } from './get-data.service';
import { imgAddress, machineInfo, xRayImage } from '@app/global/address';


describe('GetDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetDataService, HttpClientTestingModule, HttpTestingController ],
      imports: [HttpClientTestingModule]
    });
  });

  it(`should create`, async(inject([HttpTestingController, GetDataService],
    (httpClient: HttpTestingController, apiService: GetDataService) => {
      expect(GetDataService).toBeTruthy();
  })));
});

// testing imgAddress
describe('Connection', () => {
  let expected = 'http://10.28.68.119/api/camera';
  let notExpected = '';

  it('check if IP address is given',
  () => expect(expected).toBe(imgAddress));
it('check if IP address is given',
  () => expect(expected).not.toBe(notExpected));
})

  // testing machineInfo
describe('Connection', () => {
  let expectedMachine = 'http://10.28.68.119/api/connectiondetails';
  let notExpected = '';

  it('check if IP address is given',
  () => expect(expectedMachine).toBe(machineInfo));
it('check if IP address is given',
  () => expect(expectedMachine).not.toBe(notExpected));
})

//texting xRayImage
describe('Connection', () => {
  let expectedImage = 'http://10.28.68.119/api/camera/capture';
  let notExpected = '';

  it('check if IP address is given',
  () => expect(expectedImage).toBe(xRayImage));
it('check if IP address is given',
  () => expect(expectedImage).not.toBe(notExpected));
})


