import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DownloaderComponent} from './download-panel/dowload-panel.component';
import {FormsModule} from '@angular/forms';
import {DownloaderService} from './download-panel/downloader/downloader.service';
import {HttpClientModule} from '@angular/common/http';
import {OperaUrlHandlerService} from './download-panel/downloader/opera-url-handler.service';
import {DownloadLinkService} from './download-panel/downloader/download-link.service';
import {InstructionsComponent} from './instructions/instructions.component';
import {RouterModule} from '@angular/router';
import {downloadPanelRoute} from './download-panel/download-panel.route';
import {instructionRoute} from './instructions/instructions.route';

@NgModule({
  declarations: [
    AppComponent,
    DownloaderComponent,
    InstructionsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([downloadPanelRoute, instructionRoute])
  ],
  providers: [
    DownloaderService,
    OperaUrlHandlerService,
    DownloadLinkService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
