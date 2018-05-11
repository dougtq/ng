import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'view-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  @Input() public error: string;
  constructor() { }

  ngOnInit() {
  }

}
