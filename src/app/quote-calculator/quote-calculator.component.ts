import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { QuoteService } from '../quote.service';
import { Quote } from './../models/quote';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-quote-calculator',
  templateUrl: './quote-calculator.component.html',
  styleUrls: ['./quote-calculator.component.css']
})

export class QuoteCalculatorComponent implements OnInit {
  
  constructor(private _quoteService : QuoteService, private _route : ActivatedRoute, private _router : Router) { }

  sliderAmountLabel : string = 'How much do you need?';
  sliderTermLabel : string = 'Loan duration (months)'
  amountMax : number = 15_000;
  amountMin : number = 2_000;
  termMin: number = 1;
  termMax: number = 60;
  products : Product[] = [];
  selectedProduct: any = {};

  quote : Quote = {};
  titles : any[] = [
    {
      value: "Mr.", viewValue: "Mr."
    }, {
      value: "Ms.", viewValue: "Ms."
    }, {
      value: "Mrs.", viewValue: "Mrs."
    }
  ]

  calculateQuote() : void {
    this._quoteService.calculateQuote(this.quote)
      .subscribe((response) => {
        if(response.ok)
          this._router.navigate([`/review-quote/${this.quote.id}`])
      });
  }

  ngOnInit(): void {
    
    this._quoteService.getProducts()
      .subscribe(data => (this.products = data));

    this._route.params.subscribe(params => {
      const quoteId = params['quoteId'];
      
      // GET quote
      if(quoteId && quoteId > 0)
        this._quoteService.getQuote(quoteId)
          .subscribe(data => {
            this.quote = data;
            if(this.quote.product)
              this.selectedProduct = this.products[this.products.findIndex(x => x.id === this.quote.product?.id)];
          });

    });
  }
}
