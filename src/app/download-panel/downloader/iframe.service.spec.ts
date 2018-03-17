import {inject, TestBed} from '@angular/core/testing';

import {IframeService} from './iframe.service';

describe('IframeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IframeService]
    });
  });

  it('should be created', inject([IframeService], (service: IframeService) => {
    expect(service).toBeTruthy();
  }));
});
