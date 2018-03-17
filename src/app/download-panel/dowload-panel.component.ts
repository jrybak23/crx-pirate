import {Component, Input} from '@angular/core';
import {DownloaderService} from './downloader/downloader.service';

@Component({
  selector: 'app-download-panel',
  templateUrl: './download-panel.component.html',
  styleUrls: ['./download-panel.component.css']
})
export class DownloaderComponent {
  @Input()
  url: string;

  constructor(private downloaderService: DownloaderService) {
  }

  download() {
    this.downloaderService.download(this.url);
  }
}
