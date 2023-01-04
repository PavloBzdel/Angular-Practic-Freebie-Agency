import { worksCardLeft, workListing, worksCardRight } from './../../core/works-list';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  worksCardLeft: workListing[];
  worksCardRight: workListing[];
  constructor() {
    this.worksCardLeft = worksCardLeft;
    this.worksCardRight = worksCardRight;
   }

  ngOnInit(): void {
  }

}
