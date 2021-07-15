import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule, APP_BASE_HREF } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { RuntimeBaseModule, CanDeactivateNgPageGuard } from '@wm/runtime/base';
import { FormsModule as ngFormsModule } from '@angular/forms';
import { ReactiveFormsModule as ngReactiveFormsModule } from '@angular/forms';
import { LoginModule as WM_LoginModule } from '@wm/components/advanced/login';
import { BasicModule as WM_BasicModule } from '@wm/components/basic';
import { ProgressModule as WM_ProgressModule } from '@wm/components/basic/progress';
import { LayoutGridModule as WM_LayoutGridModule } from '@wm/components/containers/layout-grid';
import { FormModule as WM_FormModule } from '@wm/components/data/form';
import { DialogModule as WM_DialogModule } from '@wm/components/dialogs';
import { DesignDialogModule as WM_DesignDialogModule } from '@wm/components/dialogs/design-dialog';
import { InputModule as WM_InputModule } from '@wm/components/input';
import { PageModule as WM_PageModule } from '@wm/components/page';
import { ModalModule as ngx_ModalModule } from 'ngx-bootstrap/modal';

import { AppCodeGenModule } from '../../app-codegen.module';



import { LoginComponent } from './Login.component';

const components = [LoginComponent];

const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        canDeactivate: [CanDeactivateNgPageGuard]
    }
];

const requiredComponentModules = [
    ngFormsModule,
	ngReactiveFormsModule,
	WM_LoginModule,
	WM_BasicModule,
	WM_ProgressModule,
	WM_LayoutGridModule,
	WM_FormModule,
	WM_DialogModule,
	WM_DesignDialogModule,
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
        RouterModule.forChild(routes),
        NgCommonModule,
        AppCodeGenModule,
        RuntimeBaseModule
    ],
    exports: components
})
export class LoginModule {

}

