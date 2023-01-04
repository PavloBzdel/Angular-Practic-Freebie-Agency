import { response, responseList } from './../../core/contact-us-response';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  @Input() response:responseList[];
  constructor() {
    this.response = response;
   }

  selectedIndex = 0;
  ngOnInit(): void {
  }

  onPrevClick():void{
    if (this.selectedIndex === 0){
      this.selectedIndex = this.response.length -1;
    }else{
      this.selectedIndex--;
    }
  }
  onNextClick():void{
    if(this.selectedIndex === this.response.length -1){
      this.selectedIndex = 0;
    }else{
      this.selectedIndex++;
    }
  }
}
