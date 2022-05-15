import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-feed',
  templateUrl: './events-feed.component.html',
  styleUrls: ['./events-feed.component.css'],
})
export class EventsFeedComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

events = [
    { id: 1, name: 'Pierwszy event', maxMembers: 10, description: 'OPIS' },
    { id: 1, name: 'Pierwszy event', maxMembers: 10, description: 'OPIS' },
    { id: 1, name: 'Pierwszy event', maxMembers: 10, description: 'OPIS' },
    { id: 1, name: 'Pierwszy event', maxMembers: 10, description: 'OPIS' },
    { id: 1, name: 'Pierwszy event', maxMembers: 10, description: 'OPIS' },
    { id: 1, name: 'Pierwszy event', maxMembers: 10, description: 'OPIS' },
    { id: 1, name: 'Pierwszy event', maxMembers: 10, description: 'OPIS' },
    { id: 1, name: 'Pierwszy event', maxMembers: 10, description: 'OPIS' },
    
  ];

}
