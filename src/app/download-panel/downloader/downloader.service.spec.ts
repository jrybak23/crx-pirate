import {inject, TestBed} from '@angular/core/testing';

import {DownloaderService} from './downloader.service';

describe('DownloaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DownloaderService]
    });
  });

  it('should be created', inject([DownloaderService], (service: DownloaderService) => {
    expect(service).toBeTruthy();
  }));
});
