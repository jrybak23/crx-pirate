import {inject, TestBed} from '@angular/core/testing';

import {OperaUrlHandlerService} from './opera-url-handler.service';

describe('OperaUrlHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OperaUrlHandlerService]
    });
  });

  it('should work', inject([OperaUrlHandlerService], (service: OperaUrlHandlerService) => {
    let url = "https://addons.opera.com/en/extensions/details/getthemall-any-file-downloader?foo";
    let badUrl = "https://chrome.google.com/webstore/detail/postman-interceptor/aicmkgpgakddgnaphhhpliifpcfhicfo?hl=en";
    expect(service.isPluginPageUrl()).toBeTruthy();
    expect(service.isPluginPageUrl()).toBeFalsy();
    expect(service.extractPluginName(url)).toEqual("getthemall-any-file-downloader");

    expect(service.getDownloadPluginUrl(url)).toEqual("https://addons.opera.com/extensions/download/getthemall-any-file-downloader")
  }));
});
