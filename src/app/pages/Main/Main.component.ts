import { Component, Injector, OnInit, ViewEncapsulation } from '@angular/core';

import { UserDefinedExecutionContext } from '@wm/core';

import { initScript } from './Main.component.script';
import { getVariables } from './Main.component.variables';

import { BasePageComponent } from '@wm/runtime/base';
import { UpdateService } from 'src/app/services/update.service';

@Component({
    selector: 'app-page-Main',
    templateUrl: './Main.component.html',
    styleUrls: ['./Main.component.css'],
    encapsulation: ViewEncapsulation.None,
    providers: [
        {
            provide: UserDefinedExecutionContext,
            useExisting: MainComponent
        }
    ]
})
export class MainComponent extends BasePageComponent implements OnInit {

    pageName = 'Main';
    [key: string]: any;

    constructor(public injector: Injector, private sw: UpdateService) {
        super();
        super.init();

    }

    ngOnInit(): void {
        // check the service worker for updates
        this.sw.checkForUpdates();
    }

    getVariables() {
        return getVariables();
    }

    evalUserScript(Page, App, Utils) {
        initScript(Page, App, Utils);
    }
}
