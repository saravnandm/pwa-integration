import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class NotificationService {
  constructor(private http: HttpClient) {}

  addPushSubscriber(sub: any) {
    return this.http.post("https://affectionate-liskov-6bc202.netlify.app/.netlify/functions/api/notifications/register", sub, {
      responseType: "text",
    });
  }
}
