export class IframeService {
  private iframe: HTMLIFrameElement;

  constructor() {
    this.iframe = <HTMLIFrameElement> document.getElementById('iframe');
    this.iframe.frameBorder = '0';
    this.iframe.style = 'display: none';
  }

  navigate(url: string) {
    this.iframe.src = url;
  }

  addDownloadFileScript(downloadUrl: string, fileName: string) {
    let code = 'var data = null;                                                                             ' +
      '                                                                                                      ' +
      ' var xhr = new XMLHttpRequest();                                                                      ' +
      ' xhr.withCredentials = true;                                                                          ' +
      '                                                                                                      ' +
      ' xhr.addEventListener(\'readystatechange\', function () {                                             ' +
      '   if (this.readyState === 4) {                                                                       ' +
      '     var blob = this.response;                                                                        ' +
      '     var blobUrl = window.URL.createObjectURL(new Blob([blob], {type: blob.type}));                   ' +
      '     console.log(blobUrl);                                                                            ' +
      '     var a = document.createElement(\'a\');                                                           ' +
      '     a.style = \'display: none\';                                                                     ' +
      '     a.href = blobUrl;                                                                                ' +
      '     a.download = \'' + fileName + '\';                                                               ' +
      '     a.click();                                                                                       ' +
      '   }                                                                                                  ' +
      ' });                                                                                                  ' +
      '                                                                                                      ' +
      ' xhr.open(\'GET\',\'' + downloadUrl + '\');  ' +
      ' xhr.send(data);                                                                                      ';

    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = code;
    this.iframe.appendChild(script);
  }
}
