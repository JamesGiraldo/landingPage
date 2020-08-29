import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BodyComponent } from './components/contenido/body/body.component';
import { HeaderComponent } from './components/contenido/header/header.component';
import { FooterComponent } from './components/contenido/footer/footer.component';
import { ProcesosComponent } from './components/contenido/procesos/procesos.component';
import { TarjetasComponent } from './components/contenido/tarjetas/tarjetas.component';
import { SubcripcionComponent } from './components/contenido/subcripcion/subcripcion.component';
import { CredibilidadComponent } from './components/contenido/credibilidad/credibilidad.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HeaderComponent,
    FooterComponent,
    ProcesosComponent,
    TarjetasComponent,
    SubcripcionComponent,
    CredibilidadComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
