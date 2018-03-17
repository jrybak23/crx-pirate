import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DownloaderComponent} from './download-panel/dowload-panel.component';
import {FormsModule} from '@angular/forms';
import {DownloaderService} from './download-panel/downloader/downloader.service';
import {HttpClientModule} from '@angular/common/http';
import {OperaUrlHandlerService} from './download-panel/downloader/opera-url-handler.service';
import {IframeService} from './download-panel/downloader/iframe.service';

@NgModule({
  declarations: [
    AppComponent,
    DownloaderComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  providers: [DownloaderService, OperaUrlHandlerService, IframeService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
