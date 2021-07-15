import { ComponentFactoryResolver, NgModule } from '@angular/core';
import { CommonModule as NGCommonModule, APP_BASE_HREF } from '@angular/common';

import { FormsModule as ngFormsModule } from '@angular/forms';
import { BasicModule as WM_BasicModule } from '@wm/components/basic';
import { ProgressModule as WM_ProgressModule } from '@wm/components/basic/progress';
import { InputModule as WM_InputModule } from '@wm/components/input';
import { MenuModule as WM_MenuModule } from '@wm/components/navigation/menu';
import { NavbarModule as WM_NavbarModule } from '@wm/components/navigation/navbar';
import { BsDropdownModule as ngxBsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ComponentType,  RuntimeBaseModule } from '@wm/runtime/base';

    import { ComponentRefProviderService } from '../../../framework/services/component-ref-provider.service';



import { TopnavComponent } from './topnav.component';

const components = [TopnavComponent];

const requiredComponentModules = [
    ngFormsModule,
	WM_BasicModule,
	WM_ProgressModule,
	WM_InputModule,
	WM_MenuModule,
	WM_NavbarModule,
	ngxBsDropdownModule.forRoot()
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
export class TopnavModule {
    static rootComponent = TopnavComponent;
    constructor(componentFactoryResolver: ComponentFactoryResolver) {
        const cf = componentFactoryResolver.resolveComponentFactory(TopnavComponent);
        ComponentRefProviderService.registerComponentRef('topnav', ComponentType.PARTIAL, TopnavComponent, cf);
    }
}
