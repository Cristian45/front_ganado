import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalsComponent } from "./components/animals/animals.component";
import { AddAnimlasComponent } from "./components/add-animlas/add-animlas.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/animals',
    pathMatch: 'full'
  },
  {
    path: 'animals',
    component: AnimalsComponent,

  },
  {
    path:'animals/add',
    component:AddAnimlasComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
