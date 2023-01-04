import { teamCard, teamListing } from './../../core/team-list';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  teamCard: teamListing[];
  constructor() {
    this.teamCard = teamCard;
   }

  ngOnInit(): void {
  }

}
