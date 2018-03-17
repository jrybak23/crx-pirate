import {Injectable} from '@angular/core';
import {OperaUrlHandlerService} from './opera-url-handler.service';
import {IframeService} from './iframe.service';

@Injectable()
export class DownloaderService {

  constructor(private operaUrlHandlerService: OperaUrlHandlerService, private iframe: IframeService) {
  }

  download(url: string) {
    if (!this.operaUrlHandlerService.isPluginPageUrl(url)) {
      console.error('is not plugin url page');
      return;
    }

    this.iframe.navigate(url);
    let pluginName = this.operaUrlHandlerService.extractPluginName(url);
    let downloadPluginUrl = this.operaUrlHandlerService.getDownloadPluginUrl(url);
    this.iframe.addDownloadFileScript(downloadPluginUrl, `${pluginName}.crx`);
  }
}
