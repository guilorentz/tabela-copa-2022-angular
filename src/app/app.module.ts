import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardGrupoComponent } from './components/card-grupo/card-grupo.component';
import { FaseGruposComponent } from './pages/fase-grupos/fase-grupos.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PartidasComponent } from './pages/partidas/partidas.component';
import { PartidasGrupoComponent } from './components/partidas-grupo/partidas-grupo.component';
import { PartidaComponent } from './components/partida/partida.component';

@NgModule({
  declarations: [
    AppComponent,
    CardGrupoComponent,
    FaseGruposComponent,
    NavbarComponent,
    PartidasComponent,
    PartidasGrupoComponent,
    PartidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
