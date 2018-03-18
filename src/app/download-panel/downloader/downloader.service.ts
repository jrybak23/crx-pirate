import {Injectable} from '@angular/core';
import {OperaUrlHandlerService} from './opera-url-handler.service';
import {DownloadLinkService} from './download-link.service';

@Injectable()
export class DownloaderService {

  constructor(private operaUrlHandlerService: OperaUrlHandlerService, private downloadLinkService: DownloadLinkService) {
  }

  download(url: string) {
    if (!this.operaUrlHandlerService.isPluginPageUrl(url)) {
      console.error('is not plugin url page');
      return;
    }

    let downloadPluginUrl = this.operaUrlHandlerService.getDownloadPluginUrl(url);
    this.downloadLinkService.clickLink(downloadPluginUrl);
  }
}
