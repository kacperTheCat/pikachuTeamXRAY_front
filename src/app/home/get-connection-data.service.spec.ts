import { TestBed, inject } from '@angular/core/testing';

import { GetConnectionDataService } from './get-connection-data.service';

describe('GetConnectionDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetConnectionDataService]
    });
  });

  it('should be created', inject([GetConnectionDataService], (service: GetConnectionDataService) => {
    expect(service).toBeTruthy();
  }));
});
