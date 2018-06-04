import { Injectable } from '@angular/core';
import { database, storage } from 'firebase';

import { PublicacaoInterface } from './shared/publicacoes.model';
import { AuthService } from './auth.service';
import { HandlerService } from './error-handler.service';
import { ProgressService } from './progess.service';

@Injectable()
export class PostsService {
  constructor(private auth: AuthService, private handler: HandlerService, private progess: ProgressService) {}

  public publicar(publicacao: any): void {
    database()
    .ref(`publicacoes/${btoa(this.auth.getEmail())}`)
    .push({ titulo: publicacao.titulo })
    .then((res) => {
      const nomeImg = res.key;
      storage().ref()
      .child(`/imagens/${nomeImg}`)
      .put(publicacao.img)
      .on(storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {
          this.progess.state = 'andamento';
          this.progess.estado = snapshot;
        },
        (err) => {
          this.progess.state = 'error';
          this.handler.showError(err.message, 'Erro no upload!');
        },
        () => {
          this.progess.state = 'concluido';
          this.handler.showSuccess('Seu post foi criado!', 'Ação realizada');
        });
    }, () => {
      this.progess.state = 'error';
      this.handler.showError('Não foi possível criar sua publicação...', 'Erro no upload!');
    });
  }

  public atualizaTimeline(): Promise<PublicacaoInterface[]> {
    const publicacoes: Array<PublicacaoInterface> = [];
    return new Promise((resolve, reject) => {
      database()
        .ref(`publicacoes/${btoa(this.auth.getEmail())}`)
        .once('value')
        .then((snapshot) => {
          snapshot.forEach((snapshotChild) => {
            storage()
              .ref()
              .child(`imagens/${snapshotChild.key}`)
              .getDownloadURL()
              .then(async (url: string) => {
                const publicacao = snapshotChild.val().titulo;
                database()
                .ref(`users/${btoa(this.auth.getEmail())}`)
                  .once('value')
                  .then((user) => {
                    publicacao.urlImagem = url;
                    publicacao.usuario = user.val().usuario;
                    publicacoes.push(publicacao);
                  })
                  .catch((err) => reject(Error('Erro ao carregar a timeline!')));
              })
              .catch((err) => reject(Error('Erro ao carregar a timeline!')));
            });
            return resolve(publicacoes);
          })
        .catch((err) => {
          return reject(Error('Erro ao carregar a timeline!'));
        });
      });
    }
  }
