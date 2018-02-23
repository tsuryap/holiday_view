import { TestBed, inject } from '@angular/core/testing';

import { HoliListService } from './holi-list.service';

describe('HoliListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HoliListService]
    });
  });

  it('should be created', inject([HoliListService], (service: HoliListService) => {
    expect(service).toBeTruthy();
  }));
});
