import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../posts.service';
import { PublicacaoInterface } from '../../shared/publicacoes.model';
import { HandlerService } from '../../error-handler.service';

@Component({
  selector: 'app-publicacoes',
  templateUrl: './publicacoes.component.html',
  styleUrls: ['./publicacoes.component.scss']
})
export class PublicacoesComponent implements OnInit {
  public publicacoes: Array<PublicacaoInterface> = [];
  constructor(private posts: PostsService, private handler: HandlerService) { }

  ngOnInit() {
    this.atualizaTimeline();
  }

  public async atualizaTimeline() {
    try {
      this.publicacoes = await this.posts.atualizaTimeline();
    } catch (err) {
      this.handler.showError(err.message, 'Ocorreu um erro!');
    }
  }

}
