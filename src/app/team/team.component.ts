import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  images = [
    {path: 'https://source.unsplash.com/800x600/?nature'},
    {path: 'https://source.unsplash.com/800x600/?car'},
    {path: 'https://source.unsplash.com/800x600/?moto'},
    {path: 'https://source.unsplash.com/800x600/?fantasy'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}