export class DownloadLinkService {
  private link: HTMLLinkElement;

  constructor() {
    this.link = <HTMLLinkElement> document.getElementById('downloadLink');
  }


  clickLink(downloadPluginUrl: string): void {
    this.link.href = downloadPluginUrl;
    this.link.click();
  }
}
