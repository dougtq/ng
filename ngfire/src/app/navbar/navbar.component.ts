import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public title = 'NgFire';
  public routes = [
    {
      link: 'angular',
      name: 'Angular'
    },
    {
      link: 'vue',
      name: 'Vue'
    },
    {
      link: 'react',
      name: 'React'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
