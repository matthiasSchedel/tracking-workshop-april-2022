import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as uuid from "uuid";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'super-test-store';
  price: number = 1000;
  analytics: any = null;
  sessionId: string | null = "";

  constructor(private httpClient: HttpClient) {
  }


  triggerPurchase() {
    console.log('triggerPurchase');
  }
  triggerAddToCart() {
    console.log('triggerAddToCart');
  }

  ngOnInit(): void {

    }

    
}
