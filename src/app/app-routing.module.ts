import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeModule } from './welcome/welcome.module';

// aqui se definen todas las rutas
const routes: Routes = [
  {
    path: '',
    loadChildren:() => import('./welcome/welcome.module').then(m => m.WelcomeModule)
  },
  {
    path: 'courses',
    loadChildren:() => import('./courses/courses.module').then(m => m.CoursesModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
