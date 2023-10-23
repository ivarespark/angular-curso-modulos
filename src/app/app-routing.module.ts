import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// aqui se definen todas las rutas
const routes: Routes = [];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
