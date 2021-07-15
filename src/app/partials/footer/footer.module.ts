import { ComponentFactoryResolver, NgModule } from '@angular/core';
import { CommonModule as NGCommonModule, APP_BASE_HREF } from '@angular/common';

import { BasicModule as WM_BasicModule } from '@wm/components/basic';
import { ProgressModule as WM_ProgressModule } from '@wm/components/basic/progress';
import { LayoutGridModule as WM_LayoutGridModule } from '@wm/components/containers/layout-grid';
import { ComponentType,  RuntimeBaseModule } from '@wm/runtime/base';

    import { ComponentRefProviderService } from '../../../framework/services/component-ref-provider.service';



import { FooterComponent } from './footer.component';

const components = [FooterComponent];

const requiredComponentModules = [
    WM_BasicModule,
	WM_ProgressModule,
	WM_LayoutGridModule
];

const requiredPartialModules = [
    
];

@NgModule({
    declarations: components,
    imports: [
        ...requiredComponentModules,
        ...requiredPartialModules,
        NGCommonModule,
        RuntimeBaseModule
    ],
    exports: components,
    entryComponents: components
})
export class FooterModule {
    static rootComponent = FooterComponent;
    constructor(componentFactoryResolver: ComponentFactoryResolver) {
        const cf = componentFactoryResolver.resolveComponentFactory(FooterComponent);
        ComponentRefProviderService.registerComponentRef('footer', ComponentType.PARTIAL, FooterComponent, cf);
    }
}
