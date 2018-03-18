import {inject, TestBed} from '@angular/core/testing';

import {DownloadLinkService} from './download-link.service';

describe('DownloadLinkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DownloadLinkService]
    });
  });

  it('should be created', inject([DownloadLinkService], (service: DownloadLinkService) => {
    expect(service).toBeTruthy();
  }));
});
