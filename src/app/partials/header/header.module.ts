import { ComponentFactoryResolver, NgModule } from '@angular/core';
import { CommonModule as NGCommonModule, APP_BASE_HREF } from '@angular/common';

import { FormsModule as ngFormsModule } from '@angular/forms';
import { BasicModule as WM_BasicModule } from '@wm/components/basic';
import { ProgressModule as WM_ProgressModule } from '@wm/components/basic/progress';
import { SearchModule as WM_SearchModule } from '@wm/components/basic/search';
import { LayoutGridModule as WM_LayoutGridModule } from '@wm/components/containers/layout-grid';
import { TypeaheadModule as ngxTypeaheadModule } from 'ngx-bootstrap/typeahead';
import { ComponentType,  RuntimeBaseModule } from '@wm/runtime/base';

    import { ComponentRefProviderService } from '../../../framework/services/component-ref-provider.service';



import { HeaderComponent } from './header.component';

const components = [HeaderComponent];

const requiredComponentModules = [
    ngFormsModule,
	WM_BasicModule,
	WM_ProgressModule,
	WM_SearchModule,
	WM_LayoutGridModule,
	ngxTypeaheadModule.forRoot()
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
export class HeaderModule {
    static rootComponent = HeaderComponent;
    constructor(componentFactoryResolver: ComponentFactoryResolver) {
        const cf = componentFactoryResolver.resolveComponentFactory(HeaderComponent);
        ComponentRefProviderService.registerComponentRef('header', ComponentType.PARTIAL, HeaderComponent, cf);
    }
}
