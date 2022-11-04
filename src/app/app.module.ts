import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// angular material
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { QuoteCalculatorComponent } from './quote-calculator/quote-calculator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainTabsComponent } from './main-tabs/main-tabs.component';
import { ReviewQuoteComponent } from './review-quote/review-quote.component';
import { QuoteService } from './quote.service';

const routes : Routes =  [
  { path: 'quote-calculator', component : QuoteCalculatorComponent },
  { path: 'quote-calculator/:quoteId', component : QuoteCalculatorComponent },
  { path: 'review-quote', component : ReviewQuoteComponent },
  { path: 'review-quote/:quoteId', component : ReviewQuoteComponent },
  { path: '', redirectTo: '/quote-calculator', pathMatch: 'full'}
  // TODO: create PageNotFound component
]

@NgModule({
  declarations: [
    AppComponent,
    QuoteCalculatorComponent,
    MainTabsComponent,
    ReviewQuoteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    MatTabsModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatButtonModule
  ],
  providers: [QuoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
