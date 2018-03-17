import {UrlHandler} from './url-handler';

export class OperaUrlHandlerService implements UrlHandler {
  private static reg = new RegExp('^https:\\/\\/addons.opera.com\\/[a-z]+\\/extensions\\/details\\/([a-z-]+)\\/*\\?*');

  isPluginPageUrl(url: string): boolean {
    return OperaUrlHandlerService.reg.test(url);
  }

  extractPluginName(url: string): string {
    let groups = OperaUrlHandlerService.reg.exec(url);
    return groups[1];
  }

  getDownloadPluginUrl(url: string): string {
    let pluginName = this.extractPluginName(url);
    return `https://addons.opera.com/extensions/download/${pluginName}`;
  }
}
