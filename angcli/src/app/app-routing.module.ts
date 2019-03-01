import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { LibroComponent } from './libro/libro.component';

const routes: Routes = [

  {path:"inicio", component:InicioComponent},
  {path:"libro", component:LibroComponent},
  {path:"libromod", loadChildren:"./modules/libro/libro.module#LibroModule"},
  {path:"",redirectTo:"inicio",pathMatch:"full"},
  {path:"**",redirectTo:"inicio",pathMatch:"full"},
  //el # es para que escoja ese componente por defecto


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
