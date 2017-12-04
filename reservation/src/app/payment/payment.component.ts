import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  template: `
    <p>
      여기는 결제페이지.
    </p>

    <a href="../../assets/pay.html">결제하기</a>
 
    
  `,
  styles: []
})
export class PaymentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
