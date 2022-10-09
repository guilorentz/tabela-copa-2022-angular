import { FaseGruposComponent } from './pages/fase-grupos/fase-grupos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartidasComponent } from './pages/partidas/partidas.component';

const routes: Routes = [
  {
    path: 'fase-grupos',
    component: FaseGruposComponent
  },
  {
    path: 'partidas',
    component: PartidasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
