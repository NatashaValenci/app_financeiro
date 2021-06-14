import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pagina/login/login.component';
import { HomeComponent } from './pagina/home/home.component';
import { HeaderComponent } from './pagina/header/header.component';
import { NavbarComponent } from './pagina/navbar/navbar.component';
import { ListaComponent } from './pagina/lista/lista.component';
import { LOCALE_ID } from '@angular/core';
import { FormularioComponent } from './pagina/formulario/formulario.component';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr);


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    ListaComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [{ provide:LOCALE_ID, useValue:'pt'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
