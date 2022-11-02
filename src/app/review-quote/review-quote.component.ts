import { Component, OnInit } from '@angular/core';
import { Quote } from './../quote-calculator/quote-calculator.component';

@Component({
  selector: 'app-review-quote',
  templateUrl: './review-quote.component.html',
  styleUrls: ['./review-quote.component.css']
})
export class ReviewQuoteComponent implements OnInit {

  constructor() { }

  quote : Quote = {
    firstName: 'Wagtest',
    lastName: 'Wagtest',
    mobile: '0477095252',
    email: 'wagtesttest@test.com',
    amountRequired: 5000,
    term: 24
  };

  repayments: number = 56.15;
  totalRepayments: number = 5_839.60;
  interest: number = 539.60;
  establishmentFee : number = 300;

  ngOnInit(): void {
  }

}
