import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AcessoComponent } from './acesso/acesso.component';
import { BannerComponent } from './acesso/banner/banner.component';
import { LoginComponent } from './acesso/login/login.component';
import { CadastroComponent } from './acesso/cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { PublicacoesComponent } from './home/publicacoes/publicacoes.component';
import { IncluirPublicacaoComponent } from './home/incluir-publicacao/incluir-publicacao.component';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { HandlerService } from './error-handler.service';
import { PostsService } from './posts.service';
import { ProgressService } from './progess.service';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    AcessoComponent,
    LoginComponent,
    CadastroComponent,
    HomeComponent,
    PublicacoesComponent,
    IncluirPublicacaoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [AuthService, AuthGuard, HandlerService, PostsService, ProgressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
