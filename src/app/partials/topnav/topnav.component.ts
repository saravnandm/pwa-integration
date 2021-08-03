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
    readonly VAPID_PUBLIC_KEY = "BBFn_uPDK0L4hc9Lmk1e4yZv4LA2Qi1mjXtGKSOup_g0UMfxRoQgZZFH0riGveUvhBftu_YkshRxgfzKZWEW3BE";

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

    async checkUpdate() {
        console.log("checking update...");
        if (this.swUpdate.isEnabled) {
            console.log("SW supported");
            this.swUpdate.available.subscribe(() => {
                if(confirm("New version of the app is available. Select OK to view the update")) {
                    window.location.reload();
                }
            });
        }        
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
