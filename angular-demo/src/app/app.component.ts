import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as uuid from "uuid";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'mableai';
  counter: number = 0;
  analytics: any = null;
  sessionId: string | null = "";

  constructor(private httpClient: HttpClient) {
  }

  sendToBackend(event: any) {
    this.httpClient.post("https://bff.dev.mable.ai/test/event", event).subscribe((res) => {
      console.log(res);
    });
  }

  trigger() {
    this.counter = this.counter + 1;
    this.sendToBackend({
      "event": "AddToCart",
      "eventType": "track",
      "clientId": location.hostname,
      "id": uuid.v4(),
      "sentAt": (new Date()).toISOString(),
      "userId": "",
      "identity": "",
      "sessionId": this.sessionId,
      "timestamp": Math.floor(Date.now() / 1000).toString(),
      "originalTimestamp": Math.floor(Date.now() / 1000).toString(),
      "context": {
        "page": {
          "referrerUrl": document.referrer,
          "urlPath": window.location.pathname,
          "urlTitle": document.title,
          "host": window.location.host
        },
        "library": {
          "name":"mable-ai-analytics",
          "version":"1.2.3",
          "nodeVersion":"14.17.6",
          "wrapperName":"LP DEMO"
        },
      },
      "customData": { }
    });
  }

  ngOnInit(): void {
    this.sessionId = localStorage.getItem("session");

    if (!this.sessionId) {
      this.sessionId = uuid.v4();
      this.sendToBackend({
        "event": "Identify",
        "eventType": "identify",
        "clientId": location.hostname,
        "id": uuid.v4(),
        "sentAt": (new Date()).toISOString(),
        "sessionId": this.sessionId,
        "timestamp": Math.floor(Date.now() / 1000).toString(),
        "originalTimestamp": Math.floor(Date.now() / 1000).toString(),
        "context": {
          "library": {
            "name":"mable-ai-analytics",
            "version":"1.2.3",
            "nodeVersion":"14.17.6",
            "wrapperName":"LP DEMO"
          },
        },
        "customData": {}
      });
    }

    localStorage.setItem("session", this.sessionId as string);

    this.sendToBackend({
      "event": "PV_LP",
      "eventType": "page_view",
      "clientId": location.hostname,
      "id": uuid.v4(),
      "sentAt": (new Date()).toISOString(),
      "userId": "",
      "identity": "",
      "sessionId": this.sessionId,
      "timestamp": Math.floor(Date.now() / 1000).toString(),
      "originalTimestamp": Math.floor(Date.now() / 1000).toString(),
      "context": {
        "page": {
          "referrerUrl": document.referrer,
          "urlPath": window.location.pathname,
          "urlTitle": document.title,
          "host": window.location.host
        },
        "library": {
          "name":"mable-ai-analytics",
          "version":"1.2.3",
          "nodeVersion":"14.17.6",
          "wrapperName":"LP DEMO"
        },
      },
      "customData": { }
    });
  }
}
