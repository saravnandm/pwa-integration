import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule, RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { ModalModule } from 'ngx-bootstrap/modal';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ToastNoAnimationModule } from 'ngx-toastr';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { PartialRefProvider } from '@wm/core';
import {
    AppComponent,
    AppJSProvider,
    AppVariablesProvider,
    ComponentRefProvider,
    PrefabConfigProvider,
    WmNgRouteReuseStrategy,
    CanDeactivateNgPageGuard,
    WM_MODULES_FOR_ROOT,
    REQUIRED_MODULES_FOR_DYNAMIC_COMPONENTS,
    AppExtensionProvider
} from '@wm/runtime/base';


import { routes } from './app.routes';
import { AppJSProviderService } from '../framework/services/app-js-provider.service';
import { AppVariablesProviderService } from '../framework/services/app-variables-provider.service';
import { AppExtensionProviderService } from '../framework/services/app-extension.service';
import { ComponentRefProviderService } from '../framework/services/component-ref-provider.service';
import { PrefabConfigProviderService } from '../framework/services/prefab-config-provider.service';
import { AppCodeGenModule, xsrfHeaderName } from './app-codegen.module';
import { LazyLoadScriptsResolve } from './lazy-load-scripts.resolve';
import { initPrefabConfig } from './prefabs/prefab-config';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NotificationService } from './services/notification.service';
import { UpdateService } from './services/update.service';

export const modalModule = ModalModule.forRoot();
export const routerModule = RouterModule.forRoot(routes, {useHash: true, scrollPositionRestoration: 'top'});
export const toastrModule = ToastNoAnimationModule.forRoot({maxOpened: 1, autoDismiss: true });
export const bsDatePickerModule: ModuleWithProviders = BsDatepickerModule.forRoot();
export const httpClientXsrfModule = HttpClientXsrfModule.withOptions({
    cookieName: 'wm_xsrf_token',
    headerName: xsrfHeaderName
});

export const ngCircleProgressModule: ModuleWithProviders = NgCircleProgressModule.forRoot({});


export const isPrefabInitialized = initPrefabConfig();

@NgModule({
    declarations: [],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        RouterModule,
        HttpClientModule,

        modalModule,

        ngCircleProgressModule,

        routerModule,
        toastrModule,
        httpClientXsrfModule,
        bsDatePickerModule,

        WM_MODULES_FOR_ROOT,
        AppCodeGenModule,

        ServiceWorkerModule.register('custom-service-worker.js', { enabled: environment.production, registrationStrategy: 'registerImmediately' })
    ],
    providers: [
        {provide: AppJSProvider, useClass: AppJSProviderService},
        {provide: AppVariablesProvider, useClass: AppVariablesProviderService},
         {provide: AppExtensionProvider,useClass:AppExtensionProviderService},
        {provide: ComponentRefProvider, useClass: ComponentRefProviderService},
        {provide: PartialRefProvider, useClass: ComponentRefProviderService},
        {provide: PrefabConfigProvider, useClass: PrefabConfigProviderService},
        {provide: RouteReuseStrategy, useClass: WmNgRouteReuseStrategy},
        CanDeactivateNgPageGuard,
        LazyLoadScriptsResolve,
        NotificationService,
        UpdateService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
