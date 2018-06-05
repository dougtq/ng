import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('publicacoes') public publicacoes;
  constructor(private authService: AuthService) { }

  ngOnInit() {}

  public logOut(): void {
    this.authService.logOut();
  }


  public atualizaTimeLine(): void {
    this.publicacoes.atualizaTimeline();
  }
}
