import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { auth } from 'firebase';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/Rx';

import { PostsService } from '../../posts.service';
import { ProgressService } from '../../progess.service';
import { Subject, operators } from 'rxjs/Rx';

@Component({
  selector: 'app-incluir-publicacao',
  templateUrl: './incluir-publicacao.component.html',
  styleUrls: ['./incluir-publicacao.component.scss']
})
export class IncluirPublicacaoComponent implements OnInit {
  @Output() public atualizaTimeLine: EventEmitter<any> = new EventEmitter<any>();
  public formulario: FormGroup = new FormGroup({
    'titulo': new FormControl(null, [Validators.required]),
    'img': new FormControl(null)
  });

  public img: any;
  public progressoPublicacao: string;
  public porcentagemUpload: number;

  constructor(private postsService: PostsService, private progess: ProgressService) { }

  ngOnInit() {
    // auth().onAuthStateChanged((user) => {});
  }

  public publicar() {
    if (this.img && this.formulario.valid) {
      this.postsService.publicar({
        titulo: this.formulario.value,
        img: this.img
      });

      const uploadStatus = Observable.interval(2000);
      const continua = new Subject();

      continua.next(true);

      uploadStatus
        .takeUntil(continua)
        .subscribe(() => {
          this.progressoPublicacao = 'andamento';
          this.porcentagemUpload = Math.round((this.progess.estado.bytesTransferred / this.progess.estado.totalBytes) * 100);
          if (this.progess.state === 'concluido') {
            this.progressoPublicacao = this.progess.state;
            continua.next(false);
            this.atualizaTimeLine.emit();
          }
        });
    }
  }

  public setImage($event: Event) {
    this.img = (<HTMLInputElement>$event.target).files[0];
  }

}
