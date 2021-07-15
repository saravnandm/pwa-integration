import { Component, Injector, ViewEncapsulation } from '@angular/core';

import { UserDefinedExecutionContext } from '@wm/core';

import { initScript } from './topnav.component.script';
import { getVariables } from './topnav.component.variables';

import { BasePartialComponent } from '@wm/runtime/base';
import { NotificationService } from 'src/app/services/notification.service';
import { SwPush } from '@angular/service-worker';

@Component({
    selector: 'app-partial-topnav',
    templateUrl: './topnav.component.html',
    styleUrls: ['./topnav.component.css'],
    encapsulation: ViewEncapsulation.None,
    providers: [
        {
            provide: UserDefinedExecutionContext,
            useExisting: TopnavComponent
        }
    ]
})
export class TopnavComponent extends BasePartialComponent {
    readonly VAPID_PUBLIC_KEY = "BHyoUBN7NtNslQsqHB39-GYg2U5dM0bQXo-_h-sHuPibPkdxUXKWGyruNPHGihCuroz5rLM9_vPiySAtI5d7gyA";

    partialName = 'topnav';
    [key: string]: any;

    constructor(public injector: Injector, private swPush: SwPush, private notificationService: NotificationService) {
        super();
        super.init();
    }

    getVariables() {
        return getVariables();
    }

    evalUserScript(Partial, App, Utils) {
        initScript(Partial, App, Utils);
    }

    async notify() {
        console.log("requesting subscription");
        if (this.swPush.isEnabled) {
            try {
                const sub = await this.swPush.requestSubscription({
                    serverPublicKey: this.VAPID_PUBLIC_KEY
                });
                console.log(`got subscription: ${JSON.stringify(sub)}`);
                await this.notificationService.addPushSubscriber(sub).toPromise();
                console.log("successfully send subscription details");
            } catch(e) {
                console.error("Error requesting subscription", e);
            }
        } else {
            console.error("Service worker not enabled");
        }
    }
}
