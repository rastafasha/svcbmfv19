import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideServiceWorker } from '@angular/service-worker';
import { NgxPaginationModule } from 'ngx-pagination';
import { EnvironmentProviders, Provider, importProvidersFrom as angularImportProvidersFrom } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import {QRCodeModule} from 'angular2-qrcode';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(NgxPaginationModule, QRCodeModule,NgbCarouselConfig,),
    
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    })
  ]
};
function importProvidersFrom(module: any, NgbCarouselConfig: any, QRCodeModule: any): Provider | EnvironmentProviders {
  return angularImportProvidersFrom(module);
}

