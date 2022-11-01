import { Component, OnInit } from '@angular/core';

interface Quote {
  amountRequired?: number,
  term?: number,
  title?: string,
  firstName?: string,
  lastName?: string,
  dateOfBirth?: Date,
  mobile?: string,
  email?: string
};

@Component({
  selector: 'app-quote-calculator',
  templateUrl: './quote-calculator.component.html',
  styleUrls: ['./quote-calculator.component.css']
})

export class QuoteCalculatorComponent implements OnInit {
  
  sliderAmountLabel : string = 'How much do you need?';
  sliderTermLabel : string = 'Loan duration (months)'
  amountMax : number = 15_000;
  amountMin : number = 2_000;
  termMin: number = 1;
  termMax: number = 60;

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

  constructor() { }

  ngOnInit(): void {
    // fetch from service
  }

}
