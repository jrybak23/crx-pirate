import {Route} from '@angular/router';
import {DownloaderComponent} from './dowload-panel.component';

export const downloadPanelRoute: Route = {path: '', component: DownloaderComponent, pathMatch: 'full'};
