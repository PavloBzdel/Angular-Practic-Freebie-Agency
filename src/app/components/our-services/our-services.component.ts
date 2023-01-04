import { card, cardListing } from './../../core/card-list';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent implements OnInit {
  card: cardListing[];
  constructor() {
    this.card = card;
  }

  ngOnInit(): void {
  }

}
