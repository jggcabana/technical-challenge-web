import { Component, OnInit } from '@angular/core';
import {Observable, Observer} from 'rxjs';
import { Router, ActivatedRoute, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-main-tabs',
  templateUrl: './main-tabs.component.html',
  styleUrls: ['./main-tabs.component.css']
})

export class MainTabsComponent implements OnInit {
  navLinks: any[];
  quoteId? : number;
  activeLinkIndex = -1;

  constructor(private router: Router, private _route : ActivatedRoute){
    this.navLinks = [
      {
        label: 'Quote Calculator',
        link: `./quote-calculator`,
        index: 0
      }, {
        label: 'Review Quote',
        link: './review-quote',
        index: 1
      }
    ]
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = 
        this.navLinks.indexOf(
          this.navLinks.find(x => 
            x.link === '.' + this.router.url))
    });

    this.router.events.subscribe(val => {
      if (val instanceof RoutesRecognized) {
          this.quoteId = val.state.root.firstChild?.params['quoteId'];
      }
  });

    // this._route.params.subscribe(params => {
    //   console.log(this._route);
    //   this.quoteId = params['quoteId'];
    // });
  }
}
