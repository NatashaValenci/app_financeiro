import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './pagina/formulario/formulario.component';
import { HomeComponent } from './pagina/home/home.component';
import { ListaComponent } from './pagina/lista/lista.component';
import { LoginComponent } from './pagina/login/login.component';

const routes: Routes = [
  {path:'', component:LoginComponent, pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'lista', component:ListaComponent},
  {path:'formulario', component:FormularioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
