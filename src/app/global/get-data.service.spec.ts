import { TestBed, async,inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { GetDataService } from './get-data.service';

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
