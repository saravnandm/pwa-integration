import { ComponentFactoryResolver, NgModule } from '@angular/core';
import { CommonModule as NGCommonModule, APP_BASE_HREF } from '@angular/common';

import { FormsModule as ngFormsModule } from '@angular/forms';
import { ReactiveFormsModule as ngReactiveFormsModule } from '@angular/forms';
import { BasicModule as WM_BasicModule } from '@wm/components/basic';
import { ProgressModule as WM_ProgressModule } from '@wm/components/basic/progress';
import { LayoutGridModule as WM_LayoutGridModule } from '@wm/components/containers/layout-grid';
import { FormModule as WM_FormModule } from '@wm/components/data/form';
import { DialogModule as WM_DialogModule } from '@wm/components/dialogs';
import { AlertDialogModule as WM_AlertDialogModule } from '@wm/components/dialogs/alert-dialog';
import { ConfirmDialogModule as WM_ConfirmDialogModule } from '@wm/components/dialogs/confirm-dialog';
import { DesignDialogModule as WM_DesignDialogModule } from '@wm/components/dialogs/design-dialog';
import { LoginDialogModule as WM_LoginDialogModule } from '@wm/components/dialogs/login-dialog';
import { InputModule as WM_InputModule } from '@wm/components/input';
import { PageModule as WM_PageModule } from '@wm/components/page';
import { ModalModule as ngx_ModalModule } from 'ngx-bootstrap/modal';
import { ComponentType,  RuntimeBaseModule } from '@wm/runtime/base';

    import { ComponentRefProviderService } from '../../../framework/services/component-ref-provider.service';



import { CommonComponent } from './Common.component';

const components = [CommonComponent];

const requiredComponentModules = [
    ngFormsModule,
	ngReactiveFormsModule,
	WM_BasicModule,
	WM_ProgressModule,
	WM_LayoutGridModule,
	WM_FormModule,
	WM_DialogModule,
	WM_AlertDialogModule,
	WM_ConfirmDialogModule,
	WM_DesignDialogModule,
	WM_LoginDialogModule,
	WM_InputModule,
	WM_PageModule,
	ngx_ModalModule
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
export class CommonModule {
    static rootComponent = CommonComponent;
    constructor(componentFactoryResolver: ComponentFactoryResolver) {
        const cf = componentFactoryResolver.resolveComponentFactory(CommonComponent);
        ComponentRefProviderService.registerComponentRef('Common', ComponentType.PARTIAL, CommonComponent, cf);
    }
}
