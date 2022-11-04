import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuoteService } from '../quote.service';
import { Quote } from './../models/quote';

@Component({
  selector: 'app-review-quote',
  templateUrl: './review-quote.component.html',
  styleUrls: ['./review-quote.component.css']
})
export class ReviewQuoteComponent implements OnInit {

  constructor(private _quoteService : QuoteService, private _route : ActivatedRoute, private _router : Router) { }

  quote : Quote = {};
  totalRepayments : number = 0;
  editButtonLink: string = "";

  applyQuote() : void {
    this._quoteService.applyQuote(this.quote)
      .subscribe(response => {
        console.log(response.body);
        if(response.ok)
          alert('Quote saved successfully!'); // TODO: make a separate success page.
      });
  }

  
  editInfo() : void {
    this._router.navigate([`/quote-calculator/${this.quote.id}`])
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      const quoteId = params['quoteId'];
      
      this.editButtonLink = `quote-calculator/${quoteId}`;

      // GET quote
      if(quoteId && quoteId > 0)
        this._quoteService.getQuote(quoteId)
          .subscribe(data => {
            console.log(data);
            this.quote = data;
            this.totalRepayments = (this.quote.repayment || 0 ) * (this.quote.paymentPeriods  || 0);
          });
    });
  }

}
