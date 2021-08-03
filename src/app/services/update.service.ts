import { Injectable } from "@angular/core";
import { SwUpdate } from "@angular/service-worker";
import { interval } from "rxjs";

@Injectable()
export class UpdateService {
  constructor(public updates: SwUpdate) {
    if (updates.isEnabled) {
      interval(6 * 60 * 60).subscribe(() =>
        updates.checkForUpdate().then(() => console.log("checking for updates"))
      );
    }
  }

  public checkForUpdates(): void {
    this.updates.available.subscribe((event) => this.promptUser());
  }

  private promptUser(): void {
    console.log("updating to new version");
    if (
      confirm(
        "New version of the app is available. Select OK to view the update"
      )
    ) {
      document.location.reload();
    }
    //this.updates.activateUpdate().then(() => document.location.reload());
  }
}
