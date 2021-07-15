import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule, APP_BASE_HREF } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { RuntimeBaseModule, CanDeactivateNgPageGuard } from '@wm/runtime/base';
import { FormsModule as ngFormsModule } from '@angular/forms';
import { ReactiveFormsModule as ngReactiveFormsModule } from '@angular/forms';
import { BasicModule as WM_BasicModule } from '@wm/components/basic';
import { ProgressModule as WM_ProgressModule } from '@wm/components/basic/progress';
import { ChartModule as WM_ChartModule } from '@wm/components/chart';
import { ListModule as WM_ListModule } from '@wm/components/data/list';
import { LiveTableModule as WM_LiveTableModule } from '@wm/components/data/live-table';
import { PaginationModule as WM_PaginationModule } from '@wm/components/data/pagination';
import { TableModule as WM_TableModule } from '@wm/components/data/table';
import { InputModule as WM_InputModule } from '@wm/components/input';
import { MenuModule as WM_MenuModule } from '@wm/components/navigation/menu';
import { PageModule as WM_PageModule } from '@wm/components/page';
import { FooterModule as WM_FooterModule } from '@wm/components/page/footer';
import { HeaderModule as WM_HeaderModule } from '@wm/components/page/header';
import { TopNavModule as WM_TopNavModule } from '@wm/components/page/top-nav';
import { BsDropdownModule as ngxBsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PaginationModule as ngxPaginationModule } from 'ngx-bootstrap/pagination';
import { TooltipModule as ngxTooltipModule } from 'ngx-bootstrap/tooltip';

import { AppCodeGenModule } from '../../app-codegen.module';

import { HeaderModule as PartialHeaderModule} from '../../partials/header/header.module';
import { TopnavModule as PartialTopnavModule} from '../../partials/topnav/topnav.module';
import { FooterModule as PartialFooterModule} from '../../partials/footer/footer.module';

import { MainComponent } from './Main.component';

const components = [MainComponent];

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        canDeactivate: [CanDeactivateNgPageGuard]
    }
];

const requiredComponentModules = [
    ngFormsModule,
	ngReactiveFormsModule,
	WM_BasicModule,
	WM_ProgressModule,
	WM_ChartModule,
	WM_ListModule,
	WM_LiveTableModule,
	WM_PaginationModule,
	WM_TableModule,
	WM_InputModule,
	WM_MenuModule,
	WM_PageModule,
	WM_FooterModule,
	WM_HeaderModule,
	WM_TopNavModule,
	ngxBsDropdownModule.forRoot(),
	ngxPaginationModule.forRoot(),
	ngxTooltipModule.forRoot()
];

const requiredPartialModules = [
    PartialHeaderModule,
	PartialTopnavModule,
	PartialFooterModule
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
export class MainModule {

}

