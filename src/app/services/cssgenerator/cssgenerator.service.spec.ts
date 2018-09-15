import { TestBed, inject } from '@angular/core/testing';

import { CssGeneratorService } from './cssgenerator.service';

describe('CssGeneratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CssGeneratorService]
    });
  });

  it('should be created', inject([CssGeneratorService], (service: CssGeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
