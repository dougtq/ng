import { Component, OnInit } from '@angular/core';
import { NavService } from './nav.service';
import { Nav } from '../shared/nav.model';

@Component({
  selector: 'view-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [NavService]
})
export class TopoComponent implements OnInit {
  navs: Array<Nav>;

  constructor(private navService: NavService) { }

  ngOnInit() {
    this.navs = this.navService.getNavLinks();
  }

}
